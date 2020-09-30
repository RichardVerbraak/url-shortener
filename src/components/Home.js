import React, { Fragment } from 'react'
import Heading from './Heading'
import Statistics from './Statistics'
import Boost from './Boost'
import Footer from './Footer'

// Could be refactored to something cleaner?
const Home = () => (
	<Fragment>
		<Heading />
		<Statistics />
		<Boost />
		<Footer />
	</Fragment>
)

export default Home
