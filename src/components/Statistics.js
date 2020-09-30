import React from 'react'
import StatisticsHeader from './StatisticsHeader'
import StatisticsCards from './StatisticsCards'
import Shortener from './Shortener'

const Statistics = () => {
	return (
		<div className='section-statistics'>
			<div className='container'>
				<Shortener />
				<StatisticsHeader />
				<StatisticsCards />
			</div>
		</div>
	)
}

export default Statistics
