import React from 'react'

const ClipboardLink = ({ originalUrl, shortenedURL }) => {
	return (
		<div className='links__link'>
			<p className='links__link--url'>{originalUrl}</p>
			<p className='links__link--shortened'>{shortenedURL}</p>
			<button className='links__link--copy btn'>Copy</button>
		</div>
	)
}

export default ClipboardLink
