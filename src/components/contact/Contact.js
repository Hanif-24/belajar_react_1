import React from 'react';
import "./contact.css";

function Contact (){
	return(
		<section id="contact" className="contact container section">
			<h2 className="section_title">Contact Me</h2>
			<div className="contact_container grid">
				<div className="contact_info">
					<h3 className="contact_title">Let's Talk</h3>
					<p className="contact_subtitle">Dont like form ? go with email</p>
				</div>

				<form className="contact_form">

					<div className="form-group">
						<div className="contact_form-div">
							<input type="text" className="contact_input" placeholder="Input Name"/>
						</div>

						<div className="contact_form-div">
							<input type="email" className="contact_input" placeholder="Input Email"/>
						</div>
					</div>

					<div className="contact_form-div">
						<input type="text" className="contact_input" placeholder="Input Subjek"/>
					</div>
					
					<div className="contact_form-div area-input">
						<textarea cols="30" rows="5" className="contact_input" placeholder="Input Message"></textarea>
					</div>
					
					<button type="submit" className="btn">Send Message</button>
					
				</form>
			</div>
		</section>
	)
}

export default Contact;