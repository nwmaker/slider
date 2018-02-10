import React from 'react'

export default ({index, msg}) => {
  let id = `slide-${index}`
  return (
    <div className={id} id={id}>
      <span>{msg}</span>
    </div>
  )
}
