import React from "react";
import "./App.css";
import BackgroundChanger from "./components/backgroundChanger/BackgroundChanger";
import StopCounter from "./components/StopCounter/StopCounter";
const App = () => {
  return (
    <div className="App">
      <StopCounter />
      {/* <BackgroundChanger /> */}
    </div>
  );
};

export default App;
