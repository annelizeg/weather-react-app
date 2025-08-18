import React from "react";
import "./Date.css";

{
  /* Today's Day, Date & Time */
}

export default function Date() {
  return (
    <div className="Date">
      <p id="current-day">Monday</p>
      <p id="date-time">
        <span id="current-date">28 </span>
        <span id="current-month">July </span>
        <span id="current-year">2025</span>
        <br />
        <span id="current-hour">15</span>:<span id="current-minutes">31</span>
        <span id="current-AmPm"> PM</span>
      </p>
    </div>
  );
}
