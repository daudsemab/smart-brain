import React from "react";

import Box from "./Box";
import "./FaceDetectionArea.css";

export default function FaceDetectionArea({ imageUrl, boxes }) {
  return boxes.length !== 0 && imageUrl !== '' ? (
    <div id="face-detection-area">
    <div><p className="small-heading">See details below the image!</p></div>
      <div className="image-container">
        <img src={imageUrl} id="inputImage" width="100%" height="auto" alt="" />
        {boxes.map((box, i) => {
          return <Box box={box} key={i + 1} id={i + 1} />;
        })}
      </div>
    </div>
  )
  : boxes.length === 0 && imageUrl !== '' ? (
    <div id="face-detection-area">
      <div className="image-container">
      <div><p className="small-heading">Loading...</p></div>
        <img src={imageUrl} id="inputImage" width="100%" height="auto" alt="" />
      </div>
    </div>
  ) : (
    <div id="face-detection-area">
      <div className="image-container">
        <img src={imageUrl} id="inputImage" width="100%" height="auto" alt="" />
      </div>
    </div>
  );
}