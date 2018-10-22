import React from "react";
import Helm from "../components/shared/Helm";
import { graphql } from "gatsby";
import GeneralLayout from "../components/layout/GeneralLayout";

class ResumePage extends React.Component {
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
          <title>Resume</title>
        </Helm>
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <div className="resume-content">
              <p className="has-text-centered">
                You may download my latest formal resume.
                <br />
                <br />
                <a
                  className="resume-download button outline"
                  href="https://adept.work/ryanresume">
                  Download Resume PDF
                </a>
              </p>
              <hr className="lightspeed" />
            </div>
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
  query ResumeQuery {
    content: allMarkdownRemark(filter: { frontmatter: { type: { eq: "resume" } } }) {
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

export default ResumePage;
