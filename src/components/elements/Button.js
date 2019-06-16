import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding: calc(0.375em - 1px) calc(0.625em - 1px);
  position: relative;
  vertical-align: top;
`;

export const Button = styled(BaseButton)`
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.375em - 1px) 0.75em;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
`;

export const OutlineButton = styled(Button)`
  background-color: transparent;
  color: #ccc;
  margin-right: 1rem;
  transition: border-color 0.33s, color 0.66s;
  &:hover {
    border-color: #3f82af;
    color: #fff;
  }
`;
