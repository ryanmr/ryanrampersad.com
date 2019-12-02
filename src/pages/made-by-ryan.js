import React from "react";
import { graphql } from "gatsby";
import GeneralLayout from "../components/layout/GeneralLayout";
import Helm from "../components/shared/Helm";
import { Container, Row, Column } from "@ryanrampersad/ryan-components";

export default function MadeByRyanPage(props) {
  const node = props.data.content.edges[0].node;
  return (
    <GeneralLayout>
      <Helm>
        <title>Made By Ryan</title>
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
  query MadeByRyanQuery {
    content: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "made-by-ryan" } } }
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
