import React, { Fragment } from 'react'
import Navigation from './Navigation'
import Header from './Header'
import Statistics from './Statistics'
import Shortener from './Shortener'

// Could be refactored to something cleaner?
const Home = () => (
	<Fragment>
		<div className='section-heading'>
			<div className='container'>
				<Navigation />
				<Header />
				<Shortener />
			</div>
		</div>
		<div className='section-statistics'>
			<Statistics />
		</div>
	</Fragment>
)

export default Home
