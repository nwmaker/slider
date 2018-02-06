import React from 'react'

const SlideBG = ({ image }) => {
  let styles = {
    backgroundImage: `url(/static/${image}.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div style={styles} className="slide">
    </div>
  )
}

export default SlideBG
