import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <footer className="universe-header">
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="column is-two-thirds has-text-centered">
          <h2 className="site-title">
            <Link to="/">Ryan Rampersad</Link>
          </h2>
        </div>
      </div>
    </div>
  </footer>
)

export { Header }
