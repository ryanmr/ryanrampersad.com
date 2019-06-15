import React from "react";
import showdown from "showdown";
import styled from "styled-components";

export const showdownConverter = new showdown.Converter();

function generator() {
  const inputMap = {};
  return function convert(input) {
    if (inputMap[input]) {
      return inputMap[input];
    }
    const value = showdownConverter.makeHtml(input);
    inputMap[input] = value;
    return value;
  };
}

const converter = generator();

export const LogEntryContent = styled.div`
  font-size: 0.95rem;
  margin-bottom: 1rem;

  ul {
    list-style: disc;
    padding-left: 1rem;
  }
  ul li {
    margin-left: 1rem;
  }
  ul li ul {
    list-style: circle;
  }
  ul li ul li {
    margin-left: 1rem;
  }
`;

export function LogEntryDescription({ entry }) {
  return (
    <LogEntryContent
      dangerouslySetInnerHTML={{
        __html: converter(entry.description),
      }}
    />
  );
}
