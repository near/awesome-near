import React from 'react'
import { Link } from 'gatsby'
import { RepositoryType } from '../data/github'

// use require to avoid typescript complaints
const styles = require('./grid.module.css')
const defaultBanner = require('../images/default-banner.svg')

type CardProps = {
  repo: RepositoryType
}

const Card = ({ repo }: CardProps) => (
  <Link to={'/' + repo.name} className={styles.cardWrap}>
    <img
      alt=""
      className={styles.image}
      src={repo.usesCustomOpenGraphImage
        ? repo.openGraphImageUrl
        : defaultBanner
      }
    />
    <div className={styles.cardContent}>
      <h2>
        {repo.headline}
      </h2>
      <p>
        {repo.description}
      </p>
    </div>
    {!!repo.topics.length && (
      <footer className={styles.cardFooter}>
        {repo.topics.map(topic => (
          <div className={styles.label} key={topic}>{topic}</div>
        ))}
      </footer>
    )}
  </Link>
)

type GridProps = {
  repositories: RepositoryType[]
}

const Grid = ({ repositories }: GridProps) => (
  <div className={styles.grid}>
    {repositories.map(repo => (
      <Card key={repo.id} repo={repo} />
    ))}
  </div>
)

export default Grid
