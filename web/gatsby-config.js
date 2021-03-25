module.exports = {
  siteMetadata: {
    title: "Briefrr",
    titleTemplate: "%s",
    description:
      "The perfect practice ground for creators",
    url: "https://briefrr.co", // No trailing slash allowed!
    image: "https://cdn.sanity.io/images/hdetr6ej/production/7bf363db800c48f6cfcab9c430e193d733312aad-770x420.jpg?w=2000&h=2000&fit=max", // Path to your image you placed in the 'static' folder
    twitterUsername: "@briefrr_",
    icon: "https://cdn.sanity.io/images/j2di4tpb/production/2bb3eb9be8123385e4cecf0bf40e4169c9c3358f-64x64.png"
  },

  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "j2di4tpb",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brierfrr`,
        short_name: `Briefrr`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#66E0FF`,
        display: `standalone`,
        icon: `./src/images/favicon64.png`,
        theme_color_in_head: false,
      },
  },
  {
    resolve: 'gatsby-plugin-snipcart',
    options: {
      apiKey: 'YzdlOWM1MWEtZDYxNC00NjgxLTkyMjktMDUyNmRkMDdjNWQwNjM3NTE0MjAyMDkzNzU3NjA1'
    }
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
