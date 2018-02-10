import React from 'react'

export default ({index, image, msg}) => {
  let id = `slide-${index}`
  return (
    <div className='slide' id={id}>
      <span>{msg}</span>
      <img src={image} alt=''/>
    </div>
  )
}
