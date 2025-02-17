"use client";

import { Split } from "@/components/split";
import { contentExits } from "@/content/exit";

export default function Page() {
  return (
    <Split>
      {[
        {
          title: "Load Optimized Defaults",
        },
        {
          title: "Save Changes and Exit",
        },
        {
          title: "Discard Changes and Exit",
        },
        null,
        null,
        {
          title: "Secure Boot",
          disabled: true,
          option: () => "Enabled",
        },
        {
          title: "Fast Boot",
          disabled: true,
          option: () => "Enabled",
        },
        null,
        null,
        null,
        {
          title: "Direct Boot",
          disabled: true,
        },
        ...contentExits.map((contact, index) => ({
          title: `OPT-${index}: ${contact.title}`,
          option: () => contact.username,
          panel: () => (
            <div>
              <img src={`/assets/links/${contact.id}_pixelated.png`} />
              <h1 className="text-highlight text-3xl mt-8">
                {contact.username}
              </h1>
              <p className="mt-3">
                <a className="text-xl" href={contact.link.url}>
                  {contact.link.text}
                </a>
              </p>
            </div>
          ),
          onSelect: () => window.open(contact.link.url, "_blank"),
        })),
      ]}
    </Split>
  );
}
