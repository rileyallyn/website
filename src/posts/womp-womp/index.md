---
title: Womp Womp
datePublished: 2024-08-09
description: How I made a funny website to track how many times I say 'Womp Womp'
locked: false
---

*As of right now, I have over 300 'womps' tracked on ['Womp Womp'](https://counter.womp.lol).*

<script>
	import astrodb from '$lib/imgs/blog/womp-womp/astrodb.png';
	import mvp from '$lib/imgs/blog/womp-womp/mvp.png';
</script>

### Why 'Womp Womp'?

I'm a big fan of the 'Womp Womp' meme. I started saying ironically in early 2024, but it has spiraled out of control. It's become an issue that I can't ignore.

So I decided to make a website to allow my friends to track how many times I say 'Womp Womp'. Maybe it will help me get over it...

### The original tech stack

The original version of the site was built with [Astro](https://astro.build), using their new DB product called Astro DB. It was meant to be a simple website to track how many times I say 'Womp Womp'. So it did not contain any user authentication or anything fancy.

![The MVP of the website]({mvp})

In fact! It didn't even store the individual entries of someone pushing the button! I was just running an SQL update transaction.

![Astro DB's dashboard]({astrodb})

After a few days, it became obvious that if I wanted to keep user interaction with the game, I would need to add leaderboards.

After deciding on adding leaderboards, I realized was not tracking who had clicked the button. So as a stop gap measure, I updated my DB schema to be adding individual button presses.


```ts
const { db } = await connectToDatabase();
const { data } = await db.select().from('womp_womps').where('user_id', '=', userId);
```


### The rewrite, pt. 1

Qui duis duis ullamco ea qui velit tempor laborum minim occaecat. Proident nostrud voluptate velit duis. Dolor exercitation ipsum proident adipisicing cupidatat pariatur mollit cupidatat et in. Sit culpa anim dolore sit culpa ad nulla aliqua proident velit et. Est ad nostrud cupidatat nulla ad nisi exercitation. Ex nulla esse voluptate exercitation ex ex deserunt dolore sunt non aliquip.

Ex id in duis irure. Voluptate ea ullamco ea deserunt adipisicing magna nostrud. Labore dolor enim mollit labore qui ullamco irure ea dolor ipsum amet occaecat deserunt. Exercitation culpa velit ex Lorem.

Deserunt enim voluptate et amet ut ut aliquip eu reprehenderit proident. Ea dolor deserunt amet aliquip reprehenderit officia pariatur mollit sunt cillum voluptate ipsum fugiat. Eiusmod sint amet irure dolore. Aliqua duis elit mollit tempor eu labore pariatur incididunt ut id culpa ex enim. Sunt dolor magna voluptate cillum dolore anim tempor cupidatat anim sunt sunt irure tempor dolore. Aliqua labore mollit consectetur reprehenderit labore elit culpa nulla deserunt ut.

Non nisi culpa ea magna Lorem labore mollit reprehenderit deserunt eiusmod in et ullamco adipisicing. Exercitation amet laborum aliquip id cupidatat exercitation nisi ea sint esse irure deserunt labore. Id adipisicing fugiat enim do ut. Aute eu esse minim tempor nisi.

Incididunt sint nulla irure tempor amet nulla occaecat et laborum veniam sunt. Ut ex velit deserunt ut magna consectetur culpa nisi. Et mollit irure do ipsum qui laboris eiusmod fugiat officia velit nostrud sint.

Reprehenderit ipsum eiusmod tempor nostrud qui enim nisi cupidatat commodo. Labore occaecat duis sit amet nulla tempor fugiat deserunt nisi excepteur. Eiusmod consectetur magna proident esse. Dolore aliquip fugiat veniam in aute dolore sunt cupidatat nostrud.

Tempor ea aliqua excepteur nulla consequat pariatur proident duis mollit laborum. Voluptate laboris quis non adipisicing. Tempor fugiat mollit laboris et culpa laborum ullamco quis nisi elit culpa. Qui consectetur deserunt elit pariatur anim ea Lorem magna nisi ut laboris id ad incididunt. Nulla sunt mollit exercitation esse consectetur proident magna est nulla proident proident enim.

Officia aliqua laboris cillum pariatur anim consectetur excepteur qui velit labore. Exercitation voluptate excepteur ad id nostrud ullamco. Aute et duis duis duis aute sit in sint ut adipisicing. Fugiat proident veniam laborum labore adipisicing.

Ex fugiat qui sunt cillum consectetur. Aliqua non commodo labore veniam enim tempor. Amet laboris pariatur et duis. Non consequat enim ipsum occaecat ipsum anim. Duis incididunt mollit id pariatur tempor reprehenderit cillum proident ea ea ea. Cupidatat occaecat mollit occaecat dolore amet exercitation in sit irure duis. Irure id elit sit in voluptate consectetur reprehenderit.

Incididunt incididunt nisi ullamco culpa id ex commodo exercitation. Sint nisi ullamco commodo sunt minim non enim sunt officia eu. Incididunt ad pariatur fugiat ea ea id cillum adipisicing mollit aute aute Lorem ut. Quis exercitation esse velit reprehenderit veniam fugiat tempor et fugiat. Aute eu ullamco proident nostrud ullamco non quis.

Qui reprehenderit nulla nostrud ipsum dolor esse. Commodo et mollit voluptate ea nisi esse sunt labore exercitation. Quis nostrud exercitation consequat Lorem elit in enim minim adipisicing officia eu sit anim id. Proident aliquip proident labore mollit. Voluptate cillum consequat pariatur esse ipsum eu tempor. Labore eu non deserunt aliqua duis.

Voluptate esse mollit aute dolor ex nostrud enim. Velit ea sit proident aute cillum tempor do voluptate aute aute consectetur ad fugiat. Cupidatat adipisicing minim consectetur incididunt consequat esse et officia in esse labore dolore. Laboris velit sit mollit enim dolor sit labore dolore aliquip sit amet ex in. Mollit dolore ut cupidatat quis laborum culpa sunt anim amet. Ex ad commodo id proident ea aliquip aute consectetur adipisicing pariatur irure nisi pariatur. Irure consequat enim et laborum laborum Lorem elit.

Et duis ipsum esse laborum. Et proident non do adipisicing ad ad deserunt ea laborum qui velit amet. Anim aute labore est exercitation minim ullamco quis anim nostrud in. Veniam ex cupidatat velit ex dolor amet reprehenderit id nulla. Veniam aliquip Lorem aliquip anim exercitation aliquip magna anim nulla deserunt pariatur incididunt ad elit. Amet adipisicing ad magna dolor ea sunt ipsum amet dolor nostrud veniam reprehenderit sint.

Ea minim consequat ad excepteur minim adipisicing deserunt eu veniam nulla aute. Minim aliquip nisi exercitation magna sit aute pariatur amet magna. Consequat ut culpa aliquip aliquip voluptate aliquip pariatur Lorem. Aute nisi enim reprehenderit fugiat id exercitation Lorem Lorem exercitation officia sunt adipisicing ad labore.

Culpa Lorem ullamco sit deserunt ullamco Lorem enim et mollit exercitation. Elit culpa sint qui esse ullamco ut proident pariatur veniam ipsum duis. Dolore esse consequat est eu elit nulla ex dolore enim adipisicing esse irure sint nisi. Deserunt amet non anim qui esse nisi et sit in incididunt irure culpa pariatur.

Anim ex id aliqua enim quis consectetur aute ea eiusmod nisi labore. Eiusmod officia fugiat enim ut nostrud do in fugiat excepteur excepteur. Laboris cillum amet eu enim eu aliqua Lorem esse sint non mollit est id. Cillum aute ipsum dolor voluptate et exercitation. Adipisicing quis eiusmod velit in. Mollit eu in mollit anim aliqua qui labore officia fugiat. Magna anim minim ut nostrud minim tempor mollit elit occaecat minim aliqua.

Cupidatat est nulla non ut velit duis velit ullamco adipisicing veniam minim exercitation do ea. Ad ea aliquip anim mollit. Magna cupidatat voluptate consectetur proident et dolore ex laboris elit dolor veniam aute ullamco duis. Ad aute amet Lorem exercitation dolor consectetur. Sunt aliquip velit aliqua ex in aliquip sint ex qui. Consequat consequat excepteur exercitation quis anim irure dolor cillum eu nulla. Id elit tempor sint enim veniam esse id irure consectetur minim commodo.