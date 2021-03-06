module.exports = {
  siteMetadata: {
    title: "gatsby-backroad",
    siteUrl: "https://rafsaf-gatsby-backroad.netlify.app/",
  },
  plugins: [
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
