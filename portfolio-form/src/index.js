import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//var Coverflow = require('react-coverflow');
import Coverflow from 'react-coverflow';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Coverflow width="960" height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
    >
    <img src='https://media1.fdncms.com/chicago/imager/u/magnum/24079543/dark_sisters-1.jpg' alt='credit: Aaron Hunt' data-action="https://media1.fdncms.com/chicago/imager/u/magnum/24079543/dark_sisters-1.jpg" />
    <img src='https://www.screencast.com/t/bQWtTnisrt' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='https://www.screencast.com/t/hdEq8JHDaGL' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='https://www.screencast.com/t/hdEq8JHDaGL' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
  </Coverflow>,

  document.querySelector('.content')
);

registerServiceWorker();
