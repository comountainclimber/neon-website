import React from "react";

import githubIcon from "../../images/github.png";
import fbIcon from "../../images/facebook.png";
import slackIcon from "../../images/slack.png";
import redditIcon from "../../images/reddit.png";

const Footer = ({ handleModalClick }) => (
  <footer>
    <div id="footer-content">
      <div id="donation">
        <div id="description">Donate to City of Zion</div>
        <div id="address">AXSoNQEKjmqPBNPg5cNrHyWivfjok3Vj9D</div>
        <div id="modal-link">
          <a
            href=""
            target="blank"
            onClick={e => e.preventDefault() || handleModalClick("cozQRModal")}
          >
            <i className="fa fa-external-link-square" aria-hidden="true" />{" "}
            Launch QR Code
          </a>
        </div>
      </div>
      <div id="donation">
        <div id="description">Donate to NEON wallet creators</div>
        <div id="address">Adr3XjZ5QDzVJrWvzmsTTchpLRRGSzgS5A</div>
        <div id="modal-link">
          <a
            href=""
            target="blank"
            onClick={e => e.preventDefault() || handleModalClick("neonWallet")}
          >
            <i className="fa fa-external-link-square" aria-hidden="true" />{" "}
            Launch QR Code
          </a>
        </div>
      </div>
      <div id="social">
        <div id="description">Join us at City of Zion!</div>
        {/* <div id="placeholder" style={{ opacity: 0 }}>
          Adr3XjZ5QDzVJrWvzmsTTchpLRRGSzgS5A
        </div> */}
        <div id="social-links">
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 10
            }}
          > */}
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
          {/* </div> */}
          {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
          <a
            href="https://join.slack.com/t/neosmarteconomy/shared_invite/MjIyOTc2OTU4NDk3LTE1MDIxNzE2NTctZTE1Mjg5ZWE3Yw"
            id="link"
            target="blank"
          >
            Slack <img src={slackIcon} />
          </a>
          <a href="https://www.reddit.com/r/NEO/" id="link" target="blank">
            Reddit <img src={redditIcon} />
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
