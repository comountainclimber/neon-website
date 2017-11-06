import React, { Component } from "react";
import LandingPage from "./components/landing-page/LandingPage";
import Footer from "./components/footer/Footer";
import QrModal from "./components/modal/QrModal";

import "./App.css";

class App extends Component {
  state = {
    modalId: null
  };

  render() {
    return (
      <div className="App">
        {(this.state.modalId === "cozQRModal" ||
          this.state.modalId === "neonWallet") && (
          <QrModal
            modalId={this.state.modalId}
            handleModalClose={() => {
              this.setState({ modalId: null });
            }}
          />
        )}
        <LandingPage />
        <Footer handleModalClick={id => this.setState({ modalId: id })} />
      </div>
    );
  }
}

export default App;
