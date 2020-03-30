import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import SEO from '../components/seo'

// bypass typescript by using commonjs syntax:
// https://github.com/microsoft/TypeScript-React-Starter/issues/12
const image = require('../images/default-banner.svg')

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found | NEAR Examples" />
    <Header>
      <h1>404: Not Found</h1>
    </Header>
    <div style={{
      margin: '0 auto',
      maxWidth: '45em'
    }}>
      <img alt="" src={image} />
      <h2>There’s nothing here</h2>
      <p>
        Were you expecting to see something? Let us know:
        {' '}<a href="https://twitter.com/NEARProtocol">Twitter</a> •
        {' '}<a href="http://near.chat/">Discord</a> •
        {' '}<a href="https://t.me/cryptonear">Telegram</a>
      </p>
      <p>Or: <Link to="/">check out some NEAR Examples</Link></p>
    </div>
  </>
)

export default NotFoundPage
