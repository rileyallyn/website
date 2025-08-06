---
title: Updates are fun
datePublished: 2025-05-01
description: All I wanted to do was update my website to Svelte 5....
tags: [webdev, svelte]

---
<script>
	import '@shikijs/twoslash/style-rich.css'
</script>

### How did we get here?
All I wanted to do was update my website to Svelte 5....

There was a CLI and everything...

Anyways...

<img width="350px" alt="a stickfigure comic describing the pain of updating a computer system" src="https://imgs.xkcd.com/comics/success.png" /> 


> https://xkcd.com/349

### Big Changes
- Runes (very cool)
- Page data coming from ``@app/store`` now
- New ways of rendering components ``{@render children?.()}``
- Tons of under the hood changes (ig lol)

### The problems

```ts twoslash
import {enhancedImages} from 'mdsvex-enhanced-images'

interface Test {
	test: string;
}

const testing: Test = {
	test: "hi"
}

testing.test


```


> If you are looking for a developer who can solve problems, hit me up at [riley@rileysmith.me](mailto:riley@rileysmith.me)
