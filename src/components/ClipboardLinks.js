import React from 'react'

const ClipboardLinks = () => {
	return (
		<div className='links'>
			<div className='links__link'>
				<p className='links__link--url'>https://www.frontendmentior.io</p>
				<p className='links__link--shortened'>https://rel.ink/k4lkyk</p>
				<button className='links__link--copy btn'>Copy</button>
			</div>
		</div>
	)
}

export default ClipboardLinks
