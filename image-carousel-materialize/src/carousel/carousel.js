import React, { Component } from 'react';
import { Button, Card, Row, Col, Carousel } from 'react-materialize';
import HeadshotImage from '../images/headshot.jpg';
import Maskarade from '../images/maskarade.png';
import BachNyanCat from '../images/nyan.jpg';
import SportsMedley from '../images/sports.jpg';


class HomeCarousel extends Component {
  render() {
    return (
      <Carousel images={[
HeadshotImage,
SportsMedley,
Maskarade,
BachNyanCat,
'https://media1.fdncms.com/chicago/imager/u/magnum/24079543/dark_sisters-1.jpg'
]} />
    );
  }
}

export default HomeCarousel;
