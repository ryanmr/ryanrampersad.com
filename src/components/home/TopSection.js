import React from "react";
import HomepageData from "../../data/homepage.yaml";
import styled from "styled-components";
import {
  Container,
  AnimatedBrandTitle,
  FullHero,
  HeroBody,
  UnstyledList,
  FadeInAnimationX,
  FadeInAnimationY,
} from "@ryanrampersad/ryan-components";

const TopHero = styled(FullHero)`
  position: relative;
  z-index: 1000;
`;

const PersonaItem = styled.li`
  font-size: 1.3rem;
`;
const AnimatedPersonaItem = styled(PersonaItem)`
  opacity: 0;
  transform: translateY(-10px);
  animation: 0.75s linear 0.5s 1 ${FadeInAnimationY};
  animation-fill-mode: forwards;
`;

const PersonaList = styled(UnstyledList)`
  list-style-type: none;
  padding: 0;
  margin: 0 0 2rem 0;

  & ${AnimatedPersonaItem}:nth-child(1) {
    animation-delay: 0.5s;
  }
  & ${AnimatedPersonaItem}:nth-child(2) {
    animation-delay: 0.65s;
  }
  & ${AnimatedPersonaItem}:nth-child(3) {
    animation-delay: 0.8s;
  }
  & ${AnimatedPersonaItem}:nth-child(4) {
    animation-delay: 0.95s;
  }
  & ${AnimatedPersonaItem}:nth-child(5) {
    animation-delay: 1.1s;
  }
`;

const CompassLink = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.85rem 1rem;
  color: #ddd;
  transition: all 0.35s;
  border-radius: 2px;
  margin: 0 0.25rem 0 0.25rem;
  text-decoration: none;
  height: 2.25em;
  border: 1px solid rgba(0, 0, 0, 0);
  position: relative;
  &:hover {
    color: #fff;
    border: 1px solid #fff;
  }

  @media screen and (max-width: 48rem) {
    padding: 0.85rem 0.75rem;
  }
`;

const AnimatedCompassLink = styled(CompassLink)`
  opacity: 0;
  animation: 0.75s linear 0.5s 1 ${FadeInAnimationX};
  animation-fill-mode: forwards;
`;

const Compass = styled.div`
  display: flex;
  justify-content: center;

  & ${AnimatedCompassLink}:nth-child(-n + 2) {
    transform: translateX(-1rem);
    animation-delay: 1.3s;
  }

  & ${AnimatedCompassLink}:nth-last-child(-n + 2) {
    transform: translateX(1rem);
    animation-delay: 1.3s;
  }
`;

export function TopSection() {
  return (
    <TopHero id="top">
      <HeroBody>
        <Container
          css={`
            text-align: center;
          `}>
          <AnimatedBrandTitle>{HomepageData.name}</AnimatedBrandTitle>
          <PersonaList>
            {HomepageData.words.map((word) => (
              <AnimatedPersonaItem key={word}>{word}</AnimatedPersonaItem>
            ))}
          </PersonaList>

          <Compass>
            <AnimatedCompassLink href="#about">About</AnimatedCompassLink>
            <AnimatedCompassLink href="#links">Links</AnimatedCompassLink>
            <AnimatedCompassLink href="#work">Work</AnimatedCompassLink>
            <AnimatedCompassLink href="#referrals">
              Referrals
            </AnimatedCompassLink>
          </Compass>
        </Container>
      </HeroBody>
    </TopHero>
  );
}
