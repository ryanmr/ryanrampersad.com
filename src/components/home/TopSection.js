import React from 'react'
import HomepageData from '../../data/homepage.yaml'

const TopSection = () => {
  return (
    <section id="top" className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="home-title">{HomepageData.name}</h1>
          <ul className="words">{HomepageData.words.map(word => <li key={word}>{word}</li>)}</ul>
          <div className="compass">
            <a className="button spaced" href="#about">
              About
            </a>
            <a className="button spaced" href="#links">
              Links
            </a>
            <a className="button spaced" href="#work">
              Work
            </a>
            <a className="button spaced" href="#referrals">
              Referrals
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { TopSection }
