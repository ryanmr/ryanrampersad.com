import React from 'react'
import Helmet from 'react-helmet'

class MadeByRyanPage extends React.Component {
  getNode() {
    return this.props.data.content.edges[0].node
  }

  renderMarkdownHtml() {
    const html = this.getNode().html
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    )
  }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-three-fifths">
          <Helmet title="Made By - Ryan Rampersad" />
          <div className="resume-content content">{this.renderMarkdownHtml()}</div>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query MadeByRyanQuery {
    content: allMarkdownRemark(filter: { frontmatter: { type: { eq: "made-by-ryan" } } }) {
      edges {
        node {
          frontmatter {
            title
            date
            _PARENT
            parent
            type
          }
          html
        }
      }
    }
  }
`

export default MadeByRyanPage
