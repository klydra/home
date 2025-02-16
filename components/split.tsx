"use client";

import React, { useEffect, useImperativeHandle, useState } from "react";
import { twMerge } from "tailwind-merge";

type SplitOption = {
  title: string;
  option?: string;
  information?: React.ReactNode;
};

export interface SplitRef {
  setSelectedIndex: (index: number) => void;
  selectedIndex: number;
  selected: SplitOption | null;
}

export function Split({
  children,
  ref,
}: {
  children: SplitOption[];
  ref?: React.Ref<SplitRef>;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selected = children[selectedIndex];

  useImperativeHandle(ref, () => ({
    setSelectedIndex,
    selectedIndex,
    selected,
  }));

  useEffect(() => {
    function updateSelected(e: KeyboardEvent) {
      switch (e.key) {
        case "ArrowUp":
          if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
          break;

        case "ArrowDown":
          if (selectedIndex < children.length - 1)
            setSelectedIndex(selectedIndex + 1);
          break;
      }
    }
    window.addEventListener("keydown", updateSelected), false;
    return () => window.removeEventListener("keydown", updateSelected);
  }, [selectedIndex]);

  return (
    <div className="flex lg:flex-row flex-col h-full">
      <div className="flex-[2] p-4">
        <table className="table-fixed w-full">
          <tbody>
            {children.map((option, index) => (
              <tr
                autoFocus={index === 0}
                onFocus={() => setSelectedIndex(index)}
                key={index}
                onMouseOver={() => setSelectedIndex(index)}
                className={twMerge(
                  "cursor-pointer",
                  selectedIndex === index && "text-highlight"
                )}
                tabIndex={index}
              >
                <td className="p-2">{option.title}</td>
                <td className="p-2">{option.option}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className={twMerge(
          selected?.information
            ? "flex-[3] lg:border-l-2 lg:border-t-0 border-t-2 lg:border-primary p-4 "
            : "lg:w-0 lg:h-auto w-auto h-0 opacity-0",
          "transition-all motion-reduce:transition-none"
        )}
      >
        {selected?.information}
      </div>
    </div>
  );
}
