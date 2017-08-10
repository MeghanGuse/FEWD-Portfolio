import React, { Component } from 'react';
import logo from './placeholderlogo.jpg';
import './App.css';
import HomeCarousel from './carousel/carousel.js';
import Landing from './landing.js';
import About from './about.js';
import Recordings from './recordings.js';
import News from './news.js';
import Contact from './contact.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const App = () => (
  <Router>
    <header>
      <nav>
        <a><Link to="/">Home</Link></a>
        <a><Link to="/about">About</Link></a>
        <a><Link to='/recordings'>Recordings</Link></a>
        <a><Link to='/news'>News</Link></a>
        <a><Link to='/contact'>Contact</Link></a>
      </nav>

      <Route exact path="/" component={Landing}/>
      <Route exact path="./about.js" component={About}/>
      <Route exact path='./recordings.js' component={Recordings}/>
      <Route exact path='./news.js' component={News}/>
      <Route exact path='./contact.js' component={Contact}/>

    </header>
  </Router>
)

export default App;
