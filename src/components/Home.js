import React, { Fragment } from 'react'
import Heading from './Heading'
import Statistics from './Statistics'
import Boost from './Boost'
import Footer from './Footer'
import ClipboardLinks from './ClipboardLinks'

// Could be refactored to something cleaner?
const Home = () => (
	<Fragment>
		<Heading />
		<div className='section-statistics'>
			<ClipboardLinks />
			<Statistics />
		</div>
		<div className='section-boost'>
			<Boost />
		</div>
		<div className='section-footer'>
			<Footer />
		</div>
	</Fragment>
)

export default Home
