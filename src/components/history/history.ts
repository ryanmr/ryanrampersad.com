import { parseISO } from "date-fns";
import type { HistoryData, HistoryDataFormatted } from "./history-types";

export function getSections(source: HistoryData[]) {
  const sections = source.map((node) => {
    const when = node.when;
    const formatted: HistoryDataFormatted = {
      ...node,
      entries: node.entries.map((entry: any) => {
        const description = entry.description;
        const workTags = entry.work_tags;
        const topicTags = entry.topic_tags;

        return { when, description, workTags, topicTags };
      }),
      time: node.when.getTime(),
    };
    return formatted;
  });

  return sections;
}

function optimize() {
  return;
}
