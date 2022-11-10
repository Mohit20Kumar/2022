import React, { useState } from "react";
import "./timer.css";

const Timer = () => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const [isActive, setIsActive] = useState(false);
  const [alive, setAlive] = useState(true);

  if (Date.parse("Nov 11, 2022 12:00:00") - Date.now() > 0) {
    // setIsActive(false);
  }
  setInterval(() => {
    if (alive) {
      let diff = Date.parse("Nov 11, 2022 12:00:00") - Date.now();
      if (diff <= 0) {
        setAlive(false);
        document.querySelector("#hidden").innerHTML = ``;
      }
      const days = Math.floor(diff / DAY);
      diff -= days * DAY;
      const hours = Math.floor(diff / HOUR);
      diff -= hours * HOUR;
      const mins = Math.floor(diff / MINUTE);
      diff -= mins * MINUTE;
      const secs = Math.floor(diff / SECOND);
      if (hours < 1 && mins < 1 && secs < 1) {
        setIsActive(true);
        setAlive(false);
        document.querySelector("#timer").innerHTML = ``;
      } else {
        console.log(alive);
        document.querySelector("#timer").innerHTML = `
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${secs}<span>Seconds</span></div>`;
      }
    }
  }, SECOND);

  return (
    <>
      <div id={`${alive ? "timer" : "hidden"}`}></div>;
      <div className={`${isActive ? "active" : "inactive"}`}>
        <div className="solid form-box">
          <h1>THE HACK HAS BEGUN</h1>
        </div>
      </div>
    </>
  );
};

export default Timer;
