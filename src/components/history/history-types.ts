export interface HistoryData {
  when: Date;
  entries: {
    description: string;
    work_tags: string[];
    topic_tags: string[];
  }[];
}

export interface HistoryDataFormatted {
  when: Date;
  time: number;
  entries: {
    description: string;
    workTags: string[];
    topicTags: string[];
  }[];
}
