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
import Styles from 'react-materialize';
import styles from './Styles/main.css';

const App = () => (
  <Router>
    <header>
      <nav className='react-nav'>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/about">About</Link></span>
        <span><Link to='/recordings'>Recordings</Link></span>
        <span><Link to='/news'>News</Link></span>
        <span><Link to='/contact'>Contact</Link></span>
      </nav>

      <Route exact path="/" component={Landing}/>
      <Route exact path="/about" component={About}/>
      <Route exact path='/recordings' component={Recordings}/>
      <Route exact path='/news' component={News}/>
      <Route exact path='/contact' component={Contact}/>

    </header>
  </Router>
)

export default App;
