---
title: 2026.1 reflecting with DSLs
# tags: ["in-progress"]
date: 01/05/2026
---

As we embark upon a new year, I have been having many casual conversations both looking backward (to reflect) and forward (to pledge changes). One friend, in particular, had shared how he had quantified some of the events of the year (e.g., injured for X months, flying for Y months) and this helps to bring perspective when reflecting on a year.

A year is long: 12 months, 365 days, 525600 minutes (I have been thinking a lot about how "taking it #slow" is my 2026 resolution – stay tuned for another article on that). But how do we look back on and remember a year? Is it by the number of trips we have taken? Is it by the number of photos we have taken (this summer, I did a lot of iOS app testing that required saving a lot of video so...)?

[Maneesha Agrawala](https://graphics.stanford.edu/papers/maneesh_thesis/) from Stanford has some interesting work, specifically for route maps, addressing the challenge of what information is essential (and what can be removed) in abstracted representations ( #abstractions ). While his thesis focused on general techniques for automated map generation, I was thinking about how to preserve #agency with the language that people already use to describe their year. What *variables* do people reference when summarizing their year? Hopefully, this gets the idea across and this annual reflection of the year has also recently boomed in popularity with the "2025 Wrapped" craze.

I wanted to start with one domain: how do we #visualize the trips from the year. Expanding further, I could imagine doing something similar for calendar events from Google Calendar, music listening history from Spotify, or even driving history from Google Maps. Of course, these can become rather dystopian tracking measures under private companies and are only meant as ideas for personal reflection. 

I first created a [Jupyter notebook](https://github.com/rbatra2000/trips_visualizer/blob/main/experiments/visual.ipynb) to experiment around a little bit with creating a domain-specific language (DSL). 

The current website is here  https://trips-visualizer-8hqg.vercel.app/

Hope you find this interesting :)

<div>
  <iframe id="travelDSL"
      title="travelDSL"
      width="100%"
      height="500px"
      src="https://trips-visualizer-8hqg.vercel.app/">
  </iframe>
</div>

## initial thoughts
*Below were just some ideas and notes I had as I was trying to put pen to paper.*

```
Like the idea of quantifying or visualizing a year/month etc 
how do we look at a year (6 months in a cast, 3 months traveling)
Kind of ties in this idea of maps -- what do they show (and how do we show that)

it would be cool to also show this as a jupyter notebook or maybe as a website showing a language and show how it's live
Made a jupyter notebook

There are so many coding languages, what does it look like to create a new one (and what do we error on) -- playing around with a DSL

Used claude to help convert the notebook into a working dsl/interface
```