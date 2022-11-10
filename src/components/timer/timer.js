import React from "react";
import "./timer.css";

const Timer = () => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  setInterval(() => {
    let diff = Date.parse("Nov 11, 2022 11:00:00") - Date.now();
    const days = Math.floor(diff / DAY);
    diff -= days * DAY;
    const hours = Math.floor(diff / HOUR);
    diff -= hours * HOUR;
    const mins = Math.floor(diff / MINUTE);
    diff -= mins * MINUTE;
    const secs = Math.floor(diff / SECOND);
    document.querySelector("#timer").innerHTML = `
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${secs}<span>Seconds</span></div>`;
  }, SECOND);
  return <div id="timer"></div>;
};

export default Timer;
