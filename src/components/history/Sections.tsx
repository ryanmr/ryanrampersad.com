import { format, getMonth } from "date-fns";
import React, { PropsWithChildren, useContext, useState } from "react";
import showdown from "showdown";

const converter = new showdown.Converter();

import type { Sections } from "./history";

interface Props {
  data: Sections;
}

interface HistoryCtx {
  selectedTag: string;
  search: string;
  data: Sections;
}

const HistoryContext = React.createContext<HistoryCtx | undefined>(undefined);
interface HistoryProviderProps extends PropsWithChildren {
  data: Sections;
}
function HistoryProvider({ data, children }: HistoryProviderProps) {
  const [selectedTag, setSelectedTag] = useState("");
  const [search, setSearch] = useState("");

  const revisedData = data;

  return (
    <HistoryContext.Provider value={{ data: revisedData, selectedTag, search }}>
      {children}
    </HistoryContext.Provider>
  );
}

function useHistoryContext() {
  const context = useContext(HistoryContext);
  if (context === undefined) {
    console.log("??", context);
    throw new Error("useHistoryContext must be within HistoryProvider");
  }

  return context;
}

export function Display({ data }: Props) {
  return (
    <HistoryProvider data={data}>
      <Example />
    </HistoryProvider>
  );
}

export function Example() {
  const { data } = useHistoryContext();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-center text-3xl font-bold">History</h1>
        <button className="rounded-sm border border-transparent bg-black bg-opacity-50 px-3 py-2 text-stone-200 transition-all duration-500 ease-out hover:border-white hover:text-white">
          search & filter
        </button>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <label>Tag</label>
          <select className="border-2 border-white bg-black px-2 py-1">
            <option>hi</option>
            <option>hi</option>
            <option>hi</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label>Search</label>
          <input className="border-2 border-white bg-black px-2 py-1" />
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <div></div>
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
