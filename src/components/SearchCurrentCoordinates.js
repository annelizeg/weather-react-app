import React from "react";
import axios from "axios";

import locationPin from "../images/other/locationPin.png";

export default function SearchCurrentCoordinates({
  onCoordsFetched, //SelfNote: testCoords for testing only, to be removed
  onCurrentCoordinatesWeatherFetched,
  setError,
}) {
  function getCurrentCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          onCoordsFetched(coords); //SelfNote: testCoords for testing only, to be removed
          accessPositionWeather(coords);
        },
        (error) => {
          // Handle potential errors, such as user denying location access
          const errorMessages = {
            1: "User denied the request for Geolocation.", // PERMISSION_DENIED
            2: "Location information is unavailable.", // POSITION_UNAVAILABLE
            3: "The request to get user location timed out.", // TIMEOUT
          };

          console.error(
            errorMessages[error.code] || "An unknown error occurred.",
            error
          );
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  function accessPositionWeather(coords) {
    if (coords) {
      const weatherApiKey = "feb0504864ab3c8o978403c9t3b099b5";
      const weatherUnits = "metric";
      const weatherApiUrl = `https://api.shecodes.io/weather/v1/current?lat=${coords.latitude}&lon=${coords.longitude}&units=${weatherUnits}&key=${weatherApiKey}`;

      axios
        .get(weatherApiUrl)
        .then((response) => {
          onCurrentCoordinatesWeatherFetched(response);
        })
        .catch(() => {
          setError(`Weather for current location coordinates not available.`);
        });
    }
    console.log("Lat:", coords.latitude, "Lon:", coords.longitude);
  }

  return (
    <button
      type="button"
      className="btn btn-secondary current-location-button"
      onClick={getCurrentCoordinates}
    >
      <img src={locationPin} alt="search icon" width="20px" />
      Current
    </button>
  );
}
