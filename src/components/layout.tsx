import React from 'react'

// use require to avoid typescript complaints
const styles = require('./layout.module.css')

type Props = {
  children: React.ReactNode
  banner?: string
  title?: string
}

const Layout = ({ banner, children, title }: Props) => (
  <>
    {banner &&
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banner})` }}
      />
    }
    <div className={styles.content}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  </>
)

export default Layout
