import React from 'react'

// use require to avoid typescript complaints
const styles = require('./container.module.css')

type Props = {
  children: React.ReactNode
}

export default function Container ({ children }: Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
