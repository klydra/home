import { Split } from "@/components/split";

export default function Page() {
  return (
    <Split>
      {[
        {
          title: "Info 2",
          information: (
            <div>
              <img
                src="/assets/technologies/ag.png"
                style={{
                  imageRendering: "pixelated",
                  width: "1024px",
                }}
              />
            </div>
          ),
        },
        {
          title: "Uptime",
          option: "20 years",
        },
      ]}
    </Split>
  );
}
