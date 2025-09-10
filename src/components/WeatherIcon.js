import React from "react";

import sunny from "../images/sunny.png";
import partlySunny from "../images/partly-sunny.png";
import cloudy from "../images/cloudy.png";
import overcast from "../images/overcast.png";
import rainWithSun from "../images/rain-with-sun.png";
import heavyRain from "../images/heavy-rain.png";
import thunderstorm from "../images/thunderstorm.png";
import snowy from "../images/snowy.png";
import fog from "../images/fog.png";

export default function WeatherIcon({ iconCode }) {
  const iconMap = {
    "clear-sky-day": sunny, // Clear Sky
    "clear-sky-night": sunny,
    "few-clouds-day": partlySunny, //Few Clouds
    "few-clouds-night": partlySunny,
    "scattered-clouds-day": cloudy, //Scattered Clouds
    "scattered-clouds-night": cloudy,
    "broken-clouds-day": overcast, //Broken Clouds
    "broken-clouds-night": overcast,
    "shower-rain-day": heavyRain, //Shower Rain or drizzle
    "shower-rain-night": heavyRain,
    "rain-day": rainWithSun, //Rain
    "rain-night": rainWithSun,
    "thunderstorm-day": thunderstorm, //Thunderstorm
    "thunderstorm-night": thunderstorm,
    "snow-day": snowy, //Snow
    "snow-night": snowy,
    "mist-day": fog, //Mist or fog or haze
    "mist-night": fog,
  };

  return (
    <div className="WeatherIcon">
      <img
        src={iconMap[iconCode]}
        alt="weather icon"
        width="60px"
        className="mb-1 mt-1"
      />
    </div>
  );
}
