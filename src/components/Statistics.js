import React from "react";
import "./Statistics.css";

/* Today's Weather Statistics */

export default function Statistics(props) {
  if (!props.weatherData) {
    return <p>Loading statistics...</p>; // return loading until data exists
  }

  return (
    <div className="Statistics">
      <h3>More about today:</h3>
      <ul className="stats-list">
        <li className="stats-list-item">
          Humidity: {props.weatherData.humidity}%
        </li>
        <li className="stats-list-item">
          Wind Speed: {props.weatherData.wind} km/hr
        </li>
        {/* <li className="stats-list-item">Precipitation: --mm</li>  */}
        {/* <li className="stats-list-item">UV Index: --</li> */}
      </ul>
    </div>
  );
}
