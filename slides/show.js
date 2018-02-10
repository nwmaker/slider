import React from 'react'
import Slides from './slides'

const Images = [
  'https://images2.alphacoders.com/759/75960.jpg',
  'http://cdn.wallpapersafari.com/0/2/ktPfWY.jpg',
  'http://wallpapercave.com/wp/bqLg32j.jpg',
  'https://images3.alphacoders.com/508/50825.jpg'
]

export default () => {
  return (
    <div className='show'>
      <Slides mages={Images} transition={1000} hold={3000} animationClass={'fade'}/>
      <style jsx>{`
.hero {
  height: 100vh;
  width: 100vw;
}
.hero .hero-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
}
.hero .hero-bg.fade {
  -webkit-animation: fadeout ease forwards;
          animation: fadeout ease forwards;
}

@-webkit-keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

      `}</style>
    </div>
  )
}
