import React from "react";
import "./Summary.css";

import Park1 from "./images/Park1.svg";
import weatherIcon from "./images/overcast.png";

/* Today's Weather Summary */

export default function Summary(props) {
  if (!props.data) {
    return <p>Loading summary...</p>; // or just return nothing until data exists
  }

  return (
    <div className="Summary">
      <h2>
        Currently in <br />
        <span className="city" id="display-city">
          {props.data.city}
        </span>
      </h2>
      <div className="row gx-0 justify-content-center">
        <div className="col-5 align-self-center">
          <h2 id="current-temp">{props.data.temp}</h2>
        </div>
        <div className="col-3 align-self-top temp-unit-selector">
          <button className="celsius-button celsius-button-selected">℃</button>|
          <button className="fahrenheit-button">℉</button>
        </div>
      </div>
      <div className="row gx-0 justify-content-center">
        <div className="col-4 gy-3 align-self-center">
          <img
            src={Park1}
            alt="Park bench"
            width="215px"
            id="app-park-picture"
            className="mt-2"
          />
        </div>
        <div className="col-8 align-self-top">
          <img
            src={weatherIcon}
            alt="weather icon"
            width="60px"
            id="weather-iconC"
            className="mb-1 mt-1"
          />
          <h4 id="weather-description">{props.data.conditionDescription}</h4>
        </div>
      </div>
      <br />
      <p>
        Today's high:{" "}
        <span id="today-high" className="temp">
          {props.data.tempMax}
        </span>
        <span className="temp-units">℃</span>
        <br />
        Today's low:{" "}
        <span id="today-low" className="temp">
          {props.data.tempMin}
        </span>
        <span className="temp-units">℃</span>
      </p>
    </div>
  );
}
