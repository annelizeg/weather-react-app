import React from "react";
import "./Summary.css";

import TemperatureDisplay from "./TemperatureDisplay";
import WeatherDescription from "./WeatherDescription";
import HighLowDisplay from "./HighLowDisplay";

import Park1 from "../../images/Park1.svg";

/* Today's Weather Summary */

export default function Summary(props) {
  if (!props.weatherData) {
    return <p>Loading summary...</p>; // return loading until data exists
  }

  return (
    <div className="Summary">
      <h2>
        Currently in <br />
        <span className="city">{props.weatherData.city}</span>
      </h2>

      <TemperatureDisplay
        tempCelsius={props.weatherData.temp}
        unit={props.unit}
        setUnit={props.onUnitsFetched} // obtain selected unit from TemperatureDisplay componant and send it a level up to App.js
      />

      <WeatherDescription
        iconCode={props.weatherData.iconCode}
        description={props.weatherData.conditionDescription}
        Park1={Park1}
      />

      <br />

      <HighLowDisplay
        maxC={props.minMaxTemps?.maximum}
        minC={props.minMaxTemps?.minimum}
        unit={props.unit}
      />
    </div>
  );
}
