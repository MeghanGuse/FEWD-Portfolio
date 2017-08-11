import React, { Component } from 'react';


class Contact extends Component {
  render() {
    let altText = 'This is a placeholder';
    return (
    <main className='meghan.guse-main'>
      <section className='contactform-flex-container'>
    		<form className='contactform-form' action='https://www.enformed.io/aqpqxmau'>
    			<h3>Questions? Concerns?  Jokes? Contact me!</h3>
    				Name: <br />
    				<input type='text' name='name'/><br />
    				Email: <br />
    				<input type='text' email='email'/><br />
    				Subject: <br />
    				<input type='text' subject='subject'/><br />
    				Message: <br />
    				<textarea name='message' rows='10' cols='50'></textarea><br />
    				<button type='submit'>Send Email</button>
    				<input type='hidden' name='*redirect' value='https://www.meghanguse.com/index.html' />
    				<input type='hidden' name='*honeypot' />
    		</form>
    		<div className='contactform-flex-image'>
    			<img src="https://media3.giphy.com/media/sDBvUEcJjkZO/200_s.gif" alt="Contact"/>
    			<h3>Thank you!</h3>
    		</div>
    	</section>
    </main>
    );
  }
}


export default Contact;
