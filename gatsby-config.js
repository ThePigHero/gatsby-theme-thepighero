/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path')

module.exports = function themeConfig({
  root
} = {}) {
  console.log(themeConfig)

  return {
    plugins: [
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: path.join(root, '/src/_posts'),
              name: `posts`,
          },
      },
      `gatsby-transformer-remark`,
    ],
  }
}