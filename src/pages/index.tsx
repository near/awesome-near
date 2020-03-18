import React from 'react'
import { graphql } from 'gatsby'
import Grid from '../components/Grid'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const App = (props: { data: QueryData }) => (
  <Layout title="NEAR Examples">
    <SEO title="Home" />
    <p>
      Wondering what you can build with <a href="https://nearprotocol.com/">NEAR</a>? Check out these examples for inspiration!
    </p>
    <Grid repositories={props.data.github.search.repositories} />
  </Layout>
)

export default App

export type RepositoryType = {
  id: string
  name: string
  description: string
  url: string
  isPrivate: boolean
  openGraphImageUrl: string
  usesCustomOpenGraphImage: boolean
  readme: {
    text: string
  }
  repositoryTopics: {
    nodes: {
      id: string
      url: string
      topic: {
        id: string
        name: string
      }
    }
  }
}

type QueryData = {
  github: {
    search: {
      repositories: RepositoryType[]
    }
  }
}

export const lolGatsbyThisWasADumbDesignDecision = graphql`
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
`
