import React, { useState } from "react";

import Search from "./Search";
import Summary from "./Summary";
import Date from "./Date";
import Statistics from "./Statistics";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

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
                <Summary weatherData={weatherData} />
              </div>
            </div>
          </div>

          <div className="col-5">
            {/* Today's Day, Date & Time */}
            <div className="card text-center">
              <div className="card-body">
                <Date />
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

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
