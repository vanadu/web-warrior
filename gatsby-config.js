/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 * 
 * // !VA This is where you configure the site metadata, that normally appears in the index.html file. There is no user-accessible index.html file in Gatsby. All the meta configuration happens here. Every time this config file is changed, the dev server needs to be restarted!!! Ugh. Here, the siteMetadata appears now in the GraphiQL interface under the 'site' property. In GraphiQL, Check the boxes for the properties you want to query and click to copy the query. You can now include the query in the page component.
 * 
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Web Warrior',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021 Web Warrior',
    contact: 'me@thewebwarrioruk.co.uk',
  },
}
