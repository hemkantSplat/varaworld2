/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vjxz2s92jqxu`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "8Lm-LFUuoZi6JcbhC_xZqmMWxgZDo7CfK49ZE1M5vHw",
      },
    },
  ],
}
