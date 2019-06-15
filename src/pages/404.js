import React from "react";
import Helm from "../components/shared/Helm";
import GeneralLayout from "../components/layout/GeneralLayout";
import { Container } from "../components/elements/Container";
import { Grid, Half } from "../components/elements/Grid";
import { Padding } from "../components/elements/Space";

export default function NotFoundPage() {
  return (
    <GeneralLayout>
      <Container>
        <Grid>
          <Half>
            <Padding>
              <Helm>
                <title>Not Found</title>
              </Helm>
              <div css={``}>
                <h1>Not Found</h1>
                <p>
                  You're lost.
                  <br />
                  <a href="https://twitter.com/ryanmr">Maybe I can help</a>.
                </p>
              </div>
            </Padding>
          </Half>
        </Grid>
      </Container>
    </GeneralLayout>
  );
}
