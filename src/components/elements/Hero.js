import React from "react";
import styled from "styled-components";

export const Hero = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
`;

export const FullHero = styled(Hero)`
  min-height: 100vh;
`;

export const HeroBody = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.5rem;
`;
