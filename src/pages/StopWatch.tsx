import { useState, useEffect } from "react";
import AppBar from "../components/AppBar";

export default function Stopwatch() {
  const title: string = "StopWatch";
  const [isCounting, setIsCounting] = useState(false);
  const [label, setLabel] = useState("START");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isCounting) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isCounting, counter]);

  // Hours calculation
  const hours = Math.floor(counter / 360000);

  // Minutes calculation
  const minutes = Math.floor((counter % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((counter % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = counter % 100;

  function reset() {
    setCounter(0);
  }

  function handleClick() {
    setIsCounting(!isCounting);
    setLabel(isCounting ? "START" : "STOP");
  }

  return (
    <>
      <h1>{title}</h1>
      <div>
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </div>
      <button onClick={handleClick}>{label}</button>
      <button onClick={reset}>Reset</button>
      <AppBar />
    </>
  );
}
