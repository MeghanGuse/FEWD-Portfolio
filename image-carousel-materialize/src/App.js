import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeCarousel from './carousel/carousel.js';
import { Router, Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HomeCarousel/>
      </div>
    );
  }
}

export default App;
