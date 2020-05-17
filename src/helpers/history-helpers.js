import flatten from "lodash/flatten";
import uniq from "lodash/uniq";
import pickBy from "lodash/pickBy";
import { parseISO } from "date-fns";

export function collectLogs(workLogData) {
  const source = workLogData;
  const enhancedNodes = source.map((node) => {
    const when = node.when;
    return {
      ...node,
      entries: node.entries.map((entry) => ({ ...entry, when })),
      time: parseISO(node.when).getTime(),
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
  const entries = flatten(logs.map((log) => log.entries));
  const allTags = flatten(entries.map((entry) => entry.work_tags));
  const uniques = uniq(allTags);
  const sorted = [...uniques].sort();
  return sorted;
}

export function getAllTopicTags(logs) {
  const entries = flatten(logs.map((log) => log.entries));
  const allTags = flatten(entries.map((entry) => entry.topic_tags));
  const weights = allTags.reduce(
    (acc, tag) => ({ ...acc, [tag]: acc[tag] + 1 || 1 }),
    {},
  );
  const threshold = pickBy(weights, (tag) => tag > 2);
  const tags = Object.keys(threshold);
  const sorted = [...tags].sort();
  return sorted;
}
