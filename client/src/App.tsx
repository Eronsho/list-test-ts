import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/Approuter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
