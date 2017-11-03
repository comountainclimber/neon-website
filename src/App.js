import React, { Component } from "react";
import coz from "./images/coz.svg";
import LandingPage from "./components/landing-page/LandingPage";
import Footer from "./components/footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

const Navigation = () => (
  <nav>
    <img src={coz} />
  </nav>
);

export default App;
