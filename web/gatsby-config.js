module.exports = {
  siteMetadata: {
    title: "briefrr",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "j2di4tpb",
        dataset: "production",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
