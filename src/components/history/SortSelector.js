import React from "react";
import {
  SpecialSelectLabel,
  SpecialSelect,
} from "@ryanrampersad/ryan-components";

export function SortSelector({ selection, onSelect }) {
  return (
    <div>
      <SpecialSelectLabel id="sorting-select">Sort</SpecialSelectLabel>
      <div>
        <SpecialSelect
          id="sorting-select"
          value={selection}
          onChange={(event) => onSelect(event.target.value)}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </SpecialSelect>
      </div>
    </div>
  );
}
