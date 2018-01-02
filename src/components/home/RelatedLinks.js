import React from 'react'
import RelatedLinksData from '../../data/related-links.yaml'

function getLinksByGroup(group) {
  const links = RelatedLinksData.links
  return links.filter(link => link.group === group)
}

const RelatedLinks = () => {
  return (
    <section id="links" className="hero is-medium links">
      <div className="hero-body">
        <div className="container">
          <div className="columns has-text-centered">
            <div className="column">
              <h3 className="title">Find me just about everywhere</h3>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              <div className="columns">
                {RelatedLinksData.groups.map(group => (
                  <div key={group} className="column is-one-third has-text-centered">
                    <ul className="collection">
                      {getLinksByGroup(group).map(link => (
                        <li key={link.name}>
                          <a href={link.url}>{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { RelatedLinks }
