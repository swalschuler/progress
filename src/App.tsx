import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="container">
      <div className="app-title-container">
        <div className="app-title">Hi there</div>
      </div>
      <div className="progress-bars">
        <ProgressBar />
        <ProgressBar />
      </div>
    </div>
  );
}

export default App;
