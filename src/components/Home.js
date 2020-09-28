import React, { Fragment } from 'react'
import Heading from './Heading'
import Statistics from './Statistics'
import Boost from './Boost'

// Could be refactored to something cleaner?
const Home = () => (
	<Fragment>
		<Heading />
		<div className='section-statistics'>
			<Statistics />
		</div>
		<div className='section-boost'>
			<Boost />
		</div>
	</Fragment>
)

export default Home
