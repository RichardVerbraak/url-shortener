import React, { Fragment } from 'react'
import Navigation from './Navigation'
import Header from './Header'
import Statistics from './Statistics'

const Home = () => (
	<Fragment>
		<div className='section-heading'>
			<div className='container'>
				<Navigation />
				<Header />
			</div>
		</div>
		<div className='section-statistics'>
			<Statistics />
		</div>
	</Fragment>
)

export default Home
