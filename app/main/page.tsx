import { Split } from "@/components/split";

export default function Page() {
  return (
    <Split>
      {[
        { title: "Info", option: "test", information: <div>This is info</div> },
        {
          title: "Info 2",
          option: "test 2",
          information: <div>This is info 2</div>,
        },
      ]}
    </Split>
  );
}
