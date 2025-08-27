import React from "react";
import "./Clock.css";

/* Today's Day, Date & Time */

export default function Clock() {
  // if (!props.weatherData) {
  //   return <p>Loading date...</p>; // or just return nothing until data exists
  // }

  let now = new Date();
  // let now = props.weatherData.date;

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

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
  let hours = addZero(now.getHours());
  let minutes = addZero(now.getMinutes());

  //   let ufhours = dateData.getHours();
  //   let hours = ufhours >= 10 ? ufhours : `0${ufhours}`;

  //   let ufminutes = dateData.getMinutes();
  //   let minutes = ufminutes >= 10 ? ufminutes : `0${ufminutes}`;

  let thisAmPm = hours >= 12 ? "PM" : "AM";

  return (
    <div className="Date">
      <p id="current-day">{day}</p>
      <p id="date-time">
        <span id="current-date">{date} </span>
        <span id="current-month">{month} </span>
        <span id="current-year">{year}</span>
        <br />
        <span id="current-hour">{hours}</span>:
        <span id="current-minutes">{minutes}</span>
        <span id="current-AmPm"> {thisAmPm}</span>
      </p>
    </div>
  );
}
