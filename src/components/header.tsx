import React from 'react'
import { Link } from 'gatsby'
import Container from './container'

// use require to avoid typescript complaints
const styles = require('./header.module.css')

const ConditionalLink = () => {
  if (typeof window === 'undefined' || window.location.pathname === '/') {
    return (
      <span className={styles.icon}>NEAR</span>
    )
  }

  return (
    <Link to="/" className={styles.icon}>NEAR</Link>
  )
}

type Props = {
  children: React.ReactNode
}

const Header = ({ children }: Props) => (
  <Container>
    <header className={styles.wrap}>
      <ConditionalLink />
      <div className={styles.content}>
        {children}
      </div>
    </header>
  </Container>
)

export default Header
