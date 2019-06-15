import React from "react";
import { getAllTopicTags } from "../../helpers/history-helpers";
import { SpecialSelect } from "../elements/Select";
import { SpecialSelectLabel } from "../elements/Label";

export function TopicTagSelector({ logs, selection, onSelect }) {
  const tags = getAllTopicTags(logs);
  return (
    <div>
      <SpecialSelectLabel id="topic-tags-select">Topic</SpecialSelectLabel>
      <div>
        <SpecialSelect
          id="topic-tags-select"
          value={selection}
          onChange={(event) => onSelect(event.target.value)}>
          <option value="">All</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </SpecialSelect>
      </div>
    </div>
  );
}
