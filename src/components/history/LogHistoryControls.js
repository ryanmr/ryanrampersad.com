import React from "react";

import { WeekNumberToggle } from "./WeekNumberToggle";
import { SortSelector } from "./SortSelector";
import { TopicTagSelector } from "./TopicTagSelector";
import { WorkTagSelector } from "./WorkTagSelector";

import { Grid, Quarter } from "../elements/Grid";

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
    <Grid
      css={`
        justify-content: space-between;
      `}>
      <Quarter>
        <WorkTagSelector
          logs={logs}
          selection={selectedWorkTag}
          onSelect={selectWorkTag}
        />
      </Quarter>
      <Quarter>
        <TopicTagSelector
          logs={logs}
          selection={selectedTopicTag}
          onSelect={selectTopicTag}
        />
      </Quarter>
      <Quarter>
        <SortSelector selection={selectedSort} onSelect={selectSort} />
      </Quarter>
      <Quarter>
        <WeekNumberToggle
          selection={showWeekNumbers}
          onSelect={toggleWeekNumber}
        />
      </Quarter>
    </Grid>
  ) : null;
}
