import React from 'react'
import { Link } from 'gatsby'

// use require to avoid typescript complaints
const styles = require('./header.module.css')

type Props = {
  children: React.ReactNode
}

const Header = ({ children }: Props) => (
  <header className={styles.wrap}>
    <Link to="/" className={styles.icon}>NEAR</Link>
    <div className={styles.content}>
      {children}
    </div>
  </header>
)

export default Header
