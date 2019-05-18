const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Posts
  const createPosts = new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/post.js`)
    resolve(
      graphql(`
        {
          allGhostPost(sort: { order: ASC, fields: published_at }) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allGhostPost) {
          return resolve()
        }

        const items = result.data.allGhostPost.edges

        items.forEach(({ node }) => {
          node.url = `/${node.slug}/`

          createPage({
            path: node.url,
            component: path.resolve(postTemplate),
            context: {
              slug: node.slug,
            },
          })
        })
        return resolve()
      })
    )
  })
  
  // Pages
  const createPages = new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`./src/templates/page.js`)
    resolve(
      graphql(`
          {
            allGhostPage(
              sort: { order: ASC, fields: published_at }
            ) {
              edges {
                node {
                  slug
                  url

                }
              }
            }
          }
      `).then((result) => {
        if (result.errors) {
          return reject(errors)
        }
        if (!result.data.allGhostPage) {
          return resolve()
        }

        const items = result.data.allGhostPage.edges

        items.forEach(({ node }) => {
          node.url = `/${node.slug}/`

          createPage({
            path: node.url,
            component: path.resolve(pageTemplate),
            context: {
              slug: node.slug
            }
          })
        })
        return resolve()
      })
    )
  })

  return Promise.all([createPosts, createPages])
}