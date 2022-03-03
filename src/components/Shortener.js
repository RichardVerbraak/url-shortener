import React, { useState, Fragment } from 'react'
import ClipboardLinks from './ClipboardLinks'

const Shortener = () => {
	const [urls, setUrls] = useState([])
	const [url, setUrl] = useState('')

	const postRequest = {
		method: 'POST',
	}

	const shortenURL = async (e) => {
		e.preventDefault()

		try {
			const res = await fetch(
				`https://api.shrtco.de/v2/shorten?url=${url}`,
				postRequest
			)

			const data = await res.json()

			localStorage.setItem()
		} catch (error) {
			console.log(error)
		}

		// I misused the spread operator by spreading out the url like ...url, whoops.
		setUrls([...urls, url])

		// localStorage.setItem('urls', JSON.stringify(urls))
		// localStorage.setItem('shortened', `https://rel.ink/${data.hashid}`)

		// console.log(localStorage)
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
