import React, { Fragment } from 'react';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<Fragment>
			<footer className='footer_container'>
				<section className='footer_foundon_section'>
					<p className='footer_foundon_title'>Found On:</p>
					<ul className='footer_foundon_links'>
						<li className='footer_foundon_icons'>
							<a
								className='footer_foundon_link'
								href='https://www.instagram.com/ridetheeastbay/?igshid=lm061psb2uzw'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-instagram' />
							</a>
						</li>
						<li className='footer_foundon_icons'>
							<div
								className='footer_foundon_link'
								onClick={async () => {
									await navigator.clipboard.writeText(
										'ridetheeastbay@gmail.com'
									);
									alert('Successfully Copied Email to Clipboard');
								}}
							>
								<i className='fas fa-inbox' />
							</div>
						</li>
						<li className='footer_foundon_icons'>
							<a
								className='footer_foundon_link'
								href='https://www.linkedin.com/in/bilal-abraham-3140491b8/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-linkedin' />
							</a>
						</li>
						<li className='footer_foundon_icons'>
							<a
								className='footer_foundon_link'
								href='https://github.com/bilal-abraham/ridetheeastbay'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className='fab fa-github' />
							</a>
						</li>
					</ul>
				</section>
				<hr className='footer_line' />
				<section className='footer_copyright_section'>
					<p className='footer_copyright_title'>© Ride the East Bay 2022</p>
				</section>
			</footer>
		</Fragment>
	);
};

export default Footer;
