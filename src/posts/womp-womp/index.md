---
title: Womp Womp
datePublished: 2024-08-12
description: How I made a funny website to track how many times I say 'Womp Womp'
---

<script>
	import astrodb from '$lib/imgs/blog/womp-womp/astrodb.png?enhanced';
	import mvp from '$lib/imgs/blog/womp-womp/mvp.png?enhanced';
	import counter1 from '$lib/imgs/blog/womp-womp/counter-1.png?enhanced';
	import counter2 from '$lib/imgs/blog/womp-womp/counter-2.png?enhanced';
	import counter3 from '$lib/imgs/blog/womp-womp/counter-3.png?enhanced';
	import counterQuarters from '$lib/imgs/blog/womp-womp/counter-quarters.png?enhanced';
</script>

_As of right now, I have over 300 'womps' tracked on ['Womp Womp'](https://counter.womp.lol)._

### Why 'Womp Womp'?

I'm a big fan of the 'Womp Womp' meme. I started saying ironically in early 2024, but it has spiraled out of control. It's become an issue that I can't ignore.

So I decided to make a website to allow my friends to track how many times I say 'Womp Womp'. Maybe it will help me get over it...

### MVP time

The original version of the site was built with [Astro](https://astro.build), using their new DB product called Astro DB. It was meant to be a simple website to track how many times I say 'Womp Womp'.

![The MVP of the website]({mvp})

In fact! It didn't even store the individual entries of someone pushing the button! I was just running an SQL update transaction.

![Astro DB's dashboard]({astrodb})

After a few days, it became obvious that if I wanted to keep user interaction with the game, I would need to add leaderboards.

My first problem was since I was tracking individual button presses, I would need to adjust my DB calls to insert instead of update.

```ts
await db
	.update(Womps)
	.set({
		lastUpdated: lastUpdated,
		total: data[0].old_total + 1
	})
	.where(eq(Womps.id, 1));
```

> Update

```ts
// Figure out how to condense this into a single query
let data = await db
	.insert(Womps)
	.values({
		last_updated: new Date(),
		updated_by: cookies.get('id')!.number()
	})
	.returning({
		last_updated: Womps.last_updated,
		updated_by: Womps.updated_by
	});
```

> Insert

While this is a good start, I needed to figure out how to properly store user data. I decided to store the user's ID in a cookie, and then use that to update the user's entry in the DB.

Additionally, I wanted to have a way to have usernames. This is where I decided to use vercel's K/V store. This allows me to store a user's username as a translation key, and then use that key to fetch the username from the store.

```ts
const username = await kv.get<string>(`user:${params.get('id')}`);
```

![New UI showing the user's username]({counter1})


Now that I have a way to store user data, I can start to add leaderboards.

### The leaderboard

My first idea for the leaderboard was to just show the top 5 people who had pressed the button the most. I could do this by using the `count` function in the DB.

```ts
let wompTotals = await db.select({
        updated_by: Womps.updated_by,
        total: sql<number>`count(*)`.as("total"),
    }).from(Womps).groupBy(Womps.updated_by).orderBy(desc(sql`total`)).limit(10);
```

This would give me the top 10 users who have pressed the button the most.

![The leaderboard]({counter2})

#### Polishing Time

I wanted to add a little polish to the site, so I decided that it needed a bit of a redesign.

![The redesigned site]({counter3})

While being similar to the original version, I think the counter being a bit more prominent works a lot better.


### Vercel kinda sucks

The original hosting for this site was on Vercel, using their free tier. At some point, I started getting a lot of errors relating to usernames. Remember, I was using Vercel's K/V store to store usernames.

Turns out, I had hit the limit of how many GET requests to the KV I could make. This prompted me to look into other options.


#### Cloudflare

I decided to switch to Cloudflare, since they have a free tier. With Cloudflare, I could use their entire worker suite to power all parts of the site. This would allow me to use one interface to handle of the database, KV store, and the frontend.


Because of the great integration that Astro has with Cloudflare, I had minimal code changes to make. I was able to use Drizzle to handle the database, and the KV store API was very similar to Vercel's KV store API.


### The future

I've made a small amount of changes since the CloudFlare upgrade. Furthermore, I've optimized database calls using batching, and I've added quarterly resets to the leaderboard. 

![Leaderboard with the quarter tabs]({counterQuarters})

I also migrated from Astro to SvelteKit, since my plans changed to have a more dynamic site. That migration, while not painless, wasn't too bad.

Near the end of my academic year, it became more of a burden to put entries on the counter. Especially since I was having issues with user authentication. So it's been left as a side project for now. I might revisit it and give it a proper Android/iOS app. This would allow them to have a widget on their home screen to easily track their 'womps'.

This was a fun project to make, and I'm glad I was able to make it. It taught me a lot about SQL, and how to make proper migrations. I'm excited to see what future 'meme' projects I will make.

Till next time,

-- Riley


> If you want to see the code for this site, it's [here](https://github.com/qpixel/womp-womp).

