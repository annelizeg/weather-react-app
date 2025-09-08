import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast row justify-content-center">
      <div className="col-2">
        <div className="card text-center">
          <div className="card-body">
            <h5>Thu</h5>
            <img src="" alt="weather icon" width="60px" />
            <p>
              <span className="temp">10</span>° /
              <strong>
                <span className="temp">19</span>°
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
