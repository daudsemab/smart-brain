import React from "react";
import Tilt from "react-tilt";

import './Logo.css'
import brain from './brain.png';

export default function Logo() {
  return (
    <div className='logo-portion'>
      <div className='tilt-container'>
        <Tilt
          className="Tilt"
          options={{ max: 55 }}
        >
          <div className="Tilt-inner"><img className='logo-pic' src={brain} alt='brainLOGO' /></div>
        </Tilt>
      </div>
      <h1 className='logo-heading'>Smart Brain</h1>
    </div>
  );
}
