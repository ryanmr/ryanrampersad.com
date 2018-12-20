import React from "react";
import _ from "lodash";
import showdown from "showdown";
import moment from "moment";
import WorkLogData from "../data/work-log.yaml";
import GeneralLayout from "../components/layout/GeneralLayout";
import Helm from "../components/shared/Helm";

const showdownConverter = new showdown.Converter();

class WorkLog extends React.Component {
  initialState = {
    selectedWorkTag: "",
    selectedTopicTag: "",
    selectSort: "desc",
    showControls: false,
    showWeekNumbers: false,
  };

  constructor(props) {
    super(props);
    this.state = { ...this.initialState };
  }

  collectLogs() {
    const source = WorkLogData;
    const enhancedNodes = source.map((node) => {
      const when = node.when;
      return {
        ...node,
        entries: node.entries.map((entry) => ({ ...entry, when })),
        time: moment(node.when).valueOf(),
      };
    });
    return enhancedNodes;
  }

  renderLogHeader(log) {
    const monthDisplay = moment(log.when).format("MMMM");
    const dateFragmentDisplay = moment(log.when).format("YYYY-MM");
    const weekNumber = moment(log.when).diff(moment("2016-03-31"), "weeks");
    return (
      <div className="work-log header">
        <h3 className="work-log title month is-5">{monthDisplay}</h3>

        <h4 className="work-log title date is-6">
          {dateFragmentDisplay} &nbsp;
          {this.state.showWeekNumbers && <span>&ndash; Week {weekNumber}</span>}
        </h4>
      </div>
    );
  }

  renderEntryTrailer(entry) {
    const tags = entry.topic_tags;
    return (
      <aside className="work-log topic-tags">
        {tags.map((tag) => (
          <span
            className="work-log topic-tag"
            onClick={(event) => {
              this.setState({
                selectedTopicTag: tag,
                showControls: true,
              });
            }}
            key={tag}>
            {tag}
          </span>
        ))}
      </aside>
    );
  }

  getAllWorkTags(logs) {
    const uniqueWorkTags = _(logs)
      .map((log) => log.entries)
      .flatten()
      .map((entry) => entry.work_tags)
      .flatten()
      .uniq()
      .value();
    const sorted = [...uniqueWorkTags];
    sorted.sort();
    return sorted;
  }

  getAllTags(logs) {
    const tags = _.chain(logs)
      .map((log) => log.entries)
      .flatten()
      .map((entry) => entry.topic_tags)
      .flatten()
      .reduce((acc, tag) => ({ ...acc, [tag]: acc[tag] + 1 || 1 }), {})
      .pickBy((tag) => tag > 2)
      .keys()
      .value();
    const sorted = [...tags];
    sorted.sort();
    return sorted;
  }

  renderWorkTagSelector(logs) {
    const tags = this.getAllWorkTags(logs);
    return (
      <div className="field">
        <label id="engagment-select" className="label">
          Engagment
        </label>
        <div className="control">
          <select
            id="engagement-select"
            className="select"
            value={this.state.selectedWorkTag}
            onChange={(event) => {
              this.setState({
                selectedWorkTag: event.target.value,
              });
            }}>
            <option value="">All</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  renderTagsSelector(logs) {
    const tags = this.getAllTags(logs);
    return (
      <div className="field">
        <label id="topic-tags-select" className="label">
          Topic
        </label>
        <div className="control">
          <select
            id="topic-tags-select"
            className="select"
            value={this.state.selectedTopicTag}
            onChange={(event) => {
              this.setState({
                selectedTopicTag: event.target.value,
              });
            }}>
            <option value="">All</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  renderSortSelector() {
    return (
      <div className="field">
        <label id="sorting-select" className="label">
          Sort:
        </label>
        <div className="control">
          <select
            id="sorting-select"
            className="select"
            value={this.state.selectSort}
            onChange={(event) => {
              this.setState({
                selectSort: event.target.value,
              });
            }}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>
    );
  }

  renderShowWeekNumbers() {
    return (
      <div className="field">
        <label id="topic-tags-select" className="label">
          Show Week Numbers:
        </label>
        <div className="control">
          <input
            type="checkbox"
            id="show-week-numbers"
            value={this.state.showWeekNumbers}
            onChange={() => {
              console.log(this.state.showWeekNumbers);
              this.setState((p) => ({
                showWeekNumbers: !p.showWeekNumbers,
              }));
            }}
          />
        </div>
      </div>
    );
  }

  shouldDisplayEntry(entry) {
    const { selectedWorkTag, selectedTopicTag } = this.state;
    const hasWorkTag = entry.work_tags.includes(selectedWorkTag);
    const hasTopicTag = entry.topic_tags.includes(selectedTopicTag);
    const blankTopicTag = selectedTopicTag === "";
    const blankWorkTag = selectedWorkTag === "";
    return (hasWorkTag || blankWorkTag) && (hasTopicTag || blankTopicTag);
  }

  getSelectedLogs(logs) {
    const enhancedLog = _(logs)
      .map((log) => {
        const entries = log.entries;
        const markedEntries = _(entries)
          .map((entry) => {
            return {
              ...entry,
              display: this.shouldDisplayEntry(entry),
            };
          })
          .value();
        const markedLog = markedEntries.reduce(
          (acc, entry) => acc || entry.display,
          false,
        );
        return { ...log, entries: markedEntries, display: markedLog };
      })
      .value();
    return enhancedLog;
  }

  getFilteredLogs(selectedLogs) {
    const firstPass = selectedLogs.filter((log) => log.display);
    const secondPass = firstPass.map((log) => ({
      ...log,
      entries: log.entries.filter((entry) => entry.display),
    }));
    return secondPass;
  }

  getSortedLogs(logs) {
    const dir = this.state.selectSort;
    const sorted = [...logs];
    sorted.sort((a, b) => (dir === "asc" ? a.time - b.time : b.time - a.time));
    return sorted;
  }

  render() {
    const ___logs = this.collectLogs();
    const __logs = this.getSelectedLogs(___logs);
    const _logs = this.getFilteredLogs(__logs);
    const logs = this.getSortedLogs(_logs);
    return (
      <GeneralLayout>
        <Helm>
          <title>Working History</title>
        </Helm>
        <div className="columns is-centered" style={{ padding: "0 1rem" }}>
          <div className="column is-three-fifths">
            <div className="work-log page-header has-text-centered">
              <h1
                className="title is-3 "
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({ showControls: !this.state.showControls });
                }}>
                History
              </h1>
              <p>This is my recent work history, focused on notable works.</p>
            </div>

            {this.state.showControls && (
              <div className="columns">
                <div className="column">
                  {this.renderWorkTagSelector(__logs)}
                </div>
                <div className="column">{this.renderTagsSelector(__logs)}</div>
                <div className="column">{this.renderSortSelector()}</div>
                <div className="column">{this.renderShowWeekNumbers()}</div>
              </div>
            )}

            {logs.length > 0 ? (
              <div>
                {logs.map((log) => (
                  <div key={log.when}>
                    {log.display && (
                      <div>
                        {this.renderLogHeader(log)}

                        <div className="work-log entries">
                          {log.entries.map((entry, i) => (
                            <div key={i} className="work-log entry">
                              {entry.display && (
                                <div>
                                  <div
                                    className="work-log render-content"
                                    dangerouslySetInnerHTML={{
                                      __html: showdownConverter.makeHtml(
                                        entry.description,
                                      ),
                                    }}
                                  />
                                  {this.renderEntryTrailer(entry)}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div>No results</div>
            )}
          </div>
        </div>
      </GeneralLayout>
    );
  }
}

export default WorkLog;
