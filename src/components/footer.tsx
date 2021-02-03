import React from 'react'
import Container from './container'
import { useMixpanel } from 'gatsby-plugin-mixpanel'
import { SUBSCRIBED } from '../mixpanel'

// use require to avoid typescript complaints
const styles = require('./footer.module.css')

export default function Footer () {
  const mixpanel = useMixpanel()
  const trackHandler = () => {
    let id = mixpanel.get_distinct_id()
    mixpanel.identify(id)
    mixpanel.people.set(SUBSCRIBED, true)
    mixpanel.track(SUBSCRIBED)
  }
  return (
    <footer className={styles.wrap}>
      <Container>
        <form action="https://42labs.us14.list-manage.com/subscribe/post?u=faedf5dec8739fb92e05b4131&amp;id=14e8024c6c" method="POST" target="_blank">
          <h3>
            Subscribe via Email.
            <span className={styles.yellow}> No fluff, just what you need to know.</span>
          </h3>
          <label htmlFor="email" style={{ display: 'inline-block', textIndent: '-999em' }}>Email</label>
          <input
            id="email"
            name="EMAIL"
            placeholder="Your email…"
            required
            style={{ marginRight: '1em' }}
            type="email"
          />
          <button type="submit" onClick={trackHandler}>Subscribe</button>
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
