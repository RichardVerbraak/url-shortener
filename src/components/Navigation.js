import React from 'react'

const Navigation = () => {
	return (
		<div className='nav'>
			<h3 className='nav__brand'>Shortly</h3>
			<ul className='nav__list'>
				<li className='nav__list--item'>Features</li>
				<li className='nav__list--item'>Pricing</li>
				<li className='nav__list--item'>Resources</li>
			</ul>
			<div className='nav__buttons'>
				<button className='nav__buttons--login'>Login</button>
				<button className='nav__buttons--signup'>Sign Up</button>
			</div>
		</div>
	)
}

export default Navigation
