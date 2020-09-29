import React, { useState, Fragment } from 'react'

// TODO: Add a section underneath the shortener for showing the newly generated URLS
const Shortener = () => {
	const [url, setUrl] = useState('')

	const request = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ url }),
	}

	const shortenURL = async () => {
		const res = await fetch('https://rel.ink/api/links/', request)

		const data = await res.json()

		console.log(data.hashid)
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
								setUrl(e.target.value)
							}}
						/>
						<button className='input__container--btn btn' onClick={shortenURL}>
							Shorten It!
						</button>
					</div>

					{!url && <p className='input__container--sub'>Please add a link</p>}
				</div>
			</div>
		</Fragment>
	)
}

export default Shortener
