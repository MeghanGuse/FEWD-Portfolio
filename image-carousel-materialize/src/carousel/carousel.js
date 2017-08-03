import React, { Component } from 'react';
import { Button, Card, Row, Col, Carousel } from 'react-materialize';

class HomeCarousel extends Component {
  render() {
    return (
      <Carousel images={[
'https://lorempixel.com/250/250/nature/1',
'https://lorempixel.com/250/250/nature/2',
'https://lorempixel.com/250/250/nature/3',
'https://lorempixel.com/250/250/nature/4',
'https://lorempixel.com/250/250/nature/5'
]} />
    );
  }
}

export default HomeCarousel;
