import React from "react";

export default function Working() {
  return (
    <div className="working-card">
      <h3 className="medium-heading">How App Works</h3>
      <p className="para courier-font">
        1: First of all, you will see this sign in form. To register, click on
        the pointed area as mentioned on the image below.
      </p>
      <img src="./register1.jpg" className="img img-lazy-loading" alt="" />
      <p className="para courier-font">
        2: You will see a register form as like in the image below.
      </p>
      <img src="./register.jpg" className="img img-lazy-loading" alt="" />
      <p className="para courier-font">
        3: Register yourself or sign in with our demo account.
        <br />
        4: email : demo@gmail.com
        <br />
        5: password : demo
        <br />
        6: Once you registered and signed in into your account. Enter valid URL
        of an image
        <br />
        <span className="little">
          For Example : <br />
          http://pngimg.com/uploads
          <br />
          /student/student_PNG62549.png
        </span>
        <br />
        into input field and click Detect. It will show you detected faces.
      </p>
      <img src="./face_detected.jpg" className="img img-lazy-loading" alt="" />
      <p className="para courier-font">
        <br />
        7: Once the faces are detected you can scroll and see the demograph card
        of faces with respect to their IDs below the image.
      </p>
      <img src="./demograph_card.jpg" className="img img-lazy-loading" alt="" />
      <p className="para courier-font">8: You can sign out.</p>
      <img
        src="./signout.jpg"
        className="img  img-lazy-loading"
        alt="imgnot found"
      />
      <p className="para courier-font">
        9: "pngimg.com" is a very good website to grab free images you can use
        their pics of persons. And can input the url here. "NOT SPONSORD" !!!
      </p>
    </div>
  );
}
