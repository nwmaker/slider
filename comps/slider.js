import React, { Component } from 'react'
import Slide from './slide'
import Dots from './dots'

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

  handleDotClick = i => {
    const {index, tranlateValue, setTranslateValue, setIndex} = this.props
    if (i === index) {
      return
    }
    if (i > index) {
      setTranslateValue(-(i * this.slideWidth()))
    } else {
      setTranslateValue(translateValue + ((index-1) * this.slideWidth()))
    }
    setIndex(i)
  }

  slideWidth () {
    const slide = document.querySelector('.slide')
    return slide.clientWidth
  }

  renderSlides () {
    const {images} = this.props
    return (
      <div>
        images.map((curr, index) => (<Slide key={curr} image={images[curr]} />))
      </div>
    )
  }

  render() {
    const {images, index, translateValue} = this.props

    return (
      <div className="slider">
        <div className="slide-container">
          {this.renderSlides()}
        </div>
        <Dots index={index}
              total={images.length}
              dotClick={this.handleDotClick} /> 
        <style jsx>{`
          .slide {
            display: inline-block;
            height: 100%;
            width: 100%;
          }
          .slide-container {
            position: relative;
            height: 100%;
            width: 100%;
            transform: 'translateX(100px)';
            transition: 'transform ease-out 0.45s';
          }
          .slider {
            position: relative;
            width: 100%;
            margin: 0 auto;
            height: 100%;
            overflow: hidden;
            white-space: nowrap;
          }
        `}</style>   
      </div>
    )
  }
}

export default Slider
