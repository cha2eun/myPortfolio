import React from 'react';
import './Social.css'
import { socialMediaLinks } from "../../portfolio";

function Social() {
	return(
		<div className="social-media-links">
			{socialMediaLinks.github && <a href={socialMediaLinks.github} className="icon-button github" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-github"></i>
			</a>}
			{socialMediaLinks.linkedin && <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-linkedin"></i>
			</a>}
			
		</div>
	);
}
export default Social;