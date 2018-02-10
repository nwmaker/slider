import React from 'react'

export default class Item extends React.Component {
  render() {
    let itemClass = this.props.isActive ? 'carousel-item carousel-item-active' : 'carousel-item'
    return (
      <div className={itemClass} 
        style={{
          backgroundImage: 'url(\'' + this.props.bg + '\')'
        }}/>
    )
  } 
}
