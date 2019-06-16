import React from "react";
import styled, { css } from "styled-components";
import { OutlineButton } from "../elements/Button";

const RotateArrow = styled.span`
  transition: transform 0.5s, color 0.5s;
  ${({ active }) =>
    active &&
    css`
      color: #bd0b0b;
      transform: rotate(180deg);
    `}
`;

export function LogHistoryHeader({ showControls, toggleControls }) {
  return (
    <div>
      <div
        css={`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}>
        <h1>History</h1>
        <OutlineButton onClick={toggleControls}>
          <RotateArrow active={showControls}>▲</RotateArrow>
        </OutlineButton>
      </div>
    </div>
  );
}
