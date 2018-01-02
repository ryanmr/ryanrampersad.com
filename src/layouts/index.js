import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

import './index.scss'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords }
      ]}
    />

    <div className="universe other">
      <Header />
      <div className="container">{children()}</div>
      <Footer />
    </div>
  </div>
)

export const query = graphql`
  query GeneralLayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
