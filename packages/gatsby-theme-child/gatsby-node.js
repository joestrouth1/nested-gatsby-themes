/* query MyQuery {
  allFile(filter: { sourceInstanceName: {eq: "docs"} }) {
    edges {
      node {
        relativePath
        name
        childMdx {
          body
        }
      }
    }
  }
} */

exports.createPages = async ({graphql, actions}) => {
  const result = await graphql(`{
    allFile(filter: { sourceInstanceName: {eq: "docs"} }) {
      edges {
        node {
          relativePath
          name
          childMdx {
            body
          }
        }
      }
    }
  }`)
  const pages = result.data.allFile.edges.map(({node}) => node)

  pages.forEach(page => {
    actions.createPage({
      path: `/${page.name}`,
      component: require.resolve('./src/templates/docs.js'),
      context: {
        body: page.childMdx.body
      }
    })
  })
}
