import React from 'react'

export default class Item extends React.Component {
  render() {
    let itemClass = this.props.isActive ? 'carousel-item carousel-item-active' : 'carousel-item'
    let id = `slide-${this.props.num}`
    return (
      <div className={itemClass} id={id}>
        <span>Testing</span>
      </div> 
    )
  } 
}
