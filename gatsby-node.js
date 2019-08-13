const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/BlogEntry.js`)
    const result = await graphql(`{
        allMarkdownRemark {
          edges {
              node {
                  html
                  frontmatter {
                      slug
                  }
              }
          }
        }
    }`)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blogs/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      }, // additional data can be passed via context
    })
  })
}