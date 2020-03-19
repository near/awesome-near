// "a link between a repository and a topic"
// https://developer.github.com/v4/object/repository/#repositorytopics
type RepositoryTopic = {
  id: string
  url: string
  topic: {
    id: string
    name: string
  }
}

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
    nodes: RepositoryTopic[]
  }
}

// unfortunately, Gatsby makes it difficult (maybe impossible?) to use
// variables in graphql queries!! See https://www.gatsbyjs.org/docs/page-query/
// The query below is used both in pages/index.tsx and templates/repository.tsx,
// and the above type assumes a query shaped like this
export const repositoryAttributes = `
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
`
