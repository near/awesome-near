import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'
import { extractRepositories, repositoryAttributes, QueryData } from './src/data/github'

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql
}) => {
  const query: {
    errors?: any
    data?: QueryData
  } = await graphql(`
    query {
      github {
        search(type: REPOSITORY, first: 20, query: "org:near-examples topic:ready-to-use") {
          repositoryCount
          pageInfo {
            hasNextPage
            endCursor
          }
          repositories: nodes {
            ... on GitHub_Repository {
              ${repositoryAttributes}
            }
          }
        }
      }
    }
  `)

  query.data && extractRepositories(query.data).forEach(repo => {
    actions.createPage({
      path: repo.name,
      component: resolve('./src/templates/repository.tsx'),
      context: { name: repo.name }
    })
  })
}
