import { parseISO } from "date-fns";

export interface Entry {
  description: string;
  workTags: string[];
  topicTags: string[];
}

export interface Section {
  when: number;
  entries: Entry[];
}

export type Sections = Section[];

export function getSections(workLogData: any): Sections {
  const source = workLogData;
  const sections = source.map((node: any) => {
    const when = node.when;

    return {
      ...node,
      entries: node.entries.map((entry: any) => {
        const description = entry.description;
        const workTags = entry.work_tags;
        const topicTags = entry.topic_tags;

        return { when, description, workTags, topicTags };
      }),
      time: parseISO(node.when).getTime(),
    };
  });

  // dangerously asset the type
  return sections as Sections;
}

function optimize() {
  return;
}
