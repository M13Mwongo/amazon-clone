import React, { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import './Test.css'

const Test = () => {
	const [loading, setLoading] = useState(false)

	const submitHandler = (e) => {
		e.preventDefault()
		setLoading(true)
		console.log(loading)
		setTimeout(() => {
			setLoading(false)
			console.log(loading)
		}, 3000)
	}

	return (
		<div className='test'>
			{loading ? (
				<ScaleLoader color='orange' height='160px' width='8px'></ScaleLoader>
			) : (
				<form action=''>
					<p>This text will be here as a placeholder</p>
					<button type='submit' onClick={submitHandler}>
						Submit
					</button>
				</form>
			)}
		</div>
	)
}

export default Test
