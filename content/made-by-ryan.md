+++
date = "2016-02-17T19:17:27-06:00"
draft = false
title = "Made by Ryan"

+++

You can see the entire website in its own [GitHub repo](https://github.com/ryanmr/ryanrampersad.com)!

### Hugo

I made this website with the [Hugo static site generator](http://gohugo.io).

#### Benefits

- it is *not* WordPress
- it is like a *content management system*, but without the overhead of having a service running on a server somewhere
- adding pages with customized layouts is easy, `hugo new page.md`; and it's written in markdown
- the template engine is sensible

#### Downsides

- while possible, it is not in good practice to keep other contents in the same `www/` directory, and thus other sub-projects cannot be contained here (which is fine, because those have [another home anyway](http://ifupdown.com)
- it is not like a *content management system*, specifically because a computer with an environment to handle `git` and `hugo` must be accessible, whereas a traditional *CMS* would be accessible simply with an online Interface
- the template engine is primarily for simple data handling in templates, there's a limited amount of logic that can can manipulate the generator's output
- when the next *big thing* comes around, pushing Hugo's generated pages into a folder and linking back to it might be troublesome

Despite those downsides, I think Hugo is great for making a portfolio and landing page, and its associated pages.

---

#### Fonts

My favorite title font is the overused [League Gothic](https://www.theleagueofmoveabletype.com/league-gothic). Uppercased, text looks handsome and proud, but lean and agile.

#### Scripts

Any homepage needs a gimmick and while it pains to me to do so, I adopted [Evan You's fancy background canvas generator](http://evanyou.me/). I happen to like the color red right now. The [not invented here](https://en.wikipedia.org/wiki/Not_invented_here) syndrome kicks in hard nevertheless. Needless to say, I will be tinkering and updating how it works for the foreseeable future because it is fantastic.

Other then that, there is no scripts are present.

#### Styles

[Foundation](http://foundation.zurb.com/) is an alternative to Bootstrap. Both have their quirks. Foundation 6 had a very rocky road until it stabilized in its 6.1.x branch, but it worked eventually and fits the needs of this simple design quite well. Despite that, there are still some framework-styles that need overrides to finish my custom design here.

#### Last Notes

This entire description could have been a blog post, but it makes sense to keep the materials about this little site together. Thanks for reading.
