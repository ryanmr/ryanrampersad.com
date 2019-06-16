import React from "react";
import { getAllWorkTags } from "../../helpers/history-helpers";
import { SpecialSelect } from "../elements/Select";
import { SpecialSelectLabel } from "../elements/Label";

export function WorkTagSelector({ logs, selection, onSelect }) {
  const tags = getAllWorkTags(logs);
  return (
    <div>
      <SpecialSelectLabel id="engagment-select">Engagment</SpecialSelectLabel>
      <div>
        <SpecialSelect
          id="engagement-select"
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
