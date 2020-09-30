import React from 'react'

const ClipboardLink = () => {
	return (
		<div className='links__link'>
			<p className='links__link--url'>https://www.frontendmentor.io/</p>
			<p className='links__link--shortened'>https://rel.ink/k4lkyk</p>
			<button className='links__link--copy btn'>Copy</button>
		</div>
	)
}

export default ClipboardLink
