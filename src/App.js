import React, { Component } from "react";
import LandingPage from "./components/landing-page/LandingPage";
import Footer from "./components/footer/Footer";
import Modal from "react-modal";
import "./App.css";

import cozQr from "./images/coz-qr.png";

class App extends Component {
  state = {
    modalId: null
  };

  render() {
    return (
      <div className="App">
        {(this.state.modalId === "cozQRModal" ||
          this.state.modalId === "neonWallet") && (
          <QRModal
            modalId={this.state.modalId}
            handleModalClose={() => {
              this.setState({ modalId: null });
            }}
          />
        )}
        <LandingPage />
        <Footer
          handleModalClick={id => {
            this.setState({ modalId: id });
          }}
        />
      </div>
    );
  }
}

const QRModal = ({ handleModalClose, modalId }) => (
  <Modal
    isOpen
    // onAfterOpen={afterOpenFn}
    onRequestClose={handleModalClose}
    // closeTimeoutMS={n}
    // style={customStyle}
    contentLabel="Modal"
    style={{
      overlay: {
        backgroundColor: "rgba(18, 18, 44, 0.91)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      content: {
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        left: "auto",
        right: "auto",
        top: "auto",
        bottom: "auto",
        border: "none"
      }
    }}
  >
    <div id="modal">
      <div id="qr-label">Donation to City of Zion</div>
      <div id="down-arrow" />

      <img src={cozQr} />
    </div>
  </Modal>
);

export default App;
