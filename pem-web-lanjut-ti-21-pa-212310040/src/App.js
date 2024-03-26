import React from "react";
import { BrowserRouter } from "react-router-dom";
import BaseRoute from "./apps/BaseRoute";
import LayoutInit from "./components/LayoutInit";

function App({ basename }) {
  return (
    
    <BrowserRouter>
      <LayoutInit>
        <div className="container">
        <BaseRoute />
        </div>
      </LayoutInit>
    </BrowserRouter>
    
  );
}


export default App;
