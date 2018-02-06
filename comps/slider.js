import React, { Component } from 'react'
import Slide from './slide'
import Dots from './dots'
//import SlideBG from './slideBG'

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 0
    }
  }
  
  componentDidMount () {
    this.props.getSliderImages()
  }

  renderSlides () {
    const {images} = this.props
    return images.map(
      (curr, i) => <Slide key={i} image={images[i]} />)
  }

  render() {
    const {images, index, translateValue} = this.props

    return (
      <div className="slider">
        <div className="slide-container">
          <p>add slides here</p>
          <Slide image="monarch" />
        </div>
        <Dots index={index}
              total={images.length}
              dotClick={this.handleDotClick} /> 
          
      </div>
    )
  }
}

export default Slider
