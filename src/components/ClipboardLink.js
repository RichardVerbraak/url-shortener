import React from 'react'

const ClipboardLink = ({ url, shortenedUrl }) => {
	return (
		<div className='links__link'>
			<p className='links__link--url'>{url}</p>
			<p className='links__link--shortened'>{shortenedUrl}</p>
			<button className='links__link--copy btn'>Copy</button>
		</div>
	)
}

export default ClipboardLink
