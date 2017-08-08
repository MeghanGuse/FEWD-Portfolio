import React, { Component } from 'react';
import HomeCarousel from './carousel/carousel.js';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <HomeCarousel/>
      </div>
    );
  }
}
<body>
  <section className='flex-container'>
  <div className='flex-image'>
    <img src="images/headshot.jpg" class='flex-image' alt='Credit: Benjeman Nichols'/>
  </div>
    <p className='text'>Soprano Meghan Guse sang her first professional performance at age 12, when she provided backup vocals for a Japanese children’s television show, and she has been actively performing ever since. She was most recently featured as Zina in Third Eye Theatre Ensemble's production of <span class='italics'>Dark Sisters</span>. While earning her Master of Music degree from the Chicago College of Performing Arts, she performed as Flora in <span class='italics'>Turn of the Screw</span> and the Nightingale in <span class='italics'>L’enfant et les sortilèges</span>. She also played Nerina in the American premiere of Cimarosa’s <span class='italics'>L’infedeltà fedele</span> with Millennium Chamber Players. Prior to moving to Chicago, Meghan studied at Illinois Wesleyan University, and performed the roles of the Queen of the Night in <span class='italics'>Die Zauberflöte</span> and Jenny in Kurt Weill’s <span class='italics'>Down in the Valley</span>. She spent her summers learning several Gilbert and Sullivan roles with Prairie Fire Theatre: Zorah in <span class='italics'>Ruddigore</span>, Phyllis in <span class='italics'>Iolanthe</span>, and Peep Bo in <span class='italics'>The Mikado</span>. Meghan has been an active member of <a href="www.vox3.org"> Vox 3 Collective </a> since 2011, specializing in Vox's cabaret series.</p>
    </section>
  <footer>
    <h6>Meghan Guse&copy; 2017</h6>
    <img src='nucleo-social-icons/social-1_logo-facebook.svg' />
    </footer>
</body>

export default Landing;
