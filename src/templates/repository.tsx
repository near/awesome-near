import React from 'react'
import Markdown from 'react-markdown'
import { graphql } from 'gatsby'
import { RepositoryType } from '../pages'
import Layout from '../components/layout'
import SEO from '../components/seo'

// bypass typescript by using commonjs syntax:
// https://github.com/microsoft/TypeScript-React-Starter/issues/12
const defaultBanner = require('../images/default-banner.svg')

type Props = {
  data: {
    github: {
      repo: RepositoryType
    }
  }
}

const Repository = ({ data }: Props) => {
  const { repo } = data.github
  return (
    <Layout
      banner={repo.usesCustomOpenGraphImage
        ? repo.openGraphImageUrl
        : defaultBanner
      }
    >
      <SEO title={repo.name} />
      <Markdown source={repo.readme.text} />
    </Layout>
  )
}

export default Repository

export const query = graphql`
query($name: String!) {
    github {
      repo: repository(name: $name, owner: "near-examples") {
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
`
