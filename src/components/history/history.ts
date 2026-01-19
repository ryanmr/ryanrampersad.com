import fsp from "node:fs/promises";
import yaml from "js-yaml";
import type { HistoryData, HistoryDataFormatted } from "./history-types";

const HISTORY_DATA_DIR = "./src/data/history";

export type Sections = HistoryDataFormatted[];

export interface YearSummary {
  year: number;
  entryCount: number;
}

/**
 * Get list of available years from the history data directory
 */
export async function getAvailableYears(): Promise<number[]> {
  const files = await fsp.readdir(HISTORY_DATA_DIR);
  const years = files
    .filter((f) => f.endsWith(".yml"))
    .map((f) => parseInt(f.replace(".yml", ""), 10))
    .filter((y) => !isNaN(y))
    .sort((a, b) => b - a); // Descending order (most recent first)
  return years;
}

/**
 * Load history data for a specific year
 */
export async function loadYearData(year: number): Promise<HistoryData[]> {
  const filePath = `${HISTORY_DATA_DIR}/${year}.yml`;
  const content = await fsp.readFile(filePath, { encoding: "utf-8" });
  const data = yaml.load(content) as HistoryData[];
  return data;
}

/**
 * Get summaries of all years with entry counts
 */
export async function getYearSummaries(): Promise<YearSummary[]> {
  const years = await getAvailableYears();
  const summaries: YearSummary[] = [];

  for (const year of years) {
    const data = await loadYearData(year);
    const entryCount = data.reduce((sum, month) => sum + month.entries.length, 0);
    summaries.push({ year, entryCount });
  }

  return summaries;
}

/**
 * Get the current year (for determining which year to show on /history)
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Transform raw history data into formatted sections for display
 */
export function getSections(source: HistoryData[]): Sections {
  const sections = source.map((node) => {
    const when = node.when;
    const formatted: HistoryDataFormatted = {
      ...node,
      entries: node.entries.map((entry) => {
        const description = entry.description;
        const workTags = entry.work_tags;
        const topicTags = entry.topic_tags;

        return { when, description, workTags, topicTags };
      }),
      time: new Date(node.when).getTime(),
    };
    return formatted;
  });

  return sections;
}
