import { format, getMonth } from "date-fns";
import { useState } from "react";
import showdown from "showdown";

const converter = new showdown.Converter();

import type { Sections } from "./history";

interface Props {
  data: Sections;
}

export function Example({ data }: Props) {
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
                        className="[&_ul]:ml-4 [&_ul]:list-outside [&_ul]:list-disc md:[&_ul]:ml-8 [&_ul_ul]:list-[circle]"
                        dangerouslySetInnerHTML={{
                          __html: converter.makeHtml(entry.description),
                        }}
                      ></div>
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
