import React from "react";
import { LogHeader } from "./LogHeader";
import { LogEntryFooter } from "./LogEntryFooter";
import { LogEntryDescription } from "./LogEntryDescription";

export function LogList({ logs, showWeekNumbers, setTopic }) {
  return (
    <div
      css={`
        margin-top: 5rem;
      `}>
      {logs.map((log) => (
        <LogListItem
          key={log.when}
          log={log}
          showWeekNumbers={showWeekNumbers}
          setTopic={setTopic}
        />
      ))}
    </div>
  );
}

function LogListItem({ log, showWeekNumbers, setTopic }) {
  return (
    <article
      css={`
        margin-bottom: 5rem;
      `}>
      <LogHeader log={log} showWeekNumbers={showWeekNumbers} />
      {log.entries.map((entry, i) => (
        <React.Fragment key={`${log.when}-${i}`}>
          <LogEntryDescription entry={entry} />
          <LogEntryFooter entry={entry} onSetTopic={setTopic} />
        </React.Fragment>
      ))}
    </article>
  );
}
