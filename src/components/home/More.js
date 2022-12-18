import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  FullHero,
  HeroBody,
  Container,
  SectionTitle,
} from "@ryanrampersad/ryan-components";

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
                <a href="https://www.ryanmr.com">ryanmr.com blog</a>
              </strong>
              <br />A blog, a home on the internet, a second brain.
            </p>
          </ArbitraryTextList>

          <ArbitraryTextList>
            <p>
              <strong>
                <a href="https://cards.ryanrampersad.com">cards by ryan</a>
              </strong>
              <br />
              Commemorative cards annually mailed by Ryan
            </p>
          </ArbitraryTextList>

          <hr style={{ maxWidth: "30rem" }} />

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
