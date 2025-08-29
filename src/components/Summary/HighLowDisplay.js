import React from "react";

export default function HighLowDisplay({ maxC, minC, unit }) {
  // Convert helper
  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // Display values depending on selected unit
  const displayedMax = unit === "C" ? maxC : toFahrenheit(maxC);
  const displayedMin = unit === "C" ? minC : toFahrenheit(minC);

  return (
    <div className="HighLowDisplay">
      <p>
        Today's high:{" "}
        <span className="temp">
          {Math.round(displayedMax)}°{unit}
        </span>
        <br />
        Today's low:{" "}
        <span className="temp">
          {Math.round(displayedMin)}°{unit}
        </span>
      </p>
    </div>
  );
}
