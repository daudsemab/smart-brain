import React, { Component } from "react";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      badRequest: false,
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSignInSubmit = () => {
    fetch("https://secret-mountain-58255.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.id) {
          this.props.loadUser(resp);
          this.props.onRouteChange("home");
        } else if (resp === "signin failed") {
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
            Email or Password is invalid!{" "}
            <span role="img" aria-label="">
              😒
            </span>
          </p>
          <hr />
          <hr />
          <hr />
        </div>
        <p
          onClick={() => onRouteChange("register")}
          className="p-anchor-tag courier-font"
        >
          Don't have an account? Register
        </p>
        <p
          onClick={() => {
            this.setState({ badRequest: false });
            onRouteChange("signin");
          }}
          className="p-anchor-tag courier-font"
        >
          Sign In again!
        </p>
      </div>
    ) : (
      <div className="form-card">
        <form onSubmit={(event) => event.preventDefault()}>
          <legend className="medium-heading">Sign In</legend>
          <input
            className="input-field"
            onChange={this.onEmailChange}
            type="email"
            placeholder="email"
            required
            autoFocus
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
            onClick={this.onSignInSubmit}
            type="submit"
            value="Sign In"
          />
          <p
            onClick={() => onRouteChange("register")}
            className="p-anchor-tag courier-font"
          >
            Don't have an account? Register
          </p>
        </form>
      </div>
    );
  }
}
