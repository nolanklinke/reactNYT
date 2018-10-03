import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${
          process.env.REACT_APP_NYT_API_KEY
        }`
      )
      .then(res => {
        const articles = res.data;
        this.setState({ articles });
        console.log(articles);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
