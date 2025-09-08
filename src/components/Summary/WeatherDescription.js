import React from "react";
import WeatherIcon from "../WeatherIcon";

import "./WeatherDescription.css";

export default function WeatherIconDescription({
  iconCode,
  description,
  Park1,
}) {
  return (
    <div className="WeatherDescription">
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
          <WeatherIcon iconCode={iconCode} />
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
}
