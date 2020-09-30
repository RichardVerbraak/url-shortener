import React, { useState, Fragment } from 'react'
import ClipboardLinks from './ClipboardLinks'

// DO something completely different than you have now!
// Figure out how to use the value from the input when button is clicked, onChange does not work with current idea
const Shortener = () => {
	const [url, setUrl] = useState([])

	const request = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ url }),
	}

	const shortenURL = async () => {
		const res = await fetch('https://rel.ink/api/links/', request)

		const data = await res.json()

		// Store the urls in localstorage and pull them out of localstorage in clipboard component

		console.log(url)
		// localStorage.setItem('url', url)
		// localStorage.setItem('shortened', `https://rel.ink/${data.hashid}`)
		console.log(localStorage)
	}

	return (
		<Fragment>
			<div className='shortener__container'>
				<div className='input__content'>
					<div className='input__container'>
						<input
							type='text'
							className='input__container--input'
							placeholder='Shorten a link here...'
							onChange={(e) => {
								setUrl([...url, e.target.value])
							}}
						/>
						<button className='input__container--btn btn' onClick={shortenURL}>
							Shorten It!
						</button>
					</div>

					{!url && <p className='input__container--sub'>Please add a link</p>}
				</div>
			</div>
			{url && <ClipboardLinks url={url} />}
		</Fragment>
	)
}

export default Shortener
