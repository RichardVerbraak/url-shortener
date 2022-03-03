import React from 'react'
import ClipboardLink from './ClipboardLink'

const ClipboardLinks = () => {
	// const shortenedURL = localStorage.getItem('shortened')
	// console.log(shortenedURL)

	return (
		<div className='links'>
			<ClipboardLink shortenedURL={'Test'} />
		</div>
	)
}

export default ClipboardLinks
