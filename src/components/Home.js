import React, { Fragment } from 'react'
import Heading from './Heading'
import Statistics from './Statistics'

// Could be refactored to something cleaner?
const Home = () => (
	<Fragment>
		<Heading />
		<div className='section-statistics'>
			<Statistics />
		</div>
	</Fragment>
)

export default Home
