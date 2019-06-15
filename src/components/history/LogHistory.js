import React, { useState, useMemo, useCallback } from "react";

import { getLogs } from "../../helpers/history-helpers";
import { WeekNumberToggle } from "./WeekNumberToggle";
import { SortSelector } from "./SortSelector";
import { TopicTagSelector } from "./TopicTagSelector";
import { WorkTagSelector } from "./WorkTagSelector";
import { LogNoResults } from "./LogNoResults";
import { LogList } from "./LogList";
import GeneralLayout from "../layout/GeneralLayout";
import Helm from "../shared/Helm";
import { Container } from "../elements/Container";
import { Grid, ThreeFifth } from "../elements/Grid";
import { Padding } from "../elements/Space";

export function LogHistory({ logs }) {
  const [state, setState] = useState({
    selectedWorkTag: "",
    selectedTopicTag: "",
    selectedSort: "desc",
    showControls: false,
    showWeekNumbers: false,
  });

  const {
    selectedTopicTag,
    selectedWorkTag,
    selectedSort,
    showControls,
    showWeekNumbers,
  } = state;

  // TODO: investigate useMemo usage
  const computedLogs = useMemo(
    () =>
      getLogs(logs, {
        selectedTopicTag,
        selectedWorkTag,
        selectedSort,
      }),
    [selectedTopicTag, selectedWorkTag, selectedSort],
  );

  function toggleControls() {
    setState((p) => ({ ...p, showControls: !p.showControls }));
  }

  function toggleWeekNumber() {
    setState((p) => ({ ...p, showWeekNumbers: !p.showWeekNumbers }));
  }

  function selectWorkTag(v) {
    setState((p) => ({ ...p, selectedWorkTag: v }));
  }

  function selectTopicTag(v) {
    setState((p) => ({ ...p, selectedTopicTag: v }));
  }

  function selectSort(v) {
    setState((p) => ({ ...p, selectedSort: v }));
  }

  // TODO: investigate useCallback usage
  const setTopic = useCallback(
    (_, tag) =>
      setState((p) => ({ ...p, selectedTopicTag: tag, showControls: true })),
    [],
  );

  return (
    <GeneralLayout>
      <Helm>
        <title>Working History</title>
      </Helm>

      <Container>
        <Grid>
          <ThreeFifth>
            <Padding>
              <div>
                <h1
                  css={`
                    cursor: pointer;
                  `}
                  onClick={toggleControls}>
                  History
                </h1>
                <p>This is my recent work history, focused on notable works.</p>
              </div>

              {showControls && (
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
                  <SortSelector
                    selection={selectedSort}
                    onSelect={selectSort}
                  />
                  <WeekNumberToggle
                    selection={showWeekNumbers}
                    onSelect={toggleWeekNumber}
                  />
                </div>
              )}

              {logs.length > 0 ? (
                <LogList
                  logs={computedLogs}
                  showWeekNumbers={showWeekNumbers}
                  setTopic={setTopic}
                />
              ) : (
                <LogNoResults />
              )}
            </Padding>
          </ThreeFifth>
        </Grid>
      </Container>
    </GeneralLayout>
  );
}
