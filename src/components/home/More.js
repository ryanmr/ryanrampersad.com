import React from "react";
import { FullHero, HeroBody } from "../elements/Hero";
import { Container } from "../elements/Container";
import { SectionTitle } from "../elements/Title";
import styled from "styled-components";
import { Link } from "gatsby";

export function More() {
  return (
    <FullHero id="more">
      <HeroBody>
        <Container
          css={`
            max-width: 80%;
            text-align: center;
          `}>
          <SectionTitle>More</SectionTitle>
          <p>
            There's a bit <i>more</i> to see. Feel free to look around.
          </p>

          <ArbitraryTextList>
            <p>
              <strong>
                <Link to="/books">Book recommendations</Link>
              </strong>
              <br />
              Good books in a nice list, ideal for software engineers,
              architects, managers, <i>hackers</i> and more.
            </p>
          </ArbitraryTextList>
        </Container>
      </HeroBody>
    </FullHero>
  );
}

const ArbitraryTextList = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  text-align: left;

  i {
    font-family: serif;
  }

  @media screen and (max-width: 40rem) {
    max-width: unset;
    text-align: justify;
  }
`;