import React from 'react';
import Header from './Header/Header';
import Top from './topButton/Top';
import Experience from './Experience/Experience';
import Home from './HomeButton/Home';
import Footer from './Footer/Footer';
import { experience } from '../portfolio';
function SubPage() {
	return (
		<div className="root">
			<Header />
			{experience.view && <Experience />}
			<Footer />
			<Home />
			<Top />
		</div>
	);
}
export default SubPage;