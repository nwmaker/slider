import React from 'react'

export default ({num}) => {
  const id = `slide-${num}`
  return (
    <div className='app-container'>
      <div className='app-content'>
        <div key={num} className='carousel-item carousel-item-active' id={id}/>
      </div>
    </div>
  )
}
