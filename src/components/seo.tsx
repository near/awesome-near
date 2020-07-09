/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'

type Meta = {
  name: string
  content: string
} | {
  content: string
  property: string
}

type Props = {
  author?: string
  description?: string
  lang?: string
  meta?: Meta[]
  title?: string
}

function SEO ({
  author = '@NEARProtocol',
  description = 'A curated list of great demos and starter apps built with NEAR Protocol',
  lang = 'en',
  meta = [],
  title = 'NEAR Examples'
}: Props) {
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: author
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        }
      ].concat(meta)}
    />
  )
}

export default SEO
