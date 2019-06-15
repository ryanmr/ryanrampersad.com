import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1216px) {
    max-width: 1152px;
  }

  @media screen and (min-width: 1408px) {
    max-width: 1344px;
  }
`;
