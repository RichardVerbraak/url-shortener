import React from 'react'
import ClipboardLink from './ClipboardLink'

const ClipboardLinks = ({ url }) => {
	console.log(url)
	return (
		<div className='links'>
			<ClipboardLink />
		</div>
	)
}

export default ClipboardLinks
