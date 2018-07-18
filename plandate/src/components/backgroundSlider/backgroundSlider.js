import React, { Component } from 'react'
 
import BackgroundSlideshow from 'react-background-slideshow'
 
import image1 from '../assets/festival.jpg'
import image2 from '../assets/couples.jpg'
import image3 from '../assets/outdoors.jpeg'
 
export default class App extends Component {
    animationDelay = (1000);    
  render () {
    return (
      <div>
        <BackgroundSlideshow images={[ image1, image2, image3 ]} />
      </div>
    )
  }
}

