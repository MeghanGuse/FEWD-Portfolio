import React, { Component } from 'react';
import Iframe from 'react-iframe'


class Recordings extends Component {
  render() {
    return (
      <div className='meghanguse-body'>
        <h1 className='recording-header'>Recordings</h1>
          <article className='recording-flex-container'>
    			  <section className='recording-flex-embed'>
             <Iframe url="https://open.spotify.com/embed/track/0yh6rOLx0Tfhgs9xc66khd?wmode=transparent"
              allowtransparency="true"
                frameborder="0"
                wmode="Opaque"
                width="200px"
                height="300px"
                display="initial"
                position="relative"
                allowFullScreen/>
            </section>
          <div className='recording-spacer'>
          </div>
            <section className='recording-flex-embed'>
              <Iframe url="https://open.spotify.com/embed/track/28vhx10aZps3SCmTg5Rtt9?wmode=transparent"
                width="200px"
                wmode="Opaque"
                frameborder="0"
                height="300px"
                display="initial"
                position="relative"
                allowFullScreen/>
    			   </section>
            <div className='recording-spacer'>
            </div>
             <section className='recording-flex-embed'>
              <Iframe url="https://www.youtube.com/embed/qdyGJUinKGE?ecver=1?wmode=transparent"
                frameborder="0"
                wmode="Opaque"
                width="300px"
                height="300px"
                display="initial"
                position="relative"
                allowFullScreen/>
             </section>
          </article>
    	 </div>
    );
  }
}


export default Recordings;
