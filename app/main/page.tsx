import { Split } from "@/components/split";

export default function Page() {
  return (
    <Split>
      {[
        {
          title: "Info 2",
          information: <div>This is info 2</div>,
        },
        {
          title: "Uptime",
          option: "20 years",
        },
      ]}
    </Split>
  );
}
