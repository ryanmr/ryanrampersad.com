import React from "react";
import { getAllTopicTags } from "../../helpers/history-helpers";

export function TopicTagSelector({ logs, selection, onSelect }) {
  const tags = getAllTopicTags(logs);
  return (
    <div>
      <label id="topic-tags-select">Topic</label>
      <div>
        <select
          id="topic-tags-select"
          value={selection}
          onChange={(event) => onSelect(event.target.value)}>
          <option value="">All</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
