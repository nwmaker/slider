import React from 'react'
import Carousel from './carousel'

export default () => {
  return (
    <div className='show'>
      <Carousel />
      <style jsx>{`
        .pic {
          display: inline-block;
          width: 100px;
          height: 100px;
          position: absolute;
        }
        .pic img {
          width: 100px;
          height: 100px;
        }
        .current {
          left: 100px;
        }
        .current .move {
          left: 0;
          transition: all .5s ease;
        }
        .next {
          left: 200px;
        }
        .next .move {
          left: 100px;
          transition: all .5s ease;
        }
        .pic-wrapper {
          background: lightgray;
          width: 400%;
          position: absolute;
        }
        .mask {
          left: 50px;
          overflow: hidden;
          width: 100%;
          height: 120px;
          position: absolute;
        }
      `}</style>
    </div>    
  )
} 
