import React, { Component } from 'react';
import HeadshotImage from './images/headshot.jpg';

class About extends Component {
  render() {
    return (
      <div className='meghanguse-body'>
        <section className='about-flex-container'>
          <div>
            <img src={HeadshotImage} className='about-flex-image' alt='Credit: Benjeman Nichols' />
          </div>
          <p className='about-flex-text'>
          Soprano Meghan Guse sang her first professional performance at age 12, when she provided backup vocals for a Japanese children’s television show, and she has been actively performing ever since. She was most recently featured as Zina in Third Eye Theatre Ensemble's production of <span className='opera-names'>Dark Sisters</span>. While earning her Master of Music degree from the Chicago College of Performing Arts, she performed as Flora in <span className='opera-names'>Turn of the Screw</span> and the Nightingale in <span className='opera-names'>L’enfant et les sortilèges</span>. She also played Nerina in the American premiere of Cimarosa’s <span className='opera-names'>L’infedeltà fedele</span> with Millennium Chamber Players. Prior to moving to Chicago, Meghan studied at Illinois Wesleyan University, and performed the roles of the Queen of the Night in <span className='opera-names'>Die Zauberflöte</span> and Jenny in Kurt Weill’s <span className='opera-names'>Down in the Valley</span>. She spent her summers learning several Gilbert and Sullivan roles with Prairie Fire Theatre: Zorah in <span className='opera-names'>Ruddigore</span>, Phyllis in <span className='opera-names'>Iolanthe</span>, and Peep Bo in <span className='opera-names'>The Mikado</span>. Meghan has been an active member of Vox 3 Collective since 2011, specializing in Vox's cabaret series.
          </p>
        </section>
      </div>
    );
  }
}

export default About;
