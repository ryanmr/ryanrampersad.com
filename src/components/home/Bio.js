import React from 'react'
import showdown from 'showdown'
import HomepageData from '../../data/homepage.yaml'
import FeaturedImage from '../../assets/photos/ryan-rampersad-2013-large.jpg'

const showdownConverter = new showdown.Converter()

const Bio = () => {
  return (
    <section id="about" className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-four-fifths-desktop">
              <div className="columns">
                <div className="column is-half">
                  <div className="featured">
                    <img
                      className="featured-image"
                      src={FeaturedImage}
                      alt="ryan rampersad, on a train, in the sun, with a Nexus 4"
                    />
                  </div>
                </div>
                <div className="column is-half bio">
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: showdownConverter.makeHtml(HomepageData.description)
                    }}
                  />
                  <div
                    className="long-description"
                    dangerouslySetInnerHTML={{
                      __html: showdownConverter.makeHtml(HomepageData.longdescription)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Bio }
