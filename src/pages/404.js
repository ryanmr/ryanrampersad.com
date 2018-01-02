import React from 'react'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <div className="columns is-centered">
    <div className="column is-three-fifths has-text-centered">
      <Helmet title="Not Found - Ryan Rampersad" />
      <div className="content">
        <h1>Not Found</h1>
        <p>
          You're lost. <a href="https://twitter.com/ryanmr">Maybe I can help</a>.
        </p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
