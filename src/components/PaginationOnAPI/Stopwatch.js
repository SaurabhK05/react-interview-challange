import React from "react";

export default function Stopwatch() {
  const [counter, setCounter] = React.useState(0);
  const [timerFlag, setTimerFlag] = React.useState(false);
  const interval = React.useRef(0);

  const startTimer = () => {
    if (!timerFlag) {
      interval.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
      // console.log(interval);
      setTimerFlag((prev) => !prev);
    } else {
      console.log(interval);
      setTimerFlag((prev) => !prev);
      clearInterval(interval.current);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Stopwatch</h1>
      <p>{counter}</p>
      <button onClick={startTimer}>{!timerFlag ? "Start" : "Stop"}</button>
      <button
        onClick={() => {
          setCounter(0);
          setTimerFlag(false);
          clearInterval(interval.current);
        }}
      >
        Reset
      </button>
    </div>
  );
}
