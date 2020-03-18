require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'NEAR Examples',
    description: 'A curated list of great demos and starter apps built with NEAR Protocol',
    author: '@NEARProtocol'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'NEAR Examples',
        short_name: 'NEAR',
        start_url: '/',
        background_color: '#D1CCBD',
        theme_color: '#6AD1E3',
        display: 'minimal-ui',
        icon: 'src/images/near_icon.svg', // This path is relative to the root of the site.
        include_favicon: false
      }
    }
  ]
}
