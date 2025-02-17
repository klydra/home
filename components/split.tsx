"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type SplitOption = {
  disabled?: boolean;
  title: string;
  option?: () => React.ReactNode;
  panel?: React.ReactNode | (() => React.ReactNode);
  onSelect?: () => void;
};

export function Split({
  children,
  disabled,
  selectedIndex: _selectedIndex,
  setSelectedIndex: _setSelectedIndex,
  flexLeft = 3,
  flexRight = 2,
}: {
  children: (SplitOption | null)[];
  disabled?: boolean;
  flexLeft?: number;
  flexRight?: number;
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

  const options = children.filter(
    (option) => option !== null && !option.disabled
  );

  const selected = options[selectedIndex];

  useEffect(() => {
    function updateSelected(e: KeyboardEvent) {
      switch (e.key) {
        case "ArrowUp":
          if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
          break;

        case "ArrowDown":
          if (selectedIndex < options.length - 1)
            setSelectedIndex(selectedIndex + 1);
          break;

        case "Enter":
          selected?.onSelect?.();
          break;
      }
    }
    window.addEventListener("keydown", updateSelected);
    return () => window.removeEventListener("keydown", updateSelected);
  }, [selectedIndex]);

  return (
    <div className="flex lg:flex-row flex-col h-full">
      <div className={`flex-[${flexLeft}] p-4`}>
        <table className="table-fixed w-full">
          <tbody>
            {children.map((option, i) => {
              const index = options.findIndex((o) => o === option);

              if (option === null) return <tr key={i} className="h-6"></tr>;

              const _disabled = option.disabled || disabled;

              return (
                <tr
                  autoFocus={_disabled ? undefined : index === 0}
                  onFocus={
                    _disabled ? undefined : () => setSelectedIndex(index)
                  }
                  key={i}
                  onMouseOver={
                    _disabled ? undefined : () => setSelectedIndex(index)
                  }
                  onClick={option.onSelect}
                  className={twMerge(
                    "cursor-pointer",
                    selectedIndex === index && "text-highlight",
                    option.disabled && "opacity-50"
                  )}
                  aria-disabled={_disabled}
                  tabIndex={_disabled ? undefined : index}
                >
                  <td className="p-2 flex flex-col justify-start items-start">
                    <p className="line-clamp-1">{option.title}</p>
                  </td>
                  {option.option && (
                    <td className="p-2">
                      <p className="line-clamp-1">{option.option()}</p>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        className={twMerge(
          `flex-[${flexRight}]`,
          selected?.panel
            ? "lg:border-l-2 lg:border-t-0 border-t-2 lg:border-primary p-8"
            : "lg:w-0 lg:h-auto w-auto h-0 opacity-0 flex-0",
          "transition-all motion-reduce:transition-none"
        )}
      >
        {selected?.panel instanceof Function ? (
          <selected.panel />
        ) : (
          selected?.panel
        )}
      </div>
    </div>
  );
}
