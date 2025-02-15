export function Banner() {
  return (
    <div className="w-full bg-primary">
      <div className="relative h-6 w-full max-w-full overflow-hidden">
        <div
          className="w-[300%] flex flex-row h-full"
          style={{
            animation: "banner",
            animationDuration: "5s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          <div className="flex-[15]"></div>
          {Array.from({ length: 25 }, (_, i) => i * 4).map((factor, index) => (
            <div
              key={index}
              className="flex-1 bg-secondary"
              style={{ opacity: `${factor}%` }}
            ></div>
          ))}
          <div className="flex-[15] bg-secondary"></div>
          {Array.from({ length: 25 }, (_, i) => 100 - i * 4).map(
            (factor, index) => (
              <div
                key={index}
                className="flex-1 bg-secondary"
                style={{ opacity: `${factor}%` }}
              ></div>
            )
          )}
          <div className="flex-[15]"></div>
          {Array.from({ length: 25 }, (_, i) => i * 4).map((factor, index) => (
            <div
              key={index}
              className="flex-1 bg-secondary"
              style={{ opacity: `${factor}%` }}
            ></div>
          ))}
        </div>
        <div className="-mt-6 w-full h-full flex flex-row justify-center items-center">
          <p className="font-bold" style={{ mixBlendMode: "difference" }}>
            klydra.dev
          </p>
        </div>
      </div>
      <div className="h-6 w-full bg-secondary opacity-20"></div>
      <div className="h-6 w-full"></div>
    </div>
  );
}
