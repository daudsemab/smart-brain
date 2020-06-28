import React, { Component } from "react";

import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceDetectionArea from "./components/FaceDetectionArea/FaceDetectionArea";
import Demographics from "./components/Demographics/Demographics";

export default class ImageRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      input: "",
      imageUrl: "",
    };
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    let boxes = [];
    data.outputs[0].data.regions.forEach((eachRegion) => {
      const clarifaiFace = eachRegion.region_info.bounding_box;
      const box = {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
        age: eachRegion.data.concepts[0].name,
        ageProb: (eachRegion.data.concepts[0].value * 100).toFixed(2),
        age1: eachRegion.data.concepts[1].name,
        age1Prob: (eachRegion.data.concepts[1].value * 100).toFixed(2),
        gender: eachRegion.data.concepts[20].name,
        genderProb: (eachRegion.data.concepts[20].value * 100).toFixed(2),
        cultureLook: eachRegion.data.concepts[22].name,
        cultureLookProb: (eachRegion.data.concepts[22].value * 100).toFixed(2),
        cultureLook1: eachRegion.data.concepts[23].name,
        cultureLook1Prob: (eachRegion.data.concepts[23].value * 100).toFixed(2),
      };
      boxes.push(box);
    });
    this.setState({
      boxes: boxes,
    });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input, boxes: [] });

    fetch("https://secret-mountain-58255.herokuapp.com/handleUrl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.outputs[0].data.regions.length) {
          this.calculateFaceLocation(data);
        }
      })
      .catch((err) => console.log("handleUrl err : ", err));

    fetch("https://secret-mountain-58255.herokuapp.com/entry", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.props.user.email,
      }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user.email === this.props.user.email) {
          this.props.loadUser(user);
        }
      });
  };

  render() {
    const { imageUrl, boxes } = this.state;
    return (
      <div>
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceDetectionArea imageUrl={imageUrl} boxes={boxes} />
        <Demographics boxes={boxes} imageUrl={imageUrl} />
      </div>
    );
  }
}
