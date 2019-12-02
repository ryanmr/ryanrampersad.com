import React from "react";

import { WeekNumberToggle } from "./WeekNumberToggle";
import { SortSelector } from "./SortSelector";
import { TopicTagSelector } from "./TopicTagSelector";
import { WorkTagSelector } from "./WorkTagSelector";
import { Row, Column } from "@ryanrampersad/ryan-components";

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
    <Row
      css={`
        justify-content: space-between;
      `}>
      <Column size={1 / 4}>
        <WorkTagSelector
          logs={logs}
          selection={selectedWorkTag}
          onSelect={selectWorkTag}
        />
      </Column>
      <Column size={1 / 4}>
        <TopicTagSelector
          logs={logs}
          selection={selectedTopicTag}
          onSelect={selectTopicTag}
        />
      </Column>
      <Column size={1 / 4}>
        <SortSelector selection={selectedSort} onSelect={selectSort} />
      </Column>
      <Column size={1 / 4}>
        <WeekNumberToggle
          selection={showWeekNumbers}
          onSelect={toggleWeekNumber}
        />
      </Column>
    </Row>
  ) : null;
}
