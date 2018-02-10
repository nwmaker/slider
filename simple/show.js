import React from 'react'
import Carousel from './carousel'

const carouselImages = [
  'http://lorempixel.com/800/360/food/',
  'http://lorempixel.com/800/360/sports/',
  'http://lorempixel.com/800/360/city/',
  'http://lorempixel.com/800/360/nature/'
]

export default () => (
  <div className='app-container'>
    <div className='app-content'>
      <Carousel images={carouselImages} />
    </div>
    <style jsx>{`
.app-container {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', 'sans-serif';
}

.app-header h1, .app-header p {
  text-align: center;
}
.app-header h1 {
  line-height: 18px;
}
.app-header p {
  line-height: 16px;
}

.app-content {
  width: 800px;
  height: 360px;
  background-color: gray;
  margin: 0 auto;
}

#slide-0 {
  background-image: url(../static/binary.png);
}
#slide-1 {
  background-image: url(../static/monarch.png);
}
#slide-2 {
  background-image: url(../static/smd.png);
}
#slide-3 {
  background-image: url(../static/snowflake.png);
}
#slide-4 {
  background-image: url(../static/ursaminor.png);
}

/*
 * Carousel Component Styles
 */
.carousel-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.step-indicator-container {
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 5%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.step-indicator {
  width: 12px;
  height: 8px;
  border-radius: 8px;
  margin: 0 6px;
  background-color: rgba(0, 0, 0, 0.35);
  -webkit-transition: background-color 0.45s ease-in-out;
  transition: background-color 0.45s ease-in-out;
}

.step-indicator:hover {
  cursor: pointer;
}

.step-indicator--active {
  background-color: rgba(255, 255, 255, 0.75);
  -webkit-transition: background-color 0.85s ease-in;
  transition: background-color 0.85s ease-in;
}

/*
 * Carousel Item Component
 */
.carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
  -webkit-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}

    .carousel-item-active {
      z-index: 1;
      opacity: 1;
    }

    `}</style>
  </div>
)
