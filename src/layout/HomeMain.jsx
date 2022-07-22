import React, { Fragment } from 'react';
import Button from '../components/Button';
import '../styles/HomeMain.css';

const HomeMain = () => {
	return (
		<Fragment>
			<main className='homemain_container'>
				<div className='homemain_header_wrapper'>
					<header className='homemain_header'>Ride</header>
					<header className='homemain_header'>The</header>
					<header className='homemain_header'>East</header>
					<header className='homemain_header'>Bay</header>
				</div>
				<p className='homemain_slogan'>Making Biking Accessible To Everyone</p>
				<div className='homemain_btn_wrapper'>
					<Button title='See Bikes' link='/bikes' />
					<span className='homemain_btn_span' />
					<Button title='Donate' link='/donate' />
				</div>
			</main>
		</Fragment>
	);
};

export default HomeMain;
