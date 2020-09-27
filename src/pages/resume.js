import React from "react";
import { graphql } from "gatsby";
import GeneralLayout from "../components/layout/GeneralLayout";
import Helm from "../components/shared/Helm";
import {
  Row,
  Column,
  Container,
  OutlineButton,
} from "@ryanrampersad/ryan-components";

export default function ResumePage(props) {
  const node = props.data.content.edges[0].node;
  return (
    <GeneralLayout>
      <Helm>
        <title>Resume</title>
        <meta
          name="description"
          content="Read Ryan's resume and learn about his skills"
        />
      </Helm>

      <Container>
        <Row>
          <Column
            size={3 / 5}
            css={`
              padding: 1rem;
            `}>
            <div
              css={`
                text-align: center;
              `}>
              <p>You may download my latest formal resume.</p>

              <div
                css={`
                  padding: 1rem;
                `}>
                <OutlineButton
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://adept.work/ryanresume"
                  css={`
                    margin-right: 0;
                  `}>
                  Download Resume
                </OutlineButton>
                <small
                  css={`
                    margin-top: 0.25rem;
                    color: #999;
                    display: block;
                  `}>
                  via Google Docs
                </small>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: node.html,
              }}
            />
          </Column>
        </Row>
      </Container>
    </GeneralLayout>
  );
}

export const pageQuery = graphql`
  query ResumeQuery {
    content: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "resume" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            type
          }
          html
        }
      }
    }
  }
`;
