import React, { Component } from "react";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      badRequest: false,
    };
    this.onRegister = this.onRegister.bind(this);
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onRegister = () => {
    fetch("https://secret-mountain-58255.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.id) {
          this.props.loadUser(resp);
          this.props.onRouteChange("home");
        } else if (resp === "registeration failed") {
          this.setState({ badRequest: true });
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return this.state.badRequest === true ? (
      <div className="form-card">
        <div>
          <p className="small-heading">
            Unable to Join!{" "}
            <span role="img" aria-label="">
              😒
            </span>
          </p>
          <hr />
          <hr />
          <hr />
        </div>
        <p onClick={() => onRouteChange("signin")} className="p-anchor-tag courier-font">
            Already have an account? Sign In
          </p>
        <p onClick={() => {
          this.setState({badRequest: false})
          onRouteChange("register")}} className="p-anchor-tag courier-font">
          Try to register again!
        </p>
      </div>
    ) : (
      <div className="form-card">
        <form onSubmit={(event) => event.preventDefault()}>
          <legend className="medium-heading">Register</legend>
          <input
            className="input-field"
            onChange={this.onNameChange}
            type="text"
            placeholder="name"
            required
            autoFocus
          />
          <br />
          <input
            className="input-field"
            onChange={this.onEmailChange}
            type="email"
            placeholder="email"
            required
          />
          <br />
          <input
            className="input-field"
            onChange={this.onPasswordChange}
            type="password"
            placeholder="password"
            required
          />
          <br />
          <input
            className="btn xtra-btn-style"
            onClick={this.onRegister}
            type="submit"
            value="Register"
          />
          <p onClick={() => onRouteChange("signin")} className="p-anchor-tag courier-font">
            Already have an account? Sign In
          </p>
        </form>
      </div>
    );
  }
}
