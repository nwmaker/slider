import React from 'react'

const Slide = ({ image }) => {
  let source = `/static/${image}.png`

  return (
    <div className="slide">
      <img src={source} />

      <style jsx>{`
        .slide {
          background-size: 'cover';
          backgorund-position: 'center';
          background-repeat: 'no-repeat';
        }
      `}</style>
    </div>
  )
}

export default Slide
