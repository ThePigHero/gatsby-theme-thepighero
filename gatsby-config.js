const path = require('path')

module.exports = function theme({
    blogPosts = '_posts',   // Leave at _posts for moving content from Jekyll to Gatsby
    root,
} = {}) {
    return {
        site: {
            title: 'Title here',
            description: 'Meta description here',
            author: 'Your name here',
            siteUrl: 'https://yoursitehere.com',
            social: {
                twitter: 'yourtwitterhandle'
            },
        },
        plugins: [
            {
                resolve: 'gatsby-plugin-manifest',  // plugin allows app to be used as a PWA - https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
                options: {
                    name: 'The Pig Hero',
                    description: 'A Gatsby theme',
                    short_name: 'ThePigHero',
                    background_color: '#fff',
                    theme_color: '',
                    display: 'standalone'
                }
            },       
            'gatsby-plugin-catch-links',
            'gatsby-plugin-remove-trailing-slashes',
            'gatsby-plugin-twitter',
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                    path: path.join(__dirname, root, blogPosts),
                    name: 'post',
                },
            },
            {
                resolve: `gatsby-transformer-remark`,
                options: {
                  plugins: [
                    'gatsby-remark-code-titles',
                    'gatsby-remark-copy-linked-files',
                    {
                      resolve: 'gatsby-remark-images',
                      options: {
                        backgroundColor: 'transparent',
                        linkImagesToOriginal: false,
                        showCaptions: true,
                      },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-smartypants',
                    'gatsby-remark-autolink-headers',
                  ],
                },
            },
            'gatsby-plugin-react-helmet',
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
            'gatsby-plugin-offline',
            {
                resolve: 'gatsby-plugin-web-font-loader',
                options: {
                    google: {
                        families: ['Droid Sans', 'Droid Serif']
                    }
                },
            },
            {
              resolve: 'gatsby-plugin-google-analytics',
              options: {
                trackingId: 'UA-102928446-2',
              },
            },
        ],
  } 
}