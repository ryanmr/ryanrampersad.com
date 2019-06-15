import React from "react";

import WorkLogData from "../data/work-log.yaml";
import { collectLogs } from "../helpers/history-helpers";
import { LogHistory } from "../components/history/LogHistory";

const ALL_LOGS = collectLogs(WorkLogData);

export default function HistoryPage(props) {
  return <LogHistory logs={ALL_LOGS} />;
}
