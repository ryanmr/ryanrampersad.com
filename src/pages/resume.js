import React from "react";
import { graphql } from "gatsby";
import GeneralLayout from "../components/layout/GeneralLayout";
import Helm from "../components/shared/Helm";
import { Container } from "../components/elements/Container";
import { ThreeFifth, Grid } from "../components/elements/Grid";
import { Padding } from "../components/elements/Space";
import { OutlineButton } from "../components/elements/Button";

export default function ResumePage(props) {
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
            </Padding>
          </ThreeFifth>
        </Grid>
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
