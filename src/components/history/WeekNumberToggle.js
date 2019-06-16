import React from "react";
import { SpecialSelectLabel } from "../elements/Label";
import { CheckedAwareSpecialCheckbox } from "../elements/Checkbox";

export function WeekNumberToggle({ selection, onSelect }) {
  return (
    <div>
      <SpecialSelectLabel id="show-week-numbers">
        Show Week Numbers
      </SpecialSelectLabel>
      <div>
        <CheckedAwareSpecialCheckbox
          type="checkbox"
          id="show-week-numbers"
          value={selection}
          onChange={onSelect}
          checked={selection}
        />
      </div>
    </div>
  );
}
