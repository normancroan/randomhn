import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Stories from "./components/Stories";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Random HN</h1>
        </header>
        <div className="Stories">
          <Stories />
        </div>
      </div>
    );
  }
}

export default App;
