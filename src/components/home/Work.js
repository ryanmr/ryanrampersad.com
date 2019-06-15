import React from "react";
import { Link } from "gatsby";
import { FullHero, HeroBody } from "../elements/Hero";
import { Container } from "../elements/Container";
import { Grid, Whole } from "../elements/Grid";
import { SectionTitle } from "../elements/Title";
import { OutlineButton } from "../elements/Button";

export function Work() {
  return (
    <FullHero id="work">
      <HeroBody>
        <Container
          css={`
            text-align: center;
          `}>
          <Grid>
            <Whole>
              <SectionTitle>Résumé and Work</SectionTitle>
              <p>I know a few things, and I have done a few things.</p>
            </Whole>
          </Grid>
          <Grid>
            <Whole>
              <OutlineButton as={Link} to="/resume">
                Résumé
              </OutlineButton>
              <OutlineButton as={Link} to="/history">
                History
              </OutlineButton>
            </Whole>
          </Grid>
        </Container>
      </HeroBody>
    </FullHero>
  );
}
