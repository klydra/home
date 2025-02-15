"use client";

import { SCALE_CH_PX } from "@/app/layout";
import { ContentPages } from "@/content/pages";
import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

const BANNER_CHAR_DURATION_SECONDS = 2;
const BANNER_TEXT = "klydra.dev";

export function Banner() {
  const router = useRouter();
  const pathname = usePathname();
  const [width, setWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const chars = width ? Math.ceil(width / SCALE_CH_PX) : 0;
  const offsets = useMemo(
    () => Array.from({ length: chars }, (_, i) => i),
    [chars]
  );
  const padding = (chars - BANNER_TEXT.length) / 2;

  return (
    <div className="w-full">
      <div className="relative h-6 w-full max-w-full overflow-hidden">
        <div className="w-full flex flex-row h-full bg-primary">
          {offsets.map((index) => {
            const char = BANNER_TEXT[index - padding] || null;
            const offset = (index / (chars - 1)) * BANNER_CHAR_DURATION_SECONDS;

            return (
              <div
                key={offset}
                className="h-full flex flex-col justify-center items-center"
                style={{
                  width: `${SCALE_CH_PX}px`,
                  animation: "banner",
                  animationDelay: `${offset}s`,
                  animationDuration: "5s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear",
                }}
              >
                {char && (
                  <span
                    className="invert text-secondary"
                    style={{ mixBlendMode: "difference" }}
                  >
                    {char}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-6 w-full"></div>
      <div className="w-full flex gap-8 mx-2 overflow-auto">
        {ContentPages.map((page) => {
          const selected = pathname.startsWith(`/${page.id}`);

          return (
            <button
              className={twMerge(
                "flex flex-row items-center hover:underline focus:underline focus:outline-none px-[1ch] h-6",
                selected && "bg-primary text-secondary h-8 pb-2"
              )}
              key={page.id}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/${page.id}`);
              }}
            >
              <span>{page.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
