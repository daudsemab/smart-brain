import React from "react";

import "./Enteries.css";

export default function Enteries({ name, enteries }) {
  return (
    <div>
      <div className="status">
        <span className="status-name">
          {name[0].toUpperCase() + name.substring(1)}
        </span>
        <span className="courier-font">{" your current enteries are: "}</span>
        <span className="rank">#{enteries}</span>
      </div>
    </div>
  );
}
