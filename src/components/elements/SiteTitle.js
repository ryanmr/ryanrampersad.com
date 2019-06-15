import React from "react";
import styled from "styled-components";
import { FadeInAnimationY } from "./Keyframes";

export const HomeTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${(props) => (props.large ? "8rem" : "4rem")};
  text-transform: uppercase;
  text-align: center;
  font-weight: normal;
  font-family: "LeagueGothicRegular", Helvetica, Arial, san-serif;
  color: #fff;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 40rem) {
    font-size: 16vw;
  }
`;

export const AnimatedHomeTitle = styled(HomeTitle)`
  opacity: 0;
  transform: translateY(-10px);
  animation: 0.75s linear 0s 1 ${FadeInAnimationY};
  animation-fill-mode: forwards;
`;
