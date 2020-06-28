import React from "react";

import "./Navigation.css";

export default function Navigation({ onRouteChange, route, isSignedIn }) {
  const onGoBack = () => {
    if (isSignedIn) {
      onRouteChange("home");
    } else {
      onRouteChange("signin");
    }
  };

  return (
    <nav className="navigation-bar">
      {route !== "working" && route === "home" ? (
        <div className="navigation-bar">
          <p onClick={() => onRouteChange("working")} className="nav-items">
            Guide
          </p>
          <p onClick={() => onRouteChange("about")} className="nav-items">
            About
          </p>
          <p onClick={() => onRouteChange("signin")} className="nav-items">
            Sign Out
          </p>
        </div>
      ) : route !== "working" ? (
        <div className="navigation-bar">
          <p onClick={() => onRouteChange("working")} className="nav-items">
            Guide
          </p>
          {route !== "about" ? (
            <p onClick={() => onRouteChange("about")} className="nav-items">
              About
            </p>
          ) : (
            <p onClick={onGoBack} className="nav-items">
              Back
            </p>
          )}
        </div>
      ) : route === "working" || route === "about" ? (
        <p onClick={onGoBack} className="nav-items">
          Back
        </p>
      ) : (
        (route = null)
      )}
    </nav>
  );
}
