module.exports = {
  siteMetadata: {
    title: 'IBIPFS: In-browser IPFS-distributed Web'
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
        name: 'IBIPFS',
        short_name: 'IBIPFS',
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
