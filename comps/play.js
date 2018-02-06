import React, { Component } from 'react'
import Slider from './slider'

const imagesName = [
  'binary',
  'monarch',
  'smd',
  'snowflake'
]

export default class Play extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
    
  }
  render() {
    return (
      <div className="play">
        <Slider images={imagesName} index={this.state.index} />
      </div>
    )
  }
}
