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
            <p
              css={`
                text-align: center;
              `}>
              You may download my latest formal resume.
              <br />
              <br />
              <OutlineButton as="a" href="https://adept.work/ryanresume">
                Download Resume PDF
              </OutlineButton>
            </p>
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
