import React from "react";
import "./Statistics.css";

{
  /* Today's Weather Statistics */
}

export default function Statistics() {
  return (
    <div className="Statistics">
      <h3>More about today:</h3>
      <ul className="stats-list">
        <li className="stats-list-item">
          <div className="precipitation-block">
            Precipitation: <span id="today-precip-type">0.3mm</span>
            <div>
              <span id="today-precip-chance"></span>
              <span id="today-precip-volume"></span>
            </div>
          </div>
        </li>
        <li className="stats-list-item">
          Humidity: <span id="today-humidity"></span>61%
        </li>
        <li className="stats-list-item">
          Wind Speed: <span id="today-windspeed"></span> 4 km/hr
        </li>
        <li className="stats-list-item">
          UV Index: <span id="today-UV-index">1</span>
          <span id="today-UV-level"></span>
        </li>
      </ul>
    </div>
  );
}
