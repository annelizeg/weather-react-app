import React, { useState } from "react";
import "./Summary.css";

import TemperatureDisplay from "./TemperatureDisplay";
import WeatherIconDescription from "./WeatherIconDescription";
import HighLowDisplay from "./HighLowDisplay";

import Park1 from "../../images/Park1.svg";
import sunny from "../../images/sunny.png";
import partlySunny from "../../images/partly-sunny.png";
import cloudy from "../../images/cloudy.png";
import overcast from "../../images/overcast.png";
import rainWithSun from "../../images/rain-with-sun.png";
import heavyRain from "../../images/heavy-rain.png";
import thunderstorm from "../../images/thunderstorm.png";
import snowy from "../../images/snowy.png";
import fog from "../../images/fog.png";

/* Today's Weather Summary */

export default function Summary(props) {
  const [unit, setUnit] = useState("C"); // "C" or "F"

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
        unit={unit}
        setUnit={setUnit}
      />

      <WeatherIconDescription
        iconCode={props.weatherData.iconCode}
        description={props.weatherData.conditionDescription}
        iconMap={iconMap}
        Park1={Park1}
      />

      <br />

      <HighLowDisplay
        maxC={props.weatherData.tempMax}
        minC={props.weatherData.tempMin}
        unit={unit}
      />
    </div>
  );
}
