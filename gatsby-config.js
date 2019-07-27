module.exports = {
  siteMetadata: {
    title: `Scott Finkelstein`,
    description: `Exploring the spaces between technology, design, leadership, and learning.`,
    author: `Scott Finkelstein`,
  },
  plugins: [
    'gatsby-plugin-favicon',
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `http://206.189.223.52`,
        contentApiKey: `c96467d5e0a29c5444c4d3d056`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `scottfinkelstein.com`,
        short_name: `Scott's Site`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
