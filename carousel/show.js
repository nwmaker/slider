import React from 'react'
//import Slide from './slide'
import Item from './item'

export default () => {
  return (
    <div className='show'>
      <Item index="0" msg="test"/>
      <style jsx>{`
        .show {
          width: 100%;
          height: 100%;
          text-align: center;
          position: relative;;
        }
        .slide {
          width: 800px;
          height: 360px;
          background-color: red;
          margin: 0 auto;
        }
        .slide-0 {
          background: url("/static/monarch.png") no-repeat center;
          height: 360px;
          width: 100%;
        }
        #slide-1 {
          background-image: url("/static/monarch.png");
        }
      `}</style>
    </div>    
  )
} 
