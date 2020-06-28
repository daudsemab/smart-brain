import React from 'react'

export default function Box({box, id}) {
  return (
    <div
    className="bounding-box"
    style={{
      top: box.topRow,
      bottom: box.bottomRow,
      right: box.rightCol,
      left: box.leftCol,
    }}
  ><span className='face-id' >{id}</span></div>
  )
}
