import React, { useState, Fragment } from 'react'
import { useEffect } from 'react'
import ClipboardLinks from './ClipboardLinks'

const Shortener = () => {
	// Pull urls from storage and use them in useState (useState runs on mount once)
	const urlsInStorage = localStorage.getItem('urls')
		? JSON.parse(localStorage.getItem('urls'))
		: []

	const [urls, setUrls] = useState(urlsInStorage)

	// For the onChange handler
	const [url, setUrl] = useState('')

	const postRequest = {
		method: 'POST',
	}

	// Set storage again whenever a new url is added
	useEffect(() => {
		localStorage.setItem('urls', JSON.stringify(urls))
	}, [urls])

	const shortenURL = async (e) => {
		e.preventDefault()

		try {
			const res = await fetch(
				`https://api.shrtco.de/v2/shorten?url=${url}`,
				postRequest
			)

			const { result } = await res.json()

			const urlData = {
				shortened: result.short_link3,
				original: result.original_link,
			}

			setUrls([...urls, urlData])
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Fragment>
			<div className='shortener__container'>
				<div className='input__content'>
					<form className='input__container' onSubmit={shortenURL}>
						<input
							type='text'
							className='input__container--input'
							placeholder='Shorten a link here...'
							onChange={(e) => {
								setUrl(e.target.value)
							}}
						/>
						<button className='input__container--btn btn'>Shorten It!</button>
					</form>

					{url && <p className='input__container--sub'>Please add a link</p>}
				</div>
			</div>

			<ClipboardLinks urls={urls} />
		</Fragment>
	)
}

export default Shortener
