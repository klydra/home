"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type SplitOption = {
  title: string;
  option?: string;
  panel?: React.ReactNode;
  onSelect?: () => void;
};

export function Split({
  children,
  disabled,
  selectedIndex: _selectedIndex,
  setSelectedIndex: _setSelectedIndex,
}: {
  children: SplitOption[];
  disabled?: boolean;
} & (
  | {
      selectedIndex: number;
      setSelectedIndex: (index: number) => void;
    }
  | {
      selectedIndex?: undefined;
      setSelectedIndex?: undefined;
    }
)) {
  const [selectedIndex, setSelectedIndex] =
    _selectedIndex !== undefined && _setSelectedIndex !== undefined
      ? [_selectedIndex, _setSelectedIndex]
      : useState<number>(0);
  const selected = children[selectedIndex];

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

        case "Enter":
          selected?.onSelect?.();
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
                autoFocus={disabled ? undefined : index === 0}
                onFocus={() => setSelectedIndex(index)}
                key={index}
                onMouseOver={() => setSelectedIndex(index)}
                onClick={option.onSelect}
                className={twMerge(
                  "cursor-pointer",
                  selectedIndex === index && "text-highlight"
                )}
                aria-disabled={disabled}
                tabIndex={disabled ? undefined : index}
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
          selected?.panel
            ? "flex-[3] lg:border-l-2 lg:border-t-0 border-t-2 lg:border-primary p-8"
            : "lg:w-0 lg:h-auto w-auto h-0 opacity-0",
          "transition-all motion-reduce:transition-none"
        )}
      >
        {selected?.panel}
      </div>
    </div>
  );
}
