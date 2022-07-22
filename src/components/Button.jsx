import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

const Button = (props) => {
	return (
		<Fragment>
			<Link to={props.link}>
				<button className='btn'>{props.title}</button>
			</Link>
		</Fragment>
	);
};

export default Button;
