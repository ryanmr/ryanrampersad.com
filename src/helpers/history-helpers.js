import moment from "moment";
import _ from "lodash";

export function collectLogs(workLogData) {
  const source = workLogData;
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

export function shouldDisplayEntry(entry, selectedWorkTag, selectedTopicTag) {
  const hasWorkTag = entry.work_tags.includes(selectedWorkTag);
  const hasTopicTag = entry.topic_tags.includes(selectedTopicTag);
  const blankTopicTag = selectedTopicTag === "";
  const blankWorkTag = selectedWorkTag === "";
  return (hasWorkTag || blankWorkTag) && (hasTopicTag || blankTopicTag);
}

export function getSelectedLogs(logs, selectedWorkTag, selectedTopicTag) {
  const selection = logs.map((log) => {
    const { entries } = log;
    const kept = entries.filter((entry) =>
      shouldDisplayEntry(entry, selectedWorkTag, selectedTopicTag),
    );

    return kept.length > 0 ? { ...log, entries: kept } : null;
  });
  const filtered = selection.filter((a) => a);
  return filtered;
}

export function getFilteredLogs(logs) {
  return logs;
}

export function getSortedLogs(logs, selectedSort) {
  const sorted = [...logs];
  sorted.sort((a, b) =>
    selectedSort === "asc" ? a.time - b.time : b.time - a.time,
  );
  return sorted;
}

export function getLogs(logs, config) {
  const selectedLogs = getSelectedLogs(
    logs,
    config.selectedWorkTag,
    config.selectedTopicTag,
  );
  const filteredLogs = getFilteredLogs(selectedLogs);
  const sortedLogs = getSortedLogs(filteredLogs, config.selectedSort);
  return sortedLogs;
}

export function getAllWorkTags(logs) {
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

export function getAllTopicTags(logs) {
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
