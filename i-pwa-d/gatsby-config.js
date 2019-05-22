module.exports = {
  siteMetadata: {
    title: 'SNS-Fashion'
  },
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-ipfs',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fashion.SNS',
        short_name: 'Fashion.SNS',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'favicon/fav.png',
            type: 'image/png'
          }
        ]
      }
    }
  ]
}
