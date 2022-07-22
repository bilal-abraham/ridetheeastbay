import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import DonateMain from '../layout/DonateMain';
import NavBar from '../components/NavBar';

const Donate = () => {
	return (
		<Fragment>
			<NavBar />
			<DonateMain />
			<Footer />
		</Fragment>
	);
};

export default Donate;
