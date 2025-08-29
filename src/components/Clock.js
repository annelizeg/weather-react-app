import React from "react";
import "./Clock.css";

/* Today's Day, Date & Time */

export default function Clock() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[now.getDay()];
  let date = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let formattedHours = hours >= 10 ? hours : `0${hours}`;
  let formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  let thisAmPm = hours >= 12 ? "PM" : "AM";

  return (
    <div className="Clock">
      <p className="current-day">{day}</p>
      <p className="date-time">
        <span>{date} </span>
        <span>{month} </span>
        <span>{year}</span>
        <br />
        <span>{formattedHours}</span>:<span>{formattedMinutes}</span>
        <span> {thisAmPm}</span>
      </p>
    </div>
  );
}
