import React from "react";

export default function Timer() {
  const [timer, setTimer] = React.useState(0);
  const [increment, setIncrement] = React.useState(true);

  React.useEffect(() => {
    let timerId = increment
      ? setInterval(() => {
          setTimer((time) => time + 1);
        }, 1000)
      : setInterval(() => {
          setTimer((time) => time - 1);
        }, 1000);
    return () => clearInterval(timerId);
  }, [increment]);

  React.useEffect(() => {
    if (timer === 10) {
      setIncrement(false);
    }
    if (timer === 0) {
      setIncrement(true);
    }
  }, [timer]);

  const stopTimer = () => {
    // clearInterval(interval.current);
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>Timer</h1>
      <p>{timer}</p>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
