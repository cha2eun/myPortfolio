import React from 'react';
import './SubHeader.css';
import { greeting, workExp } from '../../portfolio';import { Link } from 'react-router-dom';

function SubHeader() {
	
	const onClickMenu = function(): void {
		if (window.innerWidth < 768) {
			let navMenu = document.getElementById("toggle-nav");
			if (!navMenu) throw new Error("HTML Error!");
			if (navMenu.className === "nav-menu") {
				navMenu.className += " responsive";
			} else {
				navMenu.className = "nav-menu";
			}
		}
	}

	return (
		<header className="header header--section">
			<div className="inner clearfix">

				<div className="header-logo">
					<span>&lt;</span>
					<a href="#">{greeting.username}</a>
					<span>/&gt;</span>
				</div>
				
				<div className="icon">
					<a href="#toggle-nav" className="icon fas fa-bars" onClick={onClickMenu}></a>
				</div>

				<ul className="nav-menu" id="toggle-nav">
					{workExp.view && <li className="nav-list">
						<a href="#career" onClick={onClickMenu}>
							이력
						</a>
					</li>}
					{workExp.view && <li className="nav-list">
						<a href="#certi" onClick={onClickMenu}>
							자격사항
						</a>
					</li>}
					{workExp.view && <li className="nav-list">
						<a href="#intro" onClick={onClickMenu}>
							소개
						</a>
					</li>}
					{workExp.view && <li className="nav-list">
						<a href="#admin" onClick={onClickMenu}>
							경력
						</a>
					</li>}
				</ul>

			</div>
		</header>
	);
}
export default SubHeader;