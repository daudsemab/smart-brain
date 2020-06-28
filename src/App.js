import React, { Component } from "react";
import Particles from "react-particles-js";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Enteries from "./components/Enteries/Enteries";
import ImageRecognition from "./components/ImageRecognition/ImageRecognition";
import Working from "./components/Working/Working";
import About from "./components/About/About";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#af3df3",
        blur: 10,
      },
    },
  },
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        enteries: "",
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        enteries: data.enteries,
        joined: data.joined,
      },
    });
  };

  onRouteChange = (nextRoute) => {
    this.setState({ route: nextRoute });
    if (nextRoute === "home") {
      this.setState({ isSignedIn: true });
    } else if (nextRoute === "signin") {
      this.setState({
        isSignedIn: false,
        user: {
          id: "",
          name: "",
          email: "",
          enteries: "",
          joined: "",
        },
      });
    }
  };

  componentDidMount() {
    alert(`
Welcome to Smart Brain Web App!
Use our DEMO account:
Email: demo@gmail.com
Password: demo
Or create your own one.
For more details click on Guide menu below.
Thank You!
    `)
  }

  render() {
    const { route, isSignedIn, user } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        {route === "home" ? (
          <div>
            <Logo />
            <Enteries name={user.name} enteries={user.enteries} />
            <ImageRecognition loadUser={this.loadUser} user={user} />
          </div>
        ) : route === "register" ? (
          <div>
            <Logo />
            <Register
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
          </div>
        ) : route === "working" ? (
          <Working />
        ) : route === "about" ? (
          <About />
        ) : (
          <div>
            <Logo />
            <Signin
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
          </div>
        )}
        <Navigation
          onRouteChange={this.onRouteChange}
          route={route}
          isSignedIn={isSignedIn}
        />
      </div>
    );
  }
}

export default App;
