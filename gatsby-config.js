module.exports = {
  siteMetadata: {
    title: `Rebecca's Gatsby Test Site`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#00aced',
        theme_color: '#00aced',
        display: 'minimal-ui',
        icon: 'src/images/shark-fin.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
