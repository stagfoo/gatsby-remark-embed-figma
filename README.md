# gatsby-remark-embed-figma 🖼️

```
npm install gatsby-remark-embed-figma
npm install gatsby-transformer-remark
```

Add to your `gatsby-config.js`

```
{
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          "gatsby-remark-embed-figma",
          // your other plugins etc
        ]
      }
}
```

Add your nice url inside backticks
---

`https://www.figma.com/file/kewtfv2VTfukgcw07LmO01/APP---otxto?node-id=4%3A452&t=dSvnCtCpuxmJIWwj-1`

and boom you get an embed
