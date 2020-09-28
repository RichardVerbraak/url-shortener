import React from 'react'
import brandRecognition from '../images/icon-brand-recognition.svg'
import detailedRecords from '../images/icon-detailed-records.svg'
import fullyCustomizable from '../images/icon-fully-customizable.svg'

const Statistics = () => {
	return (
		<div className='container'>
			<div className='statistics__header'>
				<h3 className='statistics__header--heading'>Advanced Statistics</h3>
				<p className='statistics__header--sub'>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<div className='statistics__cards'>
				<div className='card card-1'>
					<div className='card__img-container'>
						<img src={brandRecognition} alt='Graph' className='card__img' />
					</div>
					<h4 className='card__heading'>Brand Recognition</h4>
					<p className='card__sub'>
						Boost your brand recognition with each click. Generic links don't
						mean a thing. Branded links help instill confidence in your content.
					</p>
				</div>
				<div className='card card-2'>
					<div className='card__img-container'>
						<img src={detailedRecords} alt='Clock' className='card__img' />
					</div>
					<h4 className='card__heading'>Detailed Records</h4>
					<p className='card__sub'>
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content helps inform better decisions.
					</p>
				</div>
				<div className='card card-3'>
					<div className='card__img-container'>
						<img src={fullyCustomizable} alt='Tools' className='card__img' />
					</div>
					<h4 className='card__heading'>Fully Customizable</h4>
					<p className='card__sub'>
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Statistics
