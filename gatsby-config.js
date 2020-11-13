const { default: slugify } = require('slugify');

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `reactywny.pl - mały frontendowy świat`,
    titleTemplate: `%s · reactywny.pl`,
    description: `Reactywny blog o (głównie) programowaniu, ale nie tylko. Nie brakuje tutaj także tematyki rozwoju osobistego związanej z branżą IT.`,
    author: `Damian Kalka`,
    url: `https://reactywny.pl`,
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
            family: `Montserrat`,
            subsets: ['latin'],
            variants: [`400`, `500`, `600`, `700`, `800`, `900`],
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
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
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
                  guid:
                    site.siteMetadata.url +
                    slugify(node.title, { lower: true }),
                  title: node.title,
                  enclosure: node.featuredImage && {
                    url: node.featuredImage.url,
                  },
                  custom_elements: [
                    {
                      'content:encoded': node.html,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-JN90NM7BGS',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'reactywny.pl',
      },
    },
  ],
};
