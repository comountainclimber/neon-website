import React from "react";

import githubIcon from "../../images/github.png";
import fbIcon from "../../images/facebook.png";
import slackIcon from "../../images/slack.png";

const Footer = () => (
  <footer>
    <div id="donation">
      Donate to City of Zion
      <div id="address">AXSoNQEKjmqPBNPg5cNrHyWivfjok3Vj9D</div>
      <div id="modal-link">
        <a href="" target="blank">
          <i className="fa fa-arrow-circle-o-up" aria-hidden="true" /> Launch QR
          Code
        </a>
      </div>
    </div>
    <div id="donation">
      Donate to NEON wallet creators
      <div id="address">Adr3XjZ5QDzVJrWvzmsTTchpLRRGSzgS5A</div>
      <div id="modal-link">
        <a href="" target="blank">
          <i className="fa fa-arrow-circle-o-up" aria-hidden="true" /> Launch QR
          Code
        </a>
      </div>
    </div>
    <div id="social">
      <div id="description">Join us at City of Zion!</div>
      <div id="placeholder" style={{ opacity: 0 }}>
        Adr3XjZ5QDzVJrWvzmsTTchpLRRGSzgS5A
      </div>
      <div id="social-links">
        <a
          href="https://github.com/CityOfZion/neon-wallet"
          id="link"
          target="blank"
        >
          Github <img src={githubIcon} />
        </a>
        <a
          href="https://www.facebook.com/CityOfZionOfficial"
          id="link"
          target="blank"
        >
          Facebook <img src={fbIcon} />
        </a>
        <a
          href="https://join.slack.com/t/neosmarteconomy/shared_invite/MjIyOTc2OTU4NDk3LTE1MDIxNzE2NTctZTE1Mjg5ZWE3Yw"
          id="link"
          target="blank"
        >
          Slack <img src={slackIcon} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
