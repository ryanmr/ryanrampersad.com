import { format } from "date-fns";
import showdown from "showdown";

const converter = new showdown.Converter();

import type { Sections } from "./history";

interface Props {
  data: Sections;
}

export function HistoryDisplay({ data }: Props) {
  return (
    <>
      <div className="flex flex-col gap-16">
        {data.map((section) => {
          return (
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">
                  {format(new Date(section.when), "LLLL")}
                </h2>
                <time
                  className="block font-mono text-sm"
                  dateTime={new Date(section.when).toISOString()}
                >
                  {format(new Date(section.when), "yyyy-MM")}
                </time>
              </div>
              <div className="flex flex-col gap-4">
                {section.entries.map((entry) => {
                  return (
                    <>
                      <div
                        className="[&_ul]:ml-4 [&_ul]:list-outside [&_ul]:list-disc md:[&_ul]:ml-8 [&_ul_ul]:list-[circle] [&_code]:bg-stone-700 [&_code]:px-1 [&_code]:py-1 [&_code]:font-mono"
                        dangerouslySetInnerHTML={{
                          __html: converter.makeHtml(entry.description),
                        }}
                      ></div>

                      <div>
                        <aside className="flex justify-end">
                          <ul className="flex gap-2">
                            {entry.topicTags.map((tag) => {
                              return (
                                <li key={tag}>
                                  <button className="rounded-sm border border-t-transparent border-r-transparent border-l-transparent border-b-stone-400 px-2 py-1 text-xs transition-all duration-500 ease-out hover:border-white">
                                    {tag}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </aside>
                      </div>
                    </>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
