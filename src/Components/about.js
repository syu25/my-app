import React, { Component } from "react";
import './about.css';
import Slide1 from '../Slide1.jpg';

class about extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Slide1} className="me" />
      </div>

    );
  }
}
export default about;