import React from "react";
import {BrowserRouter , Route } from "react-router-dom";
import Home from "./Components/Home";
import NasaPhoto from "./Components/NasaPhoto"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route component={Home} path="/" exact />
      <Route component={NasaPhoto} path="/nasaphoto"/>
    </div>
    </BrowserRouter>
  );
}

export default App;
