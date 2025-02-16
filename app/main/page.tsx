import { Split } from "@/components/split";

export default function Page() {
  return (
    <Split>
      {[
        {
          title: "Info 2",
          panel: <div></div>,
        },
        {
          title: "Uptime",
          option: "20 years",
        },
      ]}
    </Split>
  );
}
