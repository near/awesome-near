const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      github {
        search(type: REPOSITORY, first: 20, query: "org:near-examples") {
          repositoryCount
          pageInfo {
            hasNextPage
            endCursor
          }
          repositories: nodes {
            ... on GitHub_Repository {
              id
              name
              description
              url
              isPrivate
              openGraphImageUrl
              usesCustomOpenGraphImage
              readme: object(expression: "master:README.md") {
                ... on GitHub_Blob {
                  text
                }
              }
              repositoryTopics(first: 10) {
                nodes {
                  id
                  url
                  topic {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  data.github.search.repositories.forEach(repo => {
    actions.createPage({
      path: repo.name,
      component: path.resolve('./src/templates/repository.tsx'),
      context: { name: repo.name }
    })
  })
}
