import React, { useState, useEffect } from "react";
import "./Summary.css";

import Park1 from "../images/Park1.svg";
import sunny from "../images/sunny.png";
import partlySunny from "../images/partly-sunny.png";
import cloudy from "../images/cloudy.png";
import overcast from "../images/overcast.png";
import rainWithSun from "../images/rain-with-sun.png";
import heavyRain from "../images/heavy-rain.png";
import thunderstorm from "../images/thunderstorm.png";
import snowy from "../images/snowy.png";
import fog from "../images/fog.png";

/* Today's Weather Summary */

export default function Summary(props) {
  const [unit, setUnit] = useState("C"); // "C" or "F"
  const [temperatureValues, setTemperatureValues] = useState({});

  const iconMap = {
    "01d": sunny, // Clear Sky
    "01n": sunny,
    "02d": partlySunny, //Few Clouds
    "02n": partlySunny,
    "03d": cloudy, //Scattered Clouds
    "03n": cloudy,
    "04d": overcast, //Broken Clouds
    "04n": overcast,
    "09d": heavyRain, //Shower Rain or drizzle
    "09n": heavyRain,
    "10d": rainWithSun, //Rain
    "10n": rainWithSun,
    "11d": thunderstorm, //Thunderstorm
    "11n": thunderstorm,
    "13d": snowy, //Snow
    "13n": snowy,
    "50d": fog, //Mist or fog or haze
    "50n": fog,
  };

  // Always save raw Celsius values from API when weatherData arrives
  useEffect(() => {
    if (props.weatherData) {
      setTemperatureValues({
        currentTemp: props.weatherData.temp,
        maxTemp: props.weatherData.tempMax,
        minTemp: props.weatherData.tempMin,
      });
    }
  }, [props.weatherData]); // runs whenever weatherData changes

  // Convert helper
  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // Display values depending on selected unit
  const displayedTemp =
    unit === "C"
      ? temperatureValues.currentTemp
      : toFahrenheit(temperatureValues.currentTemp);
  const displayedMax =
    unit === "C"
      ? temperatureValues.maxTemp
      : toFahrenheit(temperatureValues.maxTemp);
  const displayedMin =
    unit === "C"
      ? temperatureValues.minTemp
      : toFahrenheit(temperatureValues.minTemp);

  if (!props.weatherData) {
    return <p>Loading summary...</p>; // or just return nothing until data exists
  }

  return (
    <div className="Summary">
      <h2>
        Currently in <br />
        <span className="city" id="display-city">
          {props.weatherData.city}
        </span>
      </h2>
      <div className="row gx-0 justify-content-center">
        <div className="col-5 align-self-center">
          <h2 id="current-temp">{Math.round(displayedTemp)}</h2>
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
            src={iconMap[props.weatherData.iconCode]}
            alt="weather icon"
            width="60px"
            id="weather-iconC"
            className="mb-1 mt-1"
          />
          <h4 id="weather-description">
            {props.weatherData.conditionDescription}
          </h4>
        </div>
      </div>
      <br />
      <p>
        Today's high:{" "}
        <span id="today-high" className="temp">
          {Math.round(displayedMax)}
        </span>
        <span className="temp-units">°{unit}</span>
        <br />
        Today's low:{" "}
        <span id="today-low" className="temp">
          {Math.round(displayedMin)}
        </span>
        <span className="temp-units">°{unit}</span>
      </p>
    </div>
  );
}
