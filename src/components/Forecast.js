import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";

/*  The Next 5 Days Weather Forecast */

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);

  const latitude = props.weatherData?.coordinates?.lat;
  const longitude = props.weatherData?.coordinates?.lon;

  function updateForecastWeather(response) {
    setReady(true);
    console.log(response.data);
  }

  useEffect(() => {
    // Only make the API call when we have valid coordinates
    if (latitude && longitude) {
      setError(null); // Clear old error before new search

      const weatherApiKey = "52fbb143d82a4151063455d0b96cd0e1";
      const weatherUnits = "metric";
      const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${weatherUnits}&appid=${weatherApiKey}`;

      axios
        .get(forecastApiUrl)
        .then(updateForecastWeather)
        .catch(() => {
          setError(`Forecast for "${props.weatherData?.city}" not available.`);
        });
    }
  }, [latitude, longitude, props.weatherData?.city]); // Re-run when 'latitude', 'longitude' or 'city' changes

  if (!props.weatherData) {
    return <p>Loading forecast...</p>; // return loading until data exists
  }

  if (ready) {
    return (
      <div className="Forecast row justify-content-center">
        <div className="col-2">
          <div className="card text-center">
            <div className="card-body">
              <h5>Thu</h5>
              <WeatherIcon iconCode="01d" />
              <p>
                <span className="temp">10</span>° /
                <strong>
                  <span className="temp">19</span>°
                </strong>
              </p>
            </div>
          </div>
        </div>
        {error && (
          <div>
            <p style={{ color: "white" }}>{error}</p>
          </div>
        )}
      </div>
    );
  } else {
    return "Loading....";
  }
}
