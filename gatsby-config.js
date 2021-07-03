const { default: slugify } = require('slugify');

require('dotenv').config();

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: `reactywny.pl - mały frontendowy świat`,
    titleTemplate: `%s · reactywny.pl`,
    description: `Reactywny blog o (głównie) programowaniu, ale nie tylko. Nie brakuje tutaj także tematyki rozwoju osobistego związanej z branżą IT.`,
    author: `Damian Kalka`,
    url: `https://reactywny.pl`,
    siteUrl: `https://reactywny.pl`,
    image: `/images/meta-image.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-resolve-src',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-eslint',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/privacy`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i`, // you can also specify font weights and styles
          `Fira Code\:400,500`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `reactywny-pl`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                url
                site_url: url
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allDatoCmsPost } }) => {
              return allDatoCmsPost.nodes.map(node => {
                return {
                  description: node.description,
                  date: new Date(node.date).toUTCString(),
                  url: `${site.siteMetadata.url}/posts/${slugify(node.title, {
                    lower: true,
                  })}`,
                  guid: `${site.siteMetadata.url}/${slugify(node.title, {
                    lower: true,
                  })}`,
                  title: node.title,
                  enclosure: node.featuredImage && {
                    url: node.featuredImage.url,
                    medium: `image`,
                  },
                  custom_elements: [
                    {
                      'media:content': {
                        _attr: {
                          'xmlns:media': 'http://search.yahoo.com/mrss/',
                          url: node.featuredImage.url,
                          medium: `image`,
                          type: `image/jpeg`,
                          width: 325,
                        },
                      },
                    },
                  ],
                };
              });
            },
            query: `
              {
                allDatoCmsPost(sort: {order: DESC, fields: date}) {
                  nodes {
                    category
                    date
                    description
                    title
                    featuredImage {
                      url
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'reactywny.pl',
            language: 'polish',
            author: 'Damian Kalka',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-ZG3XX8H22F'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `reactywny.pl`,
        short_name: `reactywny.pl`,
        start_url: `/`,
        background_color: `#23272a`,
        theme_color: `#61DAFB`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
  ],
};
