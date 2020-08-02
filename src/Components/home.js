import React, { Component } from "react";
import Slide1 from '../Slide1.jpg';
import Slide2 from '../Slide2.jpg';
import Slide3 from '../Slide3.jpg';
import './home.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
  Slide1,
  Slide2,
  Slide3
];

class home extends Component {
  render() {
    return (
      <div className="text-center">
          <p></p>
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
        <p>This is Home</p>
      </div>
    );
  }
}
export default home;