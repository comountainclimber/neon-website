import React from "react";
import DownloadOptions from "./DownloadOptions";
import { downloadOptions } from "../../config.js";
import screenshot from "../../images/Group.png";

const LandingPage = () => (
  <div className="landing-page-container">
    <div id="details-container">
      <div id="details">
        <h1>NEON</h1>
        <div id="description">
          An open source <p id="gold"> cross-platform light wallet</p>
          for the NEO blockchain available on Mac OSX, Windows and Linux
        </div>
        <DownloadOptions options={downloadOptions} />
      </div>
    </div>
    <div id="screen-shot">
      <div id="screen-shot-container">
        <img src={screenshot} />
      </div>
    </div>
  </div>
);

export default LandingPage;
