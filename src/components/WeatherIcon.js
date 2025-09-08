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
