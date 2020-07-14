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

export type RepositoryTypeRaw = {
  id: string
  name: string
  description: string
  url: string
  openGraphImageUrl: string
  usesCustomOpenGraphImage: boolean
  readme: {
    text: string
  }
  repositoryTopics: {
    nodes: RepositoryTopic[]
  }
}

export type RepositoryType = {
  id: string
  name: string
  description: string
  url: string
  openGraphImageUrl: string
  usesCustomOpenGraphImage: boolean
  readme: string
  headline: string
  topics: string[]
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

export type QueryData = {
  github: {
    search: {
      repositories: RepositoryTypeRaw[]
    }
  }
}

/*
 * For use when extracting repositories from raw GitHub graphql query
 *
 * - Navigates graphql data structure
 * - Cleans up shape of data
 * - Removes the ready-to-use topic
 * - Filters repositories using URL params
 */
export function extractRepositories (
  data: QueryData,
  { filtered } = { filtered: true }
): RepositoryType[] {
  const shaped = data.github.search.repositories.map(shape)

  if (!filtered) return shaped

  return shaped.filter(filter)
}

export function shape (repository: RepositoryTypeRaw): RepositoryType {
  const repositoryCopy = { ...repository }
  const readme = repositoryCopy.readme.text
  delete repositoryCopy.readme

  const headline = readme.split('\n')[0]

  const topics = repositoryCopy.repositoryTopics.nodes
    .map(n => n.topic.name)
    .filter(n => n !== 'ready-to-use')
  delete repositoryCopy.repositoryTopics

  return { ...repositoryCopy, readme, topics, headline }
}

function filter (repository: RepositoryType): boolean {
  const search = typeof window !== 'undefined' && !!window.location.search &&
    window.location.search.slice(1).split('&').reduce(
      (acc, param) => {
        const [key, value] = param.split('=')
        acc[key] = value
        return acc
      },
      {} as { [key: string]: string }
    )

  const query = search && search.q.toLowerCase()

  if (!query) return true

  const topicMatched = !!repository.topics.find(
    t => t.toLowerCase().match(query)
  )

  const nameMatched = !!repository.name.toLowerCase().match(query)

  const descriptionMatched = !!repository.description.toLowerCase().match(query)

  const headlineMatched = !!repository.headline.toLowerCase().match(query)

  return topicMatched || nameMatched || descriptionMatched || headlineMatched
}
