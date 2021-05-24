module.exports = {
  siteMetadata: {
    title: `Ryan Rampersad`,
    description:
      "Ryan Rampersad is a software architect, engineer, web developer, consultant, podcaster and technology enthusiast.",
    keywords:
      "ryan rampersad, software architect, software engineer, web developer, consultant, javascript, typescript, rust, java, php, compilers, enthusiast, podcast",
    url:
      process.env.NODE_ENV === "production"
        ? "https://ryanrampersad.com"
        : "http://localhost:8000",
    twitter: "ryanmr",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-18192523-1",
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
        fileName: process.env.NODE_ENV !== "production",
      },
    },
    {
      // may need additional configuration to preload history and resume?
      resolve: `gatsby-plugin-offline`,
    },
  ],
};
