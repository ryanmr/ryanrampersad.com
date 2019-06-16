import React from "react";
import styled from "styled-components";

export const SpecialCheckbox = styled.input`
  border: 2px solid #fff;
  appearance: none;
  padding: 1rem;
`;

export const CheckedAwareSpecialCheckbox = styled(SpecialCheckbox)`
  background-color: ${(props) => (props.checked ? "#61a565" : "#333")};
`;
