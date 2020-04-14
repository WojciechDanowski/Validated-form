import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    },
  };

  validateMessages = {
    username_incorrect:
      "Your name have to be longer than 10 letters and cannot contain space!",
    email_incorrect: 'Your email lacks "@" !',
    password_incorrect: "Password must have 8 letters!",
    accept_incorrect: "Rules not accepted",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;

      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">
            Your name:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {this.state.errors.username && (
              <span> {this.validateMessages.username_incorrect} </span>
            )}
          </label>
          <label htmlFor="email">
            Your email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors.email && (
              <span> {this.validateMessages.email_incorrect} </span>
            )}
          </label>

          <label htmlFor="password">
            Your passs:
            <input
              type="password"
              id="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
            {this.state.errors.pass && (
              <span> {this.validateMessages.password_incorrect} </span>
            )}
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />
            Accept rules
          </label>
          {this.state.errors.accept && (
            <span> {this.validateMessages.accept_incorrect} </span>
          )}
          <button>Confirm</button>
        </form>
      </div>
    );
  }
}

export default App;
