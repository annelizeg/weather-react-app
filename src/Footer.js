import React from "react";
import "./Footer.css";

/* Footer */

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/annelizeg/weather-react-app"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      <span> by</span> <span className="coder">Annelize Grobbelaar</span> |
      <a
        href="https://www.linkedin.com/in/annelize-grobbelaar-1ba524151/"
        title="LinkedIn"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <br />
      <span>Icons made by </span>
      <a
        href="https://www.freepik.com"
        title="Freepik"
        target="_blank"
        rel="noreferrer"
      >
        Freepik
      </a>
      <span> from </span>
      <a
        href="https://www.flaticon.com/"
        title="Flaticon"
        target="_blank"
        rel="noreferrer"
      >
        www.flaticon.com
      </a>
    </div>
  );
}
