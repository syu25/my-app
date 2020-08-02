import React, { Component } from "react";
import './about.css';
import Slide1 from '../Slide1.jpg';
import ScaleText from "react-scale-text";

class about extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Slide1} className="me" />

        <div className="parent">
    <ScaleText minFontSize={10} maxFontSize={27} widthOnly={true}>
    <div className="text">
          Sofia was bored. She and her brother, Michael, were at the doctor's
          office, again. Sofia had asthma (said like az-muh). This is a
          condition that can make it hard to breathe. Sometimes Sofia would
          wheeze, cough, and her chest would feel tight. Wheezing means there is
          a whistling sound when she would breathe. She had to go for check-ups
          a lot to make sure she had the right medicine to help her lungs work.
          She was tired of going to the doctor's.
        </div>
    </ScaleText>
  </div>


      </div>

    );
  }
}
export default about;