import React from "react";
import { Link } from "gatsby";
import {
  FullHero,
  HeroBody,
  Container,
  Row,
  Column,
  SectionTitle,
  OutlineButton,
} from "@ryanrampersad/ryan-components";

export function Work() {
  return (
    <FullHero id="work">
      <HeroBody>
        <Container
          css={`
            text-align: center;
          `}>
          <Row>
            <Column size={1}>
              <SectionTitle>Résumé and Work</SectionTitle>
              <p>I know a few things, and I have done a few things.</p>
            </Column>
          </Row>
          <Row>
            <Column size={1}>
              <OutlineButton as={Link} to="/resume">
                Résumé
              </OutlineButton>
              <OutlineButton as={Link} to="/history">
                History
              </OutlineButton>
            </Column>
          </Row>
        </Container>
      </HeroBody>
    </FullHero>
  );
}
