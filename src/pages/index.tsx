import React from 'react'
import { graphql } from 'gatsby'
import Grid from '../components/grid'
import SEO from '../components/seo'
import Header from '../components/header'
import { RepositoryType } from '../data/github'

const App = (props: { data: QueryData }) => (
  <>
    <SEO />
    <Header>
      <h1 style={{ marginBottom: 0 }}>Examples</h1>
      <p style={{ marginTop: 0 }}>
        Wondering what you can build with <a href="https://nearprotocol.com/">NEAR</a>? Check out these examples for inspiration! You can also <a href="https://github.com/near-examples">view these examples on GitHub</a>.
      </p>
    </Header>
    <Grid repositories={props.data.github.search.repositories} />
  </>
)

export default App

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
