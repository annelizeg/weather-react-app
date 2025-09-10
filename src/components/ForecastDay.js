import React from "react";
import WeatherIcon from "./WeatherIcon";

/*  Create Weather Forecast Day Card */

export default function ForecastDay(props) {
  function formateDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function iconCode() {
    let iconCode = props.data.condition.icon;
    return iconCode;
  }

  // Temperature convert helper
  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // Display values depending on selected unit
  const maxC = props.data.temperature.maximum;
  const minC = props.data.temperature.minimum;

  const displayedMax = props.unit === "C" ? maxC : toFahrenheit(maxC);
  const displayedMin = props.unit === "C" ? minC : toFahrenheit(minC);

  return (
    <div className="ForecastDay">
      <div className="card text-center">
        <div className="card-body">
          <h5>{formateDay()}</h5>
          <WeatherIcon iconCode={iconCode()} />
          <p>
            <span className="temp">{Math.round(displayedMin)}</span>° /
            <strong>
              <span className="temp">{Math.round(displayedMax)}</span>°
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
