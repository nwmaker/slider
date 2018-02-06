import React from 'react'
import Dot from './dot'

const Dots = ({ index, total, dotClick }) => {

  let dots = []

  for(let i = 0; i < total; i++) {
    let isActive = i === index ? true : false
    
    dots.push(
      <Dot key={i}
        id={i}
        active={isActive}
        dotClick={dotClick}
      />
    )
  }

  return (
    <div className="dots-container">
      { dots }
      <style jsx>{`
        .dot-container {
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          z-index: 9999;
          padding: 5px 0;
        }
      `}</style>
    </div>
  )
}

export default Dots
