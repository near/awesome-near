import React from 'react'

// use require to avoid typescript complaints
const styles = require('./layout.module.css')

type Props = {
  children: React.ReactNode
  banner?: string
  title: string
}

const Layout = ({ banner, children, title }: Props) => (
  <>
    <h1 className={styles.banner}>
      <span className={styles.icon}>NEAR</span>
      {title}
    </h1>
    <div className={styles.content}>
      {banner && <img alt="" src={banner} />}
      {children}
    </div>
  </>
)

export default Layout
