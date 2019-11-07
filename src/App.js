import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MEMBERSHIP } from "./shared/data";
import MainComponent from "./components/MainComponent";

function App() {
   return (
      <div className="App">
         <MainComponent membership={MEMBERSHIP} />
      </div>
   );
}

export default App;
