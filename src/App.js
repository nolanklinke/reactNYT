import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Articles from "./pages/Articles";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Articles />
    </div>
  </Router>
);

export default App;
