import React from "react";
export function SortSelector({ selection, onSelect }) {
  return (
    <div>
      <label id="sorting-select">Sort</label>
      <div>
        <select
          id="sorting-select"
          value={selection}
          onChange={(event) => onSelect(event.target.value)}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </div>
  );
}
