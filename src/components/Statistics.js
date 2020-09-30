import React from 'react'
import StatisticsHeader from './StatisticsHeader'
import StatisticsCards from './StatisticsCards'

const Statistics = () => {
	return (
		<div className='section-statistics'>
			<div className='container'>
				<StatisticsHeader />
				<StatisticsCards />
			</div>
		</div>
	)
}

export default Statistics
