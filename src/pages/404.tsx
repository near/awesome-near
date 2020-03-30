import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout title="404: Not Found">
    <SEO title="404: Not found | NEAR Examples" />
    <p>You just hit a route that doesn’t exist.</p>
    <p><Link to="/">Go home?</Link></p>
  </Layout>
)

export default NotFoundPage
