"use client";

import { Split } from "@/components/split";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Page() {
  return (
    <Split>
      {[
        {
          title: "Site Info",
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
          title: "Site Vendor",
          option: () => "Jan Klinge (@klydra)",
        },
        {
          title: "Uptime",
          option: () => "20 years",
        },
        {
          title: "Occupation",
          option: () => (
            <span className="line-clamp-2">
              Working Student
              <br />
              Software Engineering
            </span>
          ),
        },
        null,
        null,
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
              <span className="min-w-fit line-clamp-2">
                {time.toLocaleString("de-DE", {
                  timeZone: "Europe/Berlin",
                })}
                <br />
                Europe/Germany
              </span>
            );
          },
        },
        {
          title: "Current Version",
          option: () => "N/A",
        },
        null,
        null,
        null,
        { title: "System Information", disabled: true },
        {
          title: "Processor",
          option: () => (
            <span className="line-clamp-2">
              AMD™ Ryzen™ 9 5900X
              <br />
              12 Cores / 24 Threads
            </span>
          ),
        },
        {
          title: "System Memory",
          option: () => "63.9 GB DDR4 @ 2933 MT/s",
        },
        {
          title: "System Graphics",
          option: () => "Nvidia™ GeForce™ RTX 3090 24GB",
        },
        null,
        null,
        {
          title: "Network Information",
          disabled: true,
        },
        {
          title: "Gateway",
          option: () => "opnsense.catcoo.net",
        },
        {
          title: "System Hostname",
          option: () => "catstation.catcoo.net",
        },
        null,
        null,
        { title: "Attached Storage", disabled: true },
        {
          title: "M.2-0: Samsung SSD 990 PRO NVMe",
          option: () => "1.20 TB free / 1.81 TB total",
        },
        {
          title: "M.2-1: WD Black SN770 NVMe",
          option: () => "320 GB free / 465 GB total",
        },
        {
          title: "M.2-2: Samsung SSD 980 EVO",
          option: () => "334 GB free / 931 GB total",
        },
        {
          title: "SATA-0: SanDisk PLUS SSD",
          option: () => "89 GB free / 476 GB total",
        },
        {
          title: "SATA-1: ASUS BW-16D1HT",
          option: () => "BluRay 4K Disk Drive (modified)",
        },
        {
          title: "LAN-0: \\\\truenas.catcoo.net\\chongus",
          option: () => "8.85 TB free / 14.4 TB total",
        },
        null,
        null,
        { title: "Attached HID", disabled: true },
        {
          title: "HID-0: Keyboard",
          option: () => "Keychron K2",
        },
        {
          title: "HID-1: Mouse",
          option: () => "Logitech MX Master 3S",
        },
        null,
        null,
        {
          title: "Access Level",
          disabled: true,
          option: () => "Administrator",
        },
      ]}
    </Split>
  );
}
