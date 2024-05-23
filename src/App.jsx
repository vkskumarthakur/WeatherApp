import "./App.css";
import React from "react";
import CityNameDegree from "./components/CityNameDegree";
import LiveHighlights from "./components/LiveHighlights";
import DayHighlights from "./components/DayHighlights";

function App() {
  return (
    <main
      className="main-container min-h-screen p-5"
      style={{ backgroundColor: "rgb(2, 0, 36)" }}
    >
      <CityNameDegree />
      <LiveHighlights />
      <DayHighlights />
    </main>
  );
}

export default App;
