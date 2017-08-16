import React, { Component } from 'react';
import Iframe from 'react-iframe'


class Recordings extends Component {
  render() {
    return (
        <body className='meghanguse-body'>
          <article className='recording-flex-container'>
    			  <section className='recording-flex-embed'>
             <Iframe url="https://open.spotify.com/embed/track/0yh6rOLx0Tfhgs9xc66khd"
                width="200px"
                height="300px"
                display="initial"
                position="relative"
                allowFullScreen/>
            </section>
            <section className='recording-flex-embed'>
              <Iframe url="https://open.spotify.com/embed/track/28vhx10aZps3SCmTg5Rtt9"
                width="200px"
                height="300px"
                display="initial"
                position="relative"
                allowFullScreen/>
    			   </section>
             <section className='recording-flex-embed'>
              <Iframe url="https://www.youtube.com/embed/qdyGJUinKGE?ecver=1"
                width="400px"
                height="300px"
                display="initial"
                position="relative"
                allowFullScreen/>
             </section>
          </article>
    	  </body>
    );
  }
}


export default Recordings;
