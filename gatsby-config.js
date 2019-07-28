module.exports = {
  siteMetadata: {
    title:'Andres Jorquera - Freelancer',
    description:'Awesome Web developer',
    domain:'andresjorquera.com',
    email:'jorquera.ad@gmail.com',
    name: 'Andrés Jorquera'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Alegreya Sans SC', 'Lilita One', 'Lato']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andres Jorquera Website`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1ABC9C`,
        theme_color: `#1ABC9C`,
        display: `minimal-ui`,
        icon: `src/images/jonathan.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`
      }
    },
    `gatsby-transformer-remark`,
   
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
