import React from 'react'
import ClipboardLink from './ClipboardLink'

const ClipboardLinks = ({ urls }) => {
	return urls.map((url, index) => {
		return (
			<ClipboardLink
				key={index}
				originalUrl={url.original}
				shortenedURL={url.shortened}
			/>
		)
	})
}

export default ClipboardLinks
