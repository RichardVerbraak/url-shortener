import React, { Fragment } from 'react'
import img from '../images/illustration-working.svg'

const Header = () => (
	<div className='header'>
		<div className='header__content'>
			<h1 className='header__title'>More than just shorter links</h1>
			<p className='header__sub'>
				Build your brand's recognitions and get detailed insights on how your
				links are performing.
			</p>
			<button className='header__cta btn'>Get Started</button>
		</div>

		<img className='header__img' src={img} alt='Person working behind a desk' />
	</div>
)

export default Header
