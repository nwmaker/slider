import React from 'react'

const Dot = ({ id, active, dotClick }) => {
  let name = active ? 'dot active' : 'dot'
  
  return (
    <div data-id={id}
      className={name}
      onClick={e => dotClick(parseInt(e.target.getAttribute('data-id')))}>
      <style jsx>{`
        .dot {
          background: #222;
          display: inline-block;
          padding: 10px;
          margin-right: 5px;
          cursor: pointer;
          border-radius: 50%;
        }
        .active {
          background: #fff;
        }
      `}</style>
    </div>
  )
}

export default Dot
