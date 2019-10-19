import React, { useState, useMemo, useCallback } from "react";

import { getLogs } from "../../helpers/history-helpers";

import { LogNoResults } from "./LogNoResults";
import { LogList } from "./LogList";
import GeneralLayout from "../layout/GeneralLayout";
import Helm from "../shared/Helm";
import { Container } from "../elements/Container";
import { Grid, ThreeFifth } from "../elements/Grid";
import { Padding } from "../elements/Space";

import { LogHistoryHeader } from "./LogHistoryHeader";
import { LogHistoryControls } from "./LogHistoryControls";

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
              <LogHistoryHeader
                showControls={showControls}
                toggleControls={toggleControls}
              />

              <LogHistoryControls
                showControls={showControls}
                {...{
                  logs,
                  selectedWorkTag,
                  selectWorkTag,
                  selectedTopicTag,
                  selectTopicTag,
                  selectedSort,
                  selectSort,
                  showWeekNumbers,
                  toggleWeekNumber,
                }}
              />

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