import React from 'react'
import * as styles from './Layout.module.css'

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
