// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const path = require(`path`)

const config = require('./config/website')

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    siteNav: [
      // {
      //   title: 'Home',
      //   slug: '/',
      //   children: []
      // },
      {
        title: 'Apply',
        slug: '/apply/',
        children: []
      },
      {
        title: 'My Story',
        slug: '/phoenix-loan-originator/',
        children: []
      },
      {
        title: 'Loan Information',
        slug: '#',
        children: [
          {
            title: 'Loan Options',
            slug: '/types-of-mortgage-loans/'
          },
          {
            title: 'Refinancing',
            slug: '/refinancing/'
          },
          {
            title: 'What is Mortgage Insurance (PMI)',
            slug: '/private-mortgage-insurance-pmi/'
          }
        ]
      },
      {
        title: 'Types of Loans',
        slug: '#',
        children: [
          {
            title: 'Adjustable Rate Mortgage',
            slug: '/phoenix-adjustable-rate-mortgage/'
          },
          {
            title: 'Conventional Loan',
            slug: '/phoenix-conventional-loan/'
          },
          {
            title: 'FHA Loan',
            slug: '/phoenix-fha-loan/'
          },
          {
            title: 'Jumbo Loan',
            slug: '/phoenix-jumbo-loan/'
          },
          {
            title: 'USDA Loan',
            slug: '/phoenix-usda-loan/'
          },
          {
            title: 'VA Loan',
            slug: '/phoenix-va-loan/'
          }
        ]
      },
      {
        title: 'Blog',
        slug: '/blog/',
        children: [
          {
            title: 'Types of Loans',
            slug: '/types-of-loans/'
          },
          {
            title: 'Personal Finances',
            slug: '/personal-finances/'
          },
          {
            title: 'Requirements',
            slug: '/requirements/'
          },
          {
            title: 'Benefits of Buying Now',
            slug: '/benefits-of-buying-now/'
          },
          {
            title: 'Buyer Education',
            slug: '/buyer-education/'
          },
          {
            title: 'Realtor Information',
            slug: '/realtor-information/'
          }
        ]
      },
      {
        title: 'Media',
        slug: '/media/',
        children: []
      },
      {
        title: 'Contact',
        slug: '/contact-me/',
        children: []
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Sarabun:800`,
          `Roboto Condensed:400`,
          `Roboto:400,400i,700`
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
        // sampleRate: 5,
        // siteSpeedSampleRate: 10
      }
    }
  ]
}
