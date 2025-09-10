import React from "react";
import WeatherIcon from "./WeatherIcon";

/*  Create Weather Forecast Day Card */

export default function ForecastDay(props) {
  console.log(props);
  function formateDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    console.log(day);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function iconCode() {
    let iconCode = props.data.condition.icon;
    return iconCode;
  }

  function minTemp() {
    let temp = Math.round(props.data.temperature.minimum);
    return temp;
  }

  function maxTemp() {
    let temp = Math.round(props.data.temperature.maximum);
    return temp;
  }

  //   if (!props.forecastData) {
  //     return <p>Loading forecast...</p>; // return loading until data exists
  //   }

  return (
    <div className="ForecastDay">
      <div className="card text-center">
        <div className="card-body">
          <h5>{formateDay()}</h5>
          <WeatherIcon iconCode={iconCode()} />
          <p>
            <span className="temp">{minTemp()}</span>° /
            <strong>
              <span className="temp">{maxTemp()}</span>°
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
