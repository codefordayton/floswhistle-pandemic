import React from 'react';
import { Link } from 'react-router-dom';
import './_styles.scss';

const ThankYouPage = props => {
	return (
		<div className="ThankYouPage">
			<h1>Thank You</h1>
			<p>
				Bless you for all you're doing to care for your patients and each other during this pandemic. </p>
						
				<p>Please share this project with your colleagues, and stay in touch!</p>
			
			<div className="socials">
				<a href="https://www.facebook.com/flo.nightingale.3344"><i className="fa fa-facebook-f"></i></a>
				<a href="https://twitter.com/F_NightingaleRN"><i className="fa fa-twitter"></i></a>
				<a href="https://www.instagram.com/FloNightingaleRN/"><i className="fa fa-instagram"></i></a>
			</div>

			<div className="buttons">
				<Link className="button" to="/">Go Back</Link>
			</div>
		</div>
	);
};

export default ThankYouPage;
