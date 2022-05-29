import React from 'react';
import Header from './Header/Header';
import SubHeader from './SubHeader/SubHeader';
import Top from './topButton/Top';
import Home from './HomeButton/Home';
import Footer from './Footer/Footer';
import { subTop, workExp } from '../portfolio';
import WorkExp from './WorkExp/WorkExp';
function SubPage() {
	return (
		<div className="root">
			<SubHeader />
			{workExp.view && <WorkExp />}
			<Footer />
			<Home />
			{subTop.view && <Top from={subTop.from} />}
		</div>
	);
}
export default SubPage;