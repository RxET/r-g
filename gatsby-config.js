module.exports = {
  siteMetadata: {
    title: `Roxie and Geneviève`,
    description: `9.12.2020 at the TWA Hotel`,
    author: `@RxET`,
    siteURL: 'http://roxieandgenevieve.us',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/airplane-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Exo 2`,
            subsets: [`latin`],
            variants: [`100i`, `200i`, `300i`, `400i`, `500i`, `600i`, `700i`, `800i`, `900i`]
          },
          {
            family: `PT Sans Narrow`,
            subsets: [`latin`]
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["AntiqueOlive-BoldCond, AntiqueOlive-Compact"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
