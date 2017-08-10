import React, { Component } from 'react';


class Recordings extends Component {
  render() {
    return (
      <body>
        <main>
    		  <article>
    			   <section className='text'>Videos and Clips
    				     <iframe src="https://open.spotify.com/embed/track/0yh6rOLx0Tfhgs9xc66khd" width="200" height="280" frameborder="0" allowtransparency="true" title='spotify'></iframe>
    				     <iframe src="https://open.spotify.com/embed/track/28vhx10aZps3SCmTg5Rtt9" width="200" height="280" frameborder="0" allowtransparency="true" title='spotify2'></iframe>
    			   </section>
    			   <section className='text'>Purchase
    				     <ul>
    					        <li><span href="https://itunes.apple.com/album/spirit-within-songs-faith/id598749097?v0=9988&ign-mpt=uo%3D1"> iTunes</span></li>
    					        <li><span href="https://store.cdbaby.com/cd/vox3collective2"> CD Baby</span></li>
    				     </ul>
    			   </section>
    		  </article>
    	  </main>
    	  <footer>
    		  <h6>Meghan Guse&copy; 2017</h6>
    	  </footer>
      </body>
    );
  }
}


export default Recordings;
