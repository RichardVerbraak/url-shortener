import React, { Fragment } from 'react'
import img from '../images/illustration-working.svg'

const Header = () => (
	<Fragment>
		<div className='header'>
			<h1 className='header__title'>More than just shorter links</h1>
			<p className='header__sub'>
				Build your brand's recognitions and get detailed insights on how your
				links are performing.
			</p>
			<button className='header__cta btn'>Get Started</button>
		</div>
		<img src={img} alt='Person working behind a desk' className='header__img' />
	</Fragment>
)

export default Header
