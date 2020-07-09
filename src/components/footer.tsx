import React from 'react'
import Container from './container'

// use require to avoid typescript complaints
const styles = require('./footer.module.css')

export default function Footer () {
  return (
    <footer className={styles.wrap}>
      <Container>
        <form action="https://42labs.us14.list-manage.com/subscribe/post?u=faedf5dec8739fb92e05b4131&amp;id=14e8024c6c" method="POST" target="_blank">
          <h3>
            Subscribe via Email.
            <span className={styles.yellow}> No fluff, just what you need to know.</span>
          </h3>
          <div className="flex items-center mt-10">
            <label htmlFor="email" style={{ display: 'inline-block', textIndent: '-999em' }}>Email</label>
            <input required type="email" id="email" name="EMAIL" placeholder="Your email…"/>
            <button type="submit">Subscribe</button>
          </div>
          <p>
            <small>No spam. Never shared. Opt out at any time.</small>
          </p>
          <input type="hidden" name="b_faedf5dec8739fb92e05b4131_14e8024c6c" tabIndex={-1} value="" />
          <input type="hidden" name="ROLE" id="newsletter-role" tabIndex={-1} value="" />
        </form>
      </Container>
    </footer>
  )
}
