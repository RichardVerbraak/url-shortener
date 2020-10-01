import React, { useState, Fragment } from 'react'
import ClipboardLinks from './ClipboardLinks'

// DO something completely different than you have now!
// Figure out how to use the value from the input when button is clicked, onChange does not work with current idea
const Shortener = () => {
	const [urls, setUrls] = useState([])
	const [url, setUrl] = useState('')

	const postRequest = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ url }),
	}

	const shortenURL = async (e) => {
		e.preventDefault()

		const res = await fetch('https://rel.ink/api/links/', postRequest)
		const data = await res.json()

		// I misused the spread operator by spreading out the url like ...url, whoops.
		setUrls([...urls, url])

		// localStorage.setItem('urls', JSON.stringify(urls))
		localStorage.setItem('shortened', `https://rel.ink/${data.hashid}`)

		console.log(localStorage)
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
			<ClipboardLinks />
		</Fragment>
	)
}

export default Shortener
