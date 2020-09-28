import React from 'react'
import Navigation from './Navigation'
import Header from './Header'
import Shortener from './Shortener'

const Heading = () => (
	<div className='section-heading'>
		<div className='container'>
			<Navigation />
			<Header />
			<Shortener />
		</div>
	</div>
)

export default Heading
