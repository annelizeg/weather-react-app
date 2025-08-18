import React from "react";
import "./Search.css";

import magnifyglass from "./images/other/magnifyglass.png";
import locationPin from "./images/other/locationPin.png";

{
  /* City Search Block and Current Location Button*/
}

export default function Search() {
  return (
    <div className="Search">
      <form className="row g-2" id="search-city-form">
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            id="search-city-input"
            list="datalist-cities"
            placeholder="Type to search for city or choose from list..."
            autoFocus="on"
            autoComplete="off"
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
          <button
            type="submit"
            id="search-button"
            className="btn btn-secondary search-button"
          >
            <img src={magnifyglass} alt="search icon" width="20px" />
            Search
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            id="current-location-button"
            className="btn btn-secondary current-location-button"
          >
            <img src={locationPin} alt="search icon" width="20px" />
            Current
          </button>
        </div>
      </form>
    </div>
  );
}
