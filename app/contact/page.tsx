"use client";

import { Split } from "@/components/split";
import { contentContacts } from "@/content/contact";

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
          option: () => <p>Enabled</p>,
        },
        {
          title: "Fast Boot",
          disabled: true,
          option: () => <p>Enabled</p>,
        },
        null,
        null,
        null,
        {
          title: "Direct Boot",
          disabled: true,
        },
        ...contentContacts.map((contact, index) => ({
          title: `OPT-${index}: ${contact.title}`,
          option: () => <p>{contact.username}</p>,
          panel: () => (
            <div>
              <img
                src={`/assets/links/${contact.id}_pixelated.png`}
                alt={contact.id}
              />
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
        })),
      ]}
    </Split>
  );
}
