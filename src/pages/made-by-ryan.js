import React from "react";
import { graphql } from "gatsby";
import GeneralLayout from "../components/layout/GeneralLayout";
import Helm from "../components/shared/Helm";

class MadeByRyanPage extends React.Component {
  getNode() {
    return this.props.data.content.edges[0].node;
  }

  renderMarkdownHtml() {
    const html = this.getNode().html;
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    );
  }

  render() {
    return (
      <GeneralLayout>
        <Helm>
          <title>Made By Ryan</title>
        </Helm>
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <div className="resume-content content">
              {this.renderMarkdownHtml()}
            </div>
          </div>
        </div>
      </GeneralLayout>
    );
  }
}

export const pageQuery = graphql`
  query MadeByRyanQuery {
    content: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "made-by-ryan" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            _PARENT
            type
          }
          html
        }
      }
    }
  }
`;

export default MadeByRyanPage;
