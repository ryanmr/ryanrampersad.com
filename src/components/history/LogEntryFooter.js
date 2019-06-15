import React from "react";
import styled from "styled-components";

const LogEntryFooterContent = styled.aside``;

const TopicButtons = styled.div`
  text-align: right;
`;

const TopicButton = styled.button`
  font-family: sans-serif;
  font-size: 0.65rem;
  padding: 0.5rem;
  margin-right: 0.25rem;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: #555;
  color: #efefef;
  cursor: pointer;
  transition: all 0.33s;
  &:hover {
    border: 1px solid #ccc;
  }
`;

export function LogEntryFooter({ entry, onSetTopic }) {
  const tags = entry.topic_tags;
  return (
    <LogEntryFooterContent>
      <TopicButtons>
        {tags.map((tag) => (
          <TopicButton onClick={(event) => onSetTopic(event, tag)} key={tag}>
            {tag}
          </TopicButton>
        ))}
      </TopicButtons>
    </LogEntryFooterContent>
  );
}
