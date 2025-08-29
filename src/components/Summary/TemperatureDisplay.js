import React from "react";
import "./TemperatureDisplay.css";

export default function TemperatureDisplay({ tempCelsius, unit, setUnit }) {
  // Convert helper
  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // Display values depending on selected unit
  const displayedTemp = unit === "C" ? tempCelsius : toFahrenheit(tempCelsius);

  return (
    <div className="TemperatureDisplay">
      <div className="row gx-0 justify-content-center">
        <div className="col-5 align-self-center">
          <h2 className="current-temp">{Math.round(displayedTemp)}</h2>
        </div>
        <div className="col-3 align-self-top temp-unit-selector">
          <button
            className={`celsius-button ${
              unit === "C" ? "celsius-button-selected" : ""
            }`}
            onClick={() => setUnit("C")}
          >
            ℃
          </button>
          |
          <button
            className={`fahrenheit-button ${
              unit === "F" ? "fahrenheit-button-selected" : ""
            }`}
            onClick={() => setUnit("F")}
          >
            ℉
          </button>
        </div>
      </div>
    </div>
  );
}
