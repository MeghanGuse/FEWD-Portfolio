import React, { Component } from 'react';



class News extends Component {
  render() {
    return (
        <main className='meghanguse-main'>
        <article>
          <section>
    		    <h5>September 2017: Recording of song cycle by Chicago composer Suzy Born.</h5>
              <p>Blurb about recording with info about Suzy and John</p>
          </section>
          <br/>
          <section>
    		   <h5>November 6, 2017: Mozart Requiem as part of Chicago College of Performing Art Alumni Chorus.</h5>
              <p>Info about CCPA performance</p>
          </section>
          <br/>
          <section>
    		    <h5>November 19, 2017: Irish Heritage Singers </h5>
              <p>blurb about IHS</p>
          </section>
          <br/>
          <section>
            <h5>December 17, 2017 and December 19,2017: The Grinch Christmas concert with Lakeview Orchestra</h5>
              <p>blurb about Lakeview Orchestra and Vox 3 Collective</p>
          </section>
        </article>
    	  </main>
    );
  }
}


export default News;
