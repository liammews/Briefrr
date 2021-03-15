module.exports = {
  siteMetadata: {
    title: "Briefrr",
    titleTemplate: "%s",
    description:
      "The perfect practice ground for creators",
    url: "https://briefrr.co", // No trailing slash allowed!
    image: "https://cdn.sanity.io/images/hdetr6ej/production/7bf363db800c48f6cfcab9c430e193d733312aad-770x420.jpg?w=2000&h=2000&fit=max", // Path to your image you placed in the 'static' folder
    twitterUsername: "@briefrr_",
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
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: 'YOUR_SNIPCART_KEY'
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
