module.exports = {
  siteMetadata: {
    title: `Gatsby Panthera`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-0000000',
    },
  },
  {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `fira sans\:300,300i,400,400i,700,700i`,
          `nunito\:300,300i,400,400i,700,700i`,
        ]
      }
    }
],
}
