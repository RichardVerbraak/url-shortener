import React from 'react'
import facebookLogo from '../images/icon-facebook.svg'
import twitterLogo from '../images/icon-twitter.svg'
import pinterestLogo from '../images/icon-pinterest.svg'
import instagramLogo from '../images/icon-instagram.svg'

const Footer = () => (
	<div className='section-footer'>
		<div className='container'>
			<div className='footer'>
				<h3 className='footer__brand'>Shortly</h3>
				<div className='footer__links'>
					<div className='footer__box'>
						<h4 className='footer__box--heading'>Features</h4>
						<a href='#!' className='footer__box--link'>
							Link shortening
						</a>
						<a href='#!' className='footer__box--link'>
							Brand Links
						</a>
						<a href='#!' className='footer__box--link'>
							Analytics
						</a>
					</div>
					<div className='footer__box'>
						<h4 className='footer__box--heading'>Resources</h4>
						<a href='#!' className='footer__box--link'>
							Blog
						</a>
						<a href='#!' className='footer__box--link'>
							Developers
						</a>
						<a href='#!' className='footer__box--link'>
							Support
						</a>
					</div>
					<div className='footer__box'>
						<h4 className='footer__box--heading'>Company</h4>
						<a href='#!' className='footer__box--link'>
							About
						</a>
						<a href='#!' className='footer__box--link'>
							Our team
						</a>
						<a href='#!' className='footer__box--link'>
							Careers
						</a>
						<a href='#!' className='footer__box--link'>
							Contact
						</a>
					</div>
				</div>

				<div className='footer__logos'>
					<a className='footer__logos--logo' href='https://facebook.com'>
						<img src={facebookLogo} alt='Facebook logo' />
					</a>
					<a href='https://twitter.com'>
						<img
							src={twitterLogo}
							alt='Twitter logo'
							className='footer__logos--logo'
						/>
					</a>
					<a href='https://pinterest.com'>
						<img
							src={pinterestLogo}
							alt='Pinterest logo'
							className='footer__logos--logo'
						/>
					</a>
					<a href='https://instagram.com'>
						<img
							src={instagramLogo}
							alt='Instagram logo'
							className='footer__logos--logo'
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
)

export default Footer
