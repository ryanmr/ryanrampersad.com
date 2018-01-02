import React from 'react'
import Link from 'gatsby-link'
import showdown from 'showdown'

const showdownConverter = new showdown.Converter()

const Work = () => {
  return (
    <section id="work" className="hero is-medium work">
      <div className="hero-body">
        <div className="container">
          <div className="columns has-text-centered">
            <div className="column">
              <h3 className="title">Resume and Work</h3>
              <p>I know a few things, and I have done a few things.</p>
            </div>
          </div>
          <div className="columns is-centered has-text-centered resume">
            <Link className="hollow button" to="/resume">
              Résumé
            </Link>
            <Link className="hollow button" to="/history">
              History
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Work }
