import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 48rem) {
    display: unset;
  }
`;

const GridSection = styled.div`
  margin-left: 1rem;
  &:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: 48rem) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Half = styled(GridSection)`
  width: 50%;
  margin-left: 1rem;
`;

export const Third = styled(GridSection)`
  width: 33.33%;
  margin-left: 1rem;
`;

export const TwoThird = styled(GridSection)`
  width: 66.66%;
  margin-left: 1rem;
`;

export const ThreeFifth = styled(GridSection)`
  width: ${(3 / 5) * 100}%;
  margin-left: 1rem;
`;

export const Whole = styled.div`
  width: 100%;
`;
