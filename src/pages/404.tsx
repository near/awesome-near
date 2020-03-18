import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>404: NOT FOUND</h1>
    <p>You just hit a route that doesn’t exist... the sadness. <Link to="/">Go home?</Link></p>
  </>
)

export default NotFoundPage
