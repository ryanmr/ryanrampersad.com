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

export default function ResumeExtendedPage(props) {
  const node = props.data.content.edges[0].node;
  return (
    <GeneralLayout>
      <Helm>
        <title>Extended Resume</title>
        <meta
          name="description"
          content="Read Ryan's extended resume; things that are not pertinent"
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
  query ResumeExtendedQuery {
    content: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "resume-extended" } } }
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
