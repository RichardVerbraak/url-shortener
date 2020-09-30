import React from 'react'
import ClipboardLink from './ClipboardLink'

const ClipboardLinks = () => {
	const urls = localStorage.getItem('url')
	console.log(urls)

	return (
		<div className='links'>
			<ClipboardLink />
		</div>
	)
}

export default ClipboardLinks
