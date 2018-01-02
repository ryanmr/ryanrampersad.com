module.exports = {
  siteMetadata: {
    title: `Ryan Rampersad`,
    description:
      'Ryan Rampersad is a software engineer, web developer, consultant, podcaster and technology enthusiast.',
    keywords:
      'ryan rampersad, software engineer, web developer, consultant, java, php, javascript, rust, go, compilers, enthusiast, podcast'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-18192523-1'
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ]
}
