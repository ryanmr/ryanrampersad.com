import React from "react";
import { graphql } from "gatsby";
import GeneralLayout from "../components/layout/GeneralLayout";
import Helm from "../components/shared/Helm";
import { Container } from "../components/elements/Container";
import { ThreeFifth, Grid } from "../components/elements/Grid";
import { Padding } from "../components/elements/Space";

export default function MadeByRyanPage(props) {
  const node = props.data.content.edges[0].node;
  return (
    <GeneralLayout>
      <Helm>
        <title>Made By Ryan</title>
      </Helm>

      <Container>
        <Grid>
          <ThreeFifth>
            <Padding>
              <div
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
            </Padding>
          </ThreeFifth>
        </Grid>
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
