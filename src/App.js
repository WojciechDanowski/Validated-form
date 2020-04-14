import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="user">
            Your name:
            <input type="text" id="user" name="username" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
