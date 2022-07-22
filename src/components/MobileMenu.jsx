import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MobileMenu.css';

const MobileMenu = () => {
	const MobileMenuItem = (props) => {
		return (
			<Link to={props.route} className='dropdown_menu_item'>
				{props.children}
			</Link>
		);
	};
	return (
		<Fragment>
			<div className='dropdown_container'>
				<MobileMenuItem route='/about'>About</MobileMenuItem>
				<MobileMenuItem route='/bikes'>Bikes</MobileMenuItem>
				<MobileMenuItem route='/donate'>Donate</MobileMenuItem>
				<MobileMenuItem route='/about'>About</MobileMenuItem>
			</div>
		</Fragment>
	);
};

export default MobileMenu;
