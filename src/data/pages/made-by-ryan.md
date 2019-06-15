---
date: "2016-02-17T19:17:27-06:00"
draft: false
title: "Made by Ryan"
type: made-by-ryan
---

You can visit the [Gitlab repository](https://gitlab.com/ryanmr/ryanrampersad.com). Changes are pushed to the repository, built by Gitlab and finally, deployed here.

#### Gatsby

This site is built with an early version of Gatsby v2. Gatsby is a static site generator with a unique approach. Unlike Hugo, it uses JavaScript instead of internal directives that are difficult to extend. Gatsby goes beyond JavaScript and uses React, components and "server side rendering" to logically and consistently construct well designed and engineered sites. Gatsby uses GraphQL as its data fetching layer, and has plugins for parsing in Markdown, YAML, and more. Finally, it intelligently uses Wabpack to create optimized bundles.

You can the best of all words, component based design, static _and_ dynamic content, and fast loading times.

#### Font

[League Gothic](https://www.theleagueofmoveabletype.com/league-gothic). Uppercased, text looks handsome and proud, but lean and agile.

<small>_What I wouldn't give a modern and refreshed League Gothic?_</small>

#### Script

When I was building this site, I was inspired by [Evan You's](http://evanyou.me/) canvas effect. While it is no longer used on his website, I keep a as-was code copy of the original effect [in this gist](https://gist.github.com/ryanmr/205ef4297e7821fad088).

Based on the concept of these _triangles_ climbing from left to right, I added additional extensions like _red_ for _branding_ and the _motion_. You can see this modified version somewhere in the source control repository linked above.

#### Style

I previously used [Bulma](https://bulma.io/). While it was clean and required no additional JavaScript bundles like jQuery, the ecosystem has since moved on towards other options. Another issue at the time was that Bulma, coupled with Gatsby, had the unfortunate downside of loading the bulk of Bulma as in in-head inlined styles.

Based on these two aspects, the ecosystem's maturation and the downsides of importing css libraries in bulk, this site is now using [styled components](https://www.styled-components.com/). This is in part an optimization of the page size only styles used by components on page will be inlined, this is also an experiment to test on whether the tooling has matured enough on its own for use in future projects.
