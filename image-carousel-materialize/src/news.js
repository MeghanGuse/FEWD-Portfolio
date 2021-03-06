import React, { Component } from 'react';
import moreIcon from './images/ic_more_horiz_black_24dp_1x.png';



class News extends Component {
  render() {
    return (
      <main className='meghanguse-news'>
      <ul className='collapsible' data-collapsible='accordion'>
        <li>
            <p className="collapsible-header">September 2017: Recording - works by composer Suzy Born
              <img src= {moreIcon} className='more-icon' alt='more' />
            </p>
            <p className='collapsible-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed turpis tincidunt id aliquet risus. Mauris ultrices eros in cursus turpis massa tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras. Tellus molestie nunc non blandit. Lacinia quis vel eros donec ac odio tempor. Ut placerat orci nulla pellentesque dignissim enim. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Est lorem ipsum dolor sit amet consectetur adipiscing. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Enim praesent elementum facilisis leo vel fringilla. Aenean euismod elementum nisi quis eleifend quam. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus.</p>
        </li>
        <br/>
    		<li>
            <p className="collapsible-header">November 6, 2017: Mozart Requiem as part of Chicago College of Performing Art Alumni Chorus
              <img src= {moreIcon} className='more-icon' alt='more' />
            </p>
            <p className='collapsible-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed turpis tincidunt id aliquet risus. Mauris ultrices eros in cursus turpis massa tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras. Tellus molestie nunc non blandit. Lacinia quis vel eros donec ac odio tempor. Ut placerat orci nulla pellentesque dignissim enim. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Est lorem ipsum dolor sit amet consectetur adipiscing. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Enim praesent elementum facilisis leo vel fringilla. Aenean euismod elementum nisi quis eleifend quam. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus.</p>
        </li>
        <br/>
        <li>
            <p className="collapsible-header">November 19, 2017: Irish Heritage Singers
              <img src= {moreIcon} className='more-icon' alt='more' />
            </p>
            <p className='collapsible-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed turpis tincidunt id aliquet risus. Mauris ultrices eros in cursus turpis massa tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras. Tellus molestie nunc non blandit. Lacinia quis vel eros donec ac odio tempor. Ut placerat orci nulla pellentesque dignissim enim. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Est lorem ipsum dolor sit amet consectetur adipiscing. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Enim praesent elementum facilisis leo vel fringilla. Aenean euismod elementum nisi quis eleifend quam. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus.</p>
         </li>
        <br/>
        <li>
            <p className="collapsible-header">December 17, 2017 and December 19,2017: The Grinch Christmas concert with Lakeview Orchestra
              <img src= {moreIcon} className='more-icon' alt='more' />
            </p>
            <p className='collapsible-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed turpis tincidunt id aliquet risus. Mauris ultrices eros in cursus turpis massa tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras. Tellus molestie nunc non blandit. Lacinia quis vel eros donec ac odio tempor. Ut placerat orci nulla pellentesque dignissim enim. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Est lorem ipsum dolor sit amet consectetur adipiscing. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Enim praesent elementum facilisis leo vel fringilla. Aenean euismod elementum nisi quis eleifend quam. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus.</p>
        </li>
        </ul>
    	  </main>
    );
  }
}


export default News;
