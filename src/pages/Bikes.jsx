import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import BikesMain from '../layout/BikesMain';
import NavBar from '../components/NavBar';

const Bikes = () => {
	return (
		<Fragment>
			<NavBar />
			<BikesMain />
			<Footer />
		</Fragment>
	);
};

export default Bikes;
