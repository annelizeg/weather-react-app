import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

import magnifyglass from "../images/other/magnifyglass.png";
import locationPin from "../images/other/locationPin.png";

/* City Search Block and Current Location Button*/

export default function Search(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [error, setError] = useState(null);

  function updateCityWeather(response) {
    // console.log(response.data);

    let roundedWindSpeed = Math.round(response.data.wind.speed * 3.6 * 10) / 10; //includes conversion from m/sec to km/hr, and rounded to 1 decimal place
    const newWeatherData = {
      city: response.data.city,
      coordinates: response.data.coordinates,
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      conditionDescription: response.data.condition.description,
      wind: roundedWindSpeed,
      iconCode: response.data.condition.icon,
    };

    props.onWeatherFetched(newWeatherData); //global state management - sends weather data up a level to be used in other componants
  }

  // Only runs & access SheCodesWeather API when city changes
  function accessCityWeather() {
    setReady(true);
    setError(null); // Clear old error before new search

    const weatherApiKey = "feb0504864ab3c8o978403c9t3b099b5";
    const weatherUnits = "metric";
    const weatherApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&units=${weatherUnits}&key=${weatherApiKey}`;

    axios
      .get(weatherApiUrl)
      .then(updateCityWeather)
      .catch(() => {
        setError(`City "${city}" not found. Please try again.`);
      });
  }

  function handelSubmit(event) {
    event.preventDefault();
    accessCityWeather();
  }

  function updateCityName(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Search">
        <form className="row g-2" onSubmit={handelSubmit}>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              list="datalist-cities"
              placeholder="Type to search for city or choose from list..."
              autoFocus="on"
              autoComplete="off"
              onChange={updateCityName}
            />
            <datalist id="datalist-cities">
              <option value="Adelaide"></option>
              <option value="Brisbane"></option>
              <option value="Canberra"></option>
              <option value="Darwin"></option>
              <option value="Hobart"></option>
              <option value="Melbourne"></option>
              <option value="Perth"></option>
              <option value="Sydney"></option>
            </datalist>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-secondary search-button">
              <img src={magnifyglass} alt="search icon" width="20px" />
              Search
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary current-location-button"
            >
              <img src={locationPin} alt="search icon" width="20px" />
              Current
            </button>
          </div>
        </form>
        {error && (
          <div>
            <p style={{ color: "red" }}>{error}</p>
          </div>
        )}
      </div>
    );
  } else {
    accessCityWeather();
    return "Loading....";
  }
}
