import React, { useState } from "react";
import "./Summary.css";

import TemperatureDisplay from "./TemperatureDisplay";
import WeatherDescription from "./WeatherDescription";
import HighLowDisplay from "./HighLowDisplay";

import Park1 from "../../images/Park1.svg";

/* Today's Weather Summary */

export default function Summary(props) {
  const [unit, setUnit] = useState("C"); // "C" or "F"

  if (!props.weatherData) {
    return <p>Loading summary...</p>; // return loading until data exists
  }

  console.log(props.minMaxTemps);

  return (
    <div className="Summary">
      <h2>
        Currently in <br />
        <span className="city">{props.weatherData.city}</span>
      </h2>

      <TemperatureDisplay
        tempCelsius={props.weatherData.temp}
        unit={unit}
        setUnit={setUnit}
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
        unit={unit}
      />
    </div>
  );
}
