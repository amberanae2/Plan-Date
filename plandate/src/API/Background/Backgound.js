import React, { Component } from 'react'
import BackgroundSlideshow from 'react-background-slideshow'
 
import image1 from './Background/Images/001.jpeg'
import image2 from './Background/Images/002.jpg'
import image3 from './Background/Images/003.jpg'
import image4 from './Background/Images/004.jpg'
import image5 from './Background/Images/005.jpg'
import image6 from './Background/Images/006.jpg'
 
export default class Background extends Component {
  render () {
    return (
      <div>
        <BackgroundSlideshow images={[ image1, image2, image3, image4, image5, image6 ]} />
      </div>
    )
  }
}