import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="about-container">
      <p className="medium-heading">About</p>
      <div className="about-main">
        <div>
          <hr />
          <p className="about-para">
            <span className="small-heading">Hi, my name is</span>
            <br />
            <span className="about-name">DAUD</span>
            <br />
            <span className="about-name"> SEMAB.</span>
            <br />
            <span className="small-heading">
              And I am an unknown developer.
            </span>
          </p>
          <hr />
        </div>
        <div className="img-magnifier-container">
          <img
            src="./daud_semab.jpg"
            className="about-pic img-lazy-loading"
            alt=""
          />
        </div>
      </div>
      <p className="courier-font">App made with ❤ by DAUD SEMAB.</p>
    </div>
  );
}
