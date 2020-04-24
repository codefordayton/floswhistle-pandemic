import React from 'react';
import { HashLink } from 'react-router-hash-link';


const HomePage = props => {
	return (
		<div className="HomePage">
			<div className="Hero">
				<div className="HeroColumn">
					<HashLink className="HeroButton" to="#social">PLEASE<br/>STAND BY<br/><br/>Flo is<br/>pivoting</HashLink>
				</div>
			</div>

			<div className="content">
				<p>
					Flo’s Whistle is being reconfigured as <strong>Flo’s Whistle - Pandemic</strong>. As always, the Whistle will be a secure, anonymous reporting platform, but we’re expanding our reporting capacity and focusing on two key coronavirus issues - shortages and testing. In addition to nurses, we’re inviting all licensed/certified direct care providers, working in the pre-hospital, acute cate and long term care settings to report, once a day, on these issues.</p>
				<p>
					Direct care providers can see, from within the system, where dangers lie. As witnesses on the front lines, if we can report our first hand knowledge, we can contribute to a fuller understanding of the pandemic situation as it unfolds. Follow for launch announcement.</p>
			</div>

			<div id="social" className="social">
				<p>
					Thank you for all you’re doing to care for your patients and each other during this pandemic.
                        	</p>

                        	<div className="socials">
                                	<a href="https://www.facebook.com/flo.nightingale.3344"><i className="fa fa-facebook-f"></i></a>
                                	<a href="https://twitter.com/F_NightingaleRN"><i className="fa fa-twitter"></i></a>
                                	<a href="https://www.instagram.com/FloNightingaleRN/"><i className="fa fa-instagram"></i></a>
                                	<a href="mailto:flo@codefordayton.org"><i className="fa fa-envelope"></i></a>
                        	</div>
			</div>
		</div>
	);
};

export default HomePage;
