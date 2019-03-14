# gatsby-remark-embed-figma

```
npm install gatsby-remark-embed-figma
// Requires gatsby-transformer-remark
npm install gatsby-transformer-remark


```
Add to your `gatsby-config.js`

```
{
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          "gatsby-remark-embed-figma",
        ]
      }
}
```
Add your nice url inside backticks
---

`https://www.figma.com/file/FpKGFJhA3XsT0GNMVzA0Ywww/Raeon`

and boom you get an embed
