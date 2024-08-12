---
title: Womp Womp
datePublished: 2024-08-13
description: How I made a funny website to track how many times I say 'Womp Womp'
locked: true
---

<script>
	import astrodb from '$lib/imgs/blog/womp-womp/astrodb.png?enhanced';
	import mvp from '$lib/imgs/blog/womp-womp/mvp.png?enhanced';
	import counter1 from '$lib/imgs/blog/womp-womp/counter-1.png?enhanced';
</script>

_As of right now, I have over 300 'womps' tracked on ['Womp Womp'](https://counter.womp.lol)._

### Why 'Womp Womp'?

I'm a big fan of the 'Womp Womp' meme. I started saying ironically in early 2024, but it has spiraled out of control. It's become an issue that I can't ignore.

So I decided to make a website to allow my friends to track how many times I say 'Womp Womp'. Maybe it will help me get over it...

### The original tech stack

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