"use client";

import { Split } from "@/components/split";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Page() {
  return (
    <Split>
      {[
        {
          title: "Info",
          panel: () => {
            const [avatar, setAvatar] = useState<boolean>(false);

            return (
              <div>
                <div
                  className="w-full max-w-96 relative"
                  onMouseEnter={() => setAvatar(true)}
                  onMouseLeave={() => setAvatar(false)}
                  onFocus={() => setAvatar(true)}
                  onBlur={() => setAvatar(false)}
                >
                  <img className="w-full" src="/assets/avatar_pixelated.png" />
                  <div
                    className={twMerge(
                      "absolute bottom-2 -right-4 p-2 bg-secondary text-sm cursor-default transition-all",
                      "opacity-100 transition-opacity",
                      !avatar && "opacity-0"
                    )}
                  >
                    my beloved cat Findus 😺
                  </div>
                </div>
                <h1 className="text-highlight text-3xl mt-8">Jan Klinge</h1>
                <h3 className="text-xl mt-2">@klydra</h3>
                <p className="text-sm mt-20">
                  Use <span className="text-highlight">[Arrow Keys]</span>,{" "}
                  <span className="text-highlight">[Enter]</span> and{" "}
                  <span className="text-highlight">[Escape]</span>, or{" "}
                  <span className="text-highlight">[Mouse]</span> to navigate.
                </p>
                <p className="text-sm mt-3">Enjoy your stay!</p>
              </div>
            );
          },
        },
        {
          title: "Uptime",
          option: () => <p>20 years</p>,
        },
        {
          title: "Current Time",
          option: () => {
            const [time, setTime] = useState<Date>(new Date());

            useEffect(() => {
              const interval = setInterval(() => {
                setTime(new Date());
              }, 1000);
              return () => clearInterval(interval);
            }, []);

            return (
              <p>
                {time.toLocaleString("de-DE", {
                  timeZone: "Europe/Berlin",
                })}
                , Europe/Germany
              </p>
            );
          },
        },
      ]}
    </Split>
  );
}
