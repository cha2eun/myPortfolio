import React from 'react';
import Header from './Header/Header';
import Hello from './Hello/Hello';
import Skill from './Skill/Skill';
import Top from './topButton/Top';
import Achievement from './Achievement/Achievement';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import { greeting, skills, experience, projects, achievements, blogs, contactInfo, mainTop } from '../portfolio';
function Main() {
	return (
		<div className="root">
			<Header />
			{greeting.view && <Hello />}
			{skills.view && <Skill />}
			{experience.view && <Experience />}
			{projects.view && <Project />}
			{achievements.view && <Achievement />}
			{blogs.view && <Blog />}
			{contactInfo.view && <Contact />}
			<Footer />
			{mainTop.view && <Top from={mainTop.from}/>}
		</div>
	);
}
export default Main;