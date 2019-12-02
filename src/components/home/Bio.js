import React from "react";
import showdown from "showdown";
import HomepageData from "../../data/homepage.yaml";
import FeaturedImage from "../../assets/photos/ryan-rampersad-2013-large-optimized.jpg";
import styled from "styled-components";
import {
  Row,
  FullHero,
  HeroBody,
  Container,
  Column,
} from "@ryanrampersad/ryan-components";

const showdownConverter = new showdown.Converter();

const AboutGrid = styled(Row)`
  align-items: flex-start;
  max-width: 80%;

  @media screen and (max-width: 48rem) {
    max-width: 100%;
  }
`;

const FeaturedContainer = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  display: block;

  @media screen and (max-width: 48rem) {
    margin-bottom: 1rem;
  }

  &:before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 50px 20px rgba(24, 24, 24, 0.9);
  }
`;

const FeaturedImg = styled.img``;

const Description = styled.div`
  font-size: 1.45rem;
  padding: 0 1rem 0 1rem;
  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

const LongDescription = styled.div`
  font-size: 1.05rem;
  padding: 0.5rem;
  line-height: 2rem;
  p {
    margin-bottom: 1rem;
  }
`;

export function Bio() {
  return (
    <FullHero id="about">
      <HeroBody>
        <Container
          css={`
            display: flex;
            justify-content: center;
          `}>
          <AboutGrid
            css={`
              align-items: center;
            `}>
            <Column size={1 / 2}>
              <FeaturedContainer>
                <FeaturedImg
                  src={FeaturedImage}
                  alt="Ryan Rampersad, on a train, in the sun, with a Nexus 4"
                />
              </FeaturedContainer>
            </Column>

            <Column size={1 / 2}>
              <Description
                dangerouslySetInnerHTML={{
                  __html: showdownConverter.makeHtml(HomepageData.description),
                }}
              />
              <LongDescription
                dangerouslySetInnerHTML={{
                  __html: showdownConverter.makeHtml(
                    HomepageData.longdescription,
                  ),
                }}
              />
            </Column>
          </AboutGrid>
        </Container>
      </HeroBody>
    </FullHero>
  );
}
