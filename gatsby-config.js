const { default: slugify } = require('slugify');

require('dotenv').config();

module.exports = {
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
    `gatsby-plugin-layout`,
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            subsets: ['latin'],
            variants: [`400`, `500`, `600`, `700`, `900`],
          },
          {
            family: `Fira Code`,
            variants: [`400`, `500`, `600`],
          },
        ],
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
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/favicon.png',

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'pl-PL',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
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
                        },
                      },
                    },
                  ],
                  // custom_elements: [
                  //   {
                  //     'itunes:image': {
                  //       _attr: {
                  //         href:
                  //           'http://example.com/podcasts/everything/AllAboutEverything/Episode1.jpg',
                  //       },
                  //     },
                  //   },
                  //   { 'itunes:duration': '7:04' },
                  // ],
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
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['G-ZG3XX8H22F'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js',
      },
    },
  ],
};
