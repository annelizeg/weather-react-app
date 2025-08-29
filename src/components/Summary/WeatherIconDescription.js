import React from "react";
import "./WeatherIconDescription.css";

export default function WeatherIconDescription({
  iconCode,
  description,
  iconMap,
  Park1,
}) {
  return (
    <div className="WeatherIconDescription">
      <div className="row gx-0 justify-content-center">
        <div className="col-4 gy-3 align-self-center">
          <img
            src={Park1}
            alt="Park bench"
            width="215px"
            className="mt-2 app-park-picture"
          />
        </div>
        <div className="col-8 align-self-top">
          <img
            src={iconMap[iconCode]}
            alt="weather icon"
            width="60px"
            className="mb-1 mt-1"
          />
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
}
