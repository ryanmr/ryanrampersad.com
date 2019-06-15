import React from "react";
import { getAllWorkTags } from "../../helpers/history-helpers";

export function WorkTagSelector({ logs, selection, onSelect }) {
  const tags = getAllWorkTags(logs);
  return (
    <div>
      <label id="engagment-select">Engagment</label>
      <div>
        <select
          id="engagement-select"
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
