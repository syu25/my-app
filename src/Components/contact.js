import React, { Component } from "react";
import './contact.css';
import gmail from '../Gmail.png';
import linkedin from '../Linkin.jpeg';

class contact extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={gmail} className="gmail" />
        <p>Email: yu.stephanie17@gmail.com</p>
        <img src={linkedin} className="link" />


      </div>
    );
  }
}
export default contact;