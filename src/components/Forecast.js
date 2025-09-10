import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

/*  The Next 5 Days Weather Forecast */

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const latitude = props.weatherData?.coordinates?.latitude;
  const longitude = props.weatherData?.coordinates?.longitude;

  function updateForecastWeather(response) {
    setReady(true);
    console.log(response.data);

    setForecastData(response.data.daily);
  }

  useEffect(() => {
    // Only make the API call when we have valid coordinates
    if (latitude && longitude) {
      setError(null); // Clear old error before new search

      const weatherApiKey = "feb0504864ab3c8o978403c9t3b099b5";
      const weatherUnits = "metric";
      const forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&units=${weatherUnits}&key=${weatherApiKey}`;

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
          <ForecastDay forecastData={forecastData[0]} />
        </div>
        {error && (
          <div>
            <p style={{ color: "white" }}>{error}</p>
          </div>
        )}
      </div>
    );
  } else {
    return "";
  }
}
