## Goals for this blog

1. Quick setup - want to start outputting content quickly
1. Minimal & handspun - want to start simple and add features as I see fit
1. Learning opportunity / project - a little challenge for myself
1. Design project - want to have complete control over the styling of the blog because that's fun for me

## Architecture Notes

```
# folder structure

/constants
  /blog-posts
    index.ts
    welcome.md
    blog-setup.md
```

```
# index.ts

export const blogPosts = [
  {
    title: 'Welcome',
    date: new Date('04-25-2023'),
    fileName: 'welcome'
  },
  {
    title: 'Setting up the blog',
    date: new Date('04-25-2023'),
    fileName: 'blog-setup'
  }
]
```

Using a file to be like a key of all blog posts with their file name, title, and date. This made it easier to have access to a file's metadata without having to figure out markdown custom properties (which I think I've seen done before at RokkinCat but 30m of figuring it out didn't cut it, so I opted for the table of contents route).

## Design Notes

I prioritized having an obvious sorting order, and something easy to scroll quickly or simply CTRL-F.

In the future, I plan to expand the capabilities to include filtering by topic. Because of this, I tried really hard to hold back on over-designing it for the time being. The result is a simple, dated list of titles.

## Things I Learned

Javascript dates get funky when you enter in this format: `new Date('YYYY-MM-DD')` instead of `new Date('MM-DD-YYYY')`, like storing that as the previous day. See more about that [here](https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off).

## Relevant links used during development

* [importing markdown into react](https://stackoverflow.com/questions/44678315/how-to-import-markdown-md-file-in-typescript)
* [simple-markdown npm package](https://www.npmjs.com/package/simple-markdown?activeTab=readme)
* [loading markdown into react based on dynamic file name](https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl)
* [font scaling based on size of container](https://stackoverflow.com/questions/16056591/font-scaling-based-on-size-of-container)
* [css units like vi & vb](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
* [date object format shenanigans](https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off)