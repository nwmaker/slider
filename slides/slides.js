import React from 'react'

class Slides extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        fore: 0,
        back: 1,
        fade: false
    }
  }

  componentDidMount() {
    const {hold, images} = this.props
    
    if(images.length > 1) {
      setTimeout(this.transition, hold)
    }
  }
  
  transition() {
    setTimeout(()=>{
      this.setState({fade: true})
      this.swap()
    }, this.props.transition)
  }
  
  swap() {
    const {back, fore} = this.state
    const {images, hold} = this.props

    setTimeout( () => {
      const nextIdx = back + 1
      const nextImg = (nextIdx >= images.length) ? 0 : nextIdx
      this.setState({
        fore: back,
        back: nextImg,
        fade: false
      })

      this.transition()
    }, hold)
  }
  
  render() {
    let {images, transition, animationClass} = this.props
    let {fore, back, fade} = this.state
    console.log(back)

    let inTransition = fade ? animationClass : ''
    return (
      <div className="hero">
        <div className="back hero-bg" 
             style={{ 
               backgroundImage: `url(${images[back]})`
             }} />
        <div className={`fore hero-bg ${inTransition}`} 
             style={{
               backgroundImage: `url(${images[fore]})`,
               animationDuration: transition +'ms'
             }} />
      </div>
    )  
  } 
}

export default Slides

