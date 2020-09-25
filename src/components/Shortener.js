import React from 'react'

const Shortener = () => (
	<div className='shortener__container'>
		<div className='input__container'>
			<input
				type='text'
				className='input__container--input'
				placeholder='Shorten a link here...'
			/>
			<button className='input__container--btn btn'>Shorten It!</button>
		</div>
		<p className='input__container--sub'>Please add a link</p>
	</div>
)

export default Shortener