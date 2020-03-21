import React from 'react'
import Markdown from 'react-markdown'
import { graphql } from 'gatsby'
import { RepositoryType } from '../data/github'
import Header from '../components/header'
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
  const title = repo.readme.text.split('\n')[0]
  const readme = repo.readme.text.replace(/[\s\S]*<!-- [^>]+ -->/, '')
  return (
    <>
      <SEO title={title} />
      <Header>
        <div style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <h1>{title}</h1>
          <a href={`https://gitpod.io/#${repo.url}`}>
            <img
              alt="Open in Gitpod"
              src="https://gitpod.io/button/open-in-gitpod.svg"
              style={{ width: '14em' }}
            />
          </a>
        </div>
      </Header>
      <div style={{
        margin: '0 auto',
        maxWidth: '45em'
      }}>
        <img
          alt=""
          src={repo.usesCustomOpenGraphImage
            ? repo.openGraphImageUrl
            : defaultBanner
          }
        />
        <Markdown source={readme} />
      </div>
    </>
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
