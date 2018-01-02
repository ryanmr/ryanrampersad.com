import React from 'react'
import ReferralLinksData from '../../data/referral-links.yaml'

const ReferralLinks = () => {
  return (
    <section id="referrals" className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns has-text-centered">
            <div className="column">
              <h3 className="title">Referrals</h3>
              <p>Consider using the following referral links.</p>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              <div className="columns">
                <div className="column has-text-centered">
                  <ul className="referral">
                    {ReferralLinksData.links.map(link => (
                      <li key={link.name}>
                        <a href={link.url}>{link.name}</a>
                        <br />
                        <small>{link.description}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ReferralLinks }
