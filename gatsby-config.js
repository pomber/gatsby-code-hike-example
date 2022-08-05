const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki/themes/github-dark.json");

module.exports = {
  siteMetadata: {
    title: `Code Hike + Gatsby`,
    description: `Code Hike and Gatsby example`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [[remarkCodeHike, { theme }]],
        },
      },
    },
  ],
};
