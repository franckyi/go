import { useState } from "react";
import AppBar from "../components/AppBar";
import { Timer } from "../types/timer";

function CountDown() {
  const title: string = "Count Down";

  const [remainingTime, setRemainingTime] = useState<Timer>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleSet = () => {
    const hours = parseInt(document.getElementById("hours").value, 10);
    const minutes = parseInt(document.getElementById("minutes").value, 10);
    const seconds = parseInt(document.getElementById("seconds").value, 10);

    setRemainingTime({
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <>
      <h1>{title}</h1>
      <input
        type="number"
        name="hours"
        id="hours"
        placeholder="hours"
        min={0}
        max={48}
        defaultValue={0}
        // value={remainingTime.hours}
      />
      <input
        type="number"
        name="minutes"
        id="minutes"
        placeholder="minutes"
        min={0}
        max={59}
        defaultValue={0}
        // value={remainingTime.minutes}
      />
      <input
        type="number"
        name="seconds"
        id="seconds"
        placeholder="seconds"
        min={0}
        max={59}
        defaultValue={0}
        // value={remainingTime.seconds}
      />
      <button onClick={handleSet}>set</button>
      <div>
        {remainingTime.hours} : {remainingTime.minutes} :{" "}
        {remainingTime.seconds}
      </div>
      <AppBar />
    </>
  );
}

export default CountDown;
