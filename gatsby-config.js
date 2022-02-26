/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Varaha",
    description:
      "Varaha is an experiential technology startup which believes that the cultural identities of any society are deeply preserved within the archaeological and heritage artifacts, monuments, sites, and artistic expressions.",
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vjxz2s92jqxu`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `8Lm-LFUuoZi6JcbhC_xZqmMWxgZDo7CfK49ZE1M5vHw`,
      },
    },
  ],
}
