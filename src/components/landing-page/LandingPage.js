import React from "react";
import DownloadOptions from "./DownloadOptions";
import { downloadOptions } from "../../config.js";
import screenshot from "../../images/screenshot.png";
import coz from "../../images/coz.svg";

const LandingPage = () => (
  <div className="landing-page-container">
    <Navigation />
    <div id="details-container">
      <div id="details">
        <h1>NEON</h1>
        <div id="description">
          An open source <p id="gold"> cross-platform light wallet</p>
          for the NEO blockchain available on Mac OSX, Windows and Linux.
        </div>
        <DownloadOptions options={downloadOptions} />
      </div>
    </div>
    <div id="screen-shot">
      <div id="screen-shot-container" />
    </div>
  </div>
);

const Navigation = () => (
  <nav>
    <a href="https://cityofzion.io/">
      <img src={coz} />
    </a>
  </nav>
);

export default LandingPage;
