import React from 'react';
import './Hello.css';
import { greeting } from '../../portfolio';
import Social from '../Social/Social';
import { Link } from 'react-router-dom';

function Hello() {
	const Fade: any = require("react-reveal/Fade");
/* 	let navigate = useNavigate();
	function resumeClick(){
		navigate("/subPage");
	}
 */	return (
		<Fade bottom duration={800}>
		<section className="section--hello">
			<div className="inner">

				<div className="wrapper">
					<div className="text-title">
						{greeting.title}&nbsp;
						<span className="hello-emoji">👋</span>
					</div>
					<div className="role">
						<span>{greeting.role}</span>
					</div>
					<ul className="text-subtitle">
						{greeting.subTitle.map((item, index) => (
							<li className="subtitle-inner">{item.sub}</li> 
						))}
						{/* <li className="subtitle-inner">{greeting.subTitle}</li> */}
					</ul>
					<div className="social-links">
						<Social />
					</div>
					<div className="wrapper-links">
						<a href="#contact" id="about">Contact &gt;</a>
						<Link to="/subPage">
						<a id="resume" >View Resume &gt;</a>
						</Link>
					</div>
				</div>

			</div>
		</section>
		</Fade>
	);
}
export default Hello;