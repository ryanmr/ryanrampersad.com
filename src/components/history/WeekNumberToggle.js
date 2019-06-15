import React from "react";
export function WeekNumberToggle({ selection, onSelect }) {
  return (
    <div>
      <label id="topic-tags-select">Show Week Numbers:</label>
      <div>
        <input
          type="checkbox"
          id="show-week-numbers"
          value={selection}
          onChange={onSelect}
        />
      </div>
    </div>
  );
}
