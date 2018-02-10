import React from 'react'
//import Item from './item'
import Item from './slide'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderStep: 1
    }
  }

  componentDidMount() {
    this.init()
  }
  
  componentWillUnmount() {
    clearInterval(this.carouselTimer)
  }

  init() {
    let maxSteps = this.props.images.length
    let interval = this.props.interval || 5000

    this.carouselTimer = setInterval(() => {
      let step = this.state.sliderStep
      if (step < maxSteps) {
        step += 1
      } else {
        step = 1
      }
       
      this.setState({
        sliderStep: step
      })
 
    }, interval)
  }
  
  onIndicatorClick = (event) => {
    this.setState({
      sliderStep: parseInt(event.target.id)
    })
    clearInterval(this.carouselTimer)
    this.init()
  }

  render () {
    let images = this.props.images
    
    let carouselImages = images.map((image, index) => {
      let isActive = this.state.sliderStep === (index + 1)
      return (
        <Item
          key={index}
          num={index}
          bg={image}
          isActive={isActive} />
      )
    })
    
    let stepIndicators = []
    for (let i = 1; i <= images.length; i++) {
      let stepClass = i == this.state.sliderStep
        ? 'step-indicator step-indicator--active'
        : 'step-indicator'
      
      stepIndicators.push(
        <div
		  key={i}
          id={i}
          onClick={this.onIndicatorClick}
          className={stepClass} />
      )
    }
    
    return (
      <div className='carousel-container'>
        { carouselImages }
        
        <div className='step-indicator-container'>
          { stepIndicators }
        </div>
        
      </div>
    )
  }
}
