import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

/*  The Next 5 Days Weather Forecast */

export default function Forecast({ weatherData, onForecastFetched }) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const latitude = weatherData?.coordinates?.latitude;
  const longitude = weatherData?.coordinates?.longitude;

  // Stable function for handling the API response
  const updateForecastWeather = useCallback(
    (response) => {
      setReady(true);
      console.log(response.data);

      setForecastData(response.data.daily);

      onForecastFetched(response.data.daily[0].temperature); //global state management - sends forecast daily temp data up a level to be used in other componants
    },
    [onForecastFetched] // only depends on this prop
  );

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
          setError(`Forecast for "${weatherData?.city}" not available.`);
        });
    }
  }, [latitude, longitude, weatherData?.city, updateForecastWeather]); // Re-run when 'latitude', 'longitude' or 'city' changes

  if (!weatherData) {
    return <p>Loading forecast...</p>; // return loading until data exists
  }

  if (ready) {
    return (
      <div className="Forecast row justify-content-center">
        {forecastData.map((dailyForecast, index) => {
          if (index < 5) {
            return (
              <div key={index} className="col">
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
        {error && (
          <div>
            <p style={{ color: "white" }}>{error}</p>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
}
