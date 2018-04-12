import React, { Component } from 'react';
import './App.css';

const fStyle = {
  fontSize: '10px',
  textAlign: 'center',
  color: 'gray'
};

class Foot extends Component {

render() {
    return (
      <p style={fStyle}>  Copyright © 2018. vuk  </p>
    );
  }
}

export default Foot;
