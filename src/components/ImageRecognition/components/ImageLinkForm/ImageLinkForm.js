import React from "react";

import "./ImageLinkForm.css";

export default function ImageLinkForm({ onInputChange, onButtonSubmit }) {
  return (
    <div className="container">
      <div className="input-container">
        <input
          className="input courier-font"
          onChange={onInputChange}
          type="url"
          placeholder="enter image url"
          autoFocus
        />
        <input
          className="btn"
          onClick={onButtonSubmit}
          type="submit"
          value="Detect"
        />
      </div>
    </div>
  );
}
