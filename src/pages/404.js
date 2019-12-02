import React from "react";
import Helm from "../components/shared/Helm";
import GeneralLayout from "../components/layout/GeneralLayout";
import { Container, Row, Column } from "@ryanrampersad/ryan-components";

export default function NotFoundPage() {
  return (
    <GeneralLayout>
      <Container>
        <Row>
          <Column
            size={1 / 2}
            css={`
              padding: 1rem;
            `}>
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
          </Column>
        </Row>
      </Container>
    </GeneralLayout>
  );
}
