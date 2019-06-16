import React from "react";

import { WeekNumberToggle } from "./WeekNumberToggle";
import { SortSelector } from "./SortSelector";
import { TopicTagSelector } from "./TopicTagSelector";
import { WorkTagSelector } from "./WorkTagSelector";

export function LogHistoryControls({
  showControls,
  logs,
  selectedWorkTag,
  selectWorkTag,
  selectedTopicTag,
  selectTopicTag,
  selectedSort,
  selectSort,
  showWeekNumbers,
  toggleWeekNumber,
}) {
  return showControls ? (
    <div
      css={`
        display: flex;
        justify-content: space-around;
        align-items: center;
      `}>
      <WorkTagSelector
        logs={logs}
        selection={selectedWorkTag}
        onSelect={selectWorkTag}
      />
      <TopicTagSelector
        logs={logs}
        selection={selectedTopicTag}
        onSelect={selectTopicTag}
      />
      <SortSelector selection={selectedSort} onSelect={selectSort} />
      <WeekNumberToggle
        selection={showWeekNumbers}
        onSelect={toggleWeekNumber}
      />
    </div>
  ) : null;
}
