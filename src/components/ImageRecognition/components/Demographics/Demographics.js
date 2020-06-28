import React from "react";

import "./Demographics.css";

export default function Demographics({ imageUrl, boxes }) {
  return (
    <div className="demo-card-container">
      {boxes.map((box, i) => {
        return (
          <div className="demo-card" key={i + 1}>
            <p className="medium-heading">iD {i + 1}</p>
            <div className="flex-space-btw">
              <p className="small-heading">Gender</p>
              <p className="small-heading">Probability</p>
            </div>
            <div className="flex-space-btw">
              <p className="courier-font">{box.gender}</p>
              <p className="courier-font">{box.genderProb}%</p>
            </div>
            <hr />
            <div className="flex-space-btw">
              <p className="small-heading">Age</p>
              <p className="small-heading">Probability</p>
            </div>
            <div className="flex-space-btw">
              <p className="courier-font">{box.age}</p>
              <p className="courier-font">{box.ageProb}%</p>
            </div>
            <div className="flex-space-btw">
              <p className="courier-font">{box.age1}</p>
              <p className="courier-font">{box.age1Prob}%</p>
            </div>
            <hr />
            <div className="flex-space-btw">
              <p className="small-heading">Cultural Look</p>
              <p className="small-heading">Probability</p>
            </div>
            <div className="flex-space-btw">
              <p className="courier-font" >{box.cultureLook}</p>
              <p className="courier-font">{box.cultureLookProb}%</p>
            </div>
            <div className="flex-space-btw">
              <p className="courier-font">{box.cultureLook1}</p>
              <p className="courier-font">{box.cultureLook1Prob}%</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
