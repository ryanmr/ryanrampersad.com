import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Footer } from '../components/layout/Footer'
import { Ribbon } from '../components/shared/Ribbon'

const HomepageTemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords }
      ]}
    />

    <div className="universe home">
      {children()}
      <Footer />
      <Ribbon />
    </div>
  </div>
)

export const query = graphql`
  query HomepageLayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

HomepageTemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default HomepageTemplateWrapper
