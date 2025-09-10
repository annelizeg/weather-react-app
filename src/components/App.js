import React, { useState } from "react";

import Search from "./Search";
import Summary from "./Summary/Summary";
import Clock from "./Clock";
import Statistics from "./Statistics";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState(null); //obtains data from Search componant
  const [todayMinMaxTemp, setTodayMinMaxTemp] = useState(null); //obtains day's min/max temperaturs from Forecast componant
  const [unit, setUnit] = useState("C"); // "C" or "F" -- obtains selected unit from Summary componant

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">What is the weather like today?</h1>

        {/*  City Search Block and Current Location Button */}
        <div className="card">
          <div className="card-body">
            <Search defaultCity="Gobabis" onWeatherFetched={setWeatherData} />
          </div>
        </div>

        <br />

        <div className="row row-cols-2 justify-content-center">
          <div className="col-7">
            {/* Today's Weather Summary */}
            <div className="card h-100 text-center">
              <div className="card-body">
                <Summary
                  weatherData={weatherData}
                  minMaxTemps={todayMinMaxTemp}
                  unit={unit}
                  onUnitsFetched={setUnit}
                />
              </div>
            </div>
          </div>

          <div className="col-5">
            {/* Today's Day, Date & Time */}
            <div className="card text-center">
              <div className="card-body">
                <Clock />
              </div>
            </div>

            <br />

            {/* Today's Weather Statistics */}
            <div className="card text-center">
              <div className="card-body">
                <Statistics weatherData={weatherData} />
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/*  The Next 5 Days Weather Forecast */}
        <Forecast
          weatherData={weatherData}
          onForecastFetched={setTodayMinMaxTemp}
          unit={unit}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
