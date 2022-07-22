import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import Logo from '../img/logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
	const [showDropdown, setShowDropdown] = useState(false);
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 750) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		});
	});
	return (
		<Fragment>
			<nav className='navbar_container'>
				<section className='navbar_logo_section'>
					<Link className='navbar_logo_section_link_wrapper' to='/'>
						<img
							className='navbar_logo'
							src={Logo}
							alt='Ride the East Bay Logo'
						/>
						<header className='navbar_header'>Ride The East Bay</header>
					</Link>
				</section>
				{!isMobile && (
					<ul className='navbar_links'>
						<li className='navbar_element'>
							<Link className='navbar_link' to='/'>
								Home
							</Link>
						</li>
						<li className='navbar_element'>
							<Link className='navbar_link' to='/bikes'>
								Bikes
							</Link>
						</li>
						<li className='navbar_element'>
							<Link className='navbar_link' to='/donate'>
								Donate
							</Link>
						</li>
						<li className='navbar_element'>
							<Link className='navbar_link' to='/about'>
								About
							</Link>
						</li>
					</ul>
				)}
				{isMobile && (
					<section className='navbar_dropdown'>
						<i
							className='navbar_dropdown_btn fas fa-bars'
							onClick={() => {
								setShowDropdown(!showDropdown);
							}}
						/>
					</section>
				)}
				{showDropdown && <MobileMenu />}
			</nav>
		</Fragment>
	);
};

export default NavBar;
