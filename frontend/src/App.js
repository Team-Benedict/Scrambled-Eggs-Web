import React from "react";
import { GameInfo } from "./Components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <GameInfo
        date="February 25, 2022"
        publish="Bandai Namco"
        developer="FromSoftware Inc."
        title="Elden ring"
        platforms={["PC", "XBox", "PS5"]}
        genres="Action Role-playing"
      />
    </div>
  );
}

export default App;
