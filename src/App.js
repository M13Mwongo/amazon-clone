import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Checkout, Header, Home, Login } from './components'
import { LoadingModal } from './constants'
import { auth } from './fbConfig'
import { useStateValue } from './contextAPI/StateProvider'

import './App.css'

function App() {
	const [dispatch] = useStateValue()

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log(
				'THE USER IS >>> ',
				authUser ? authUser.email : 'NOT SIGNED IN'
			)

			if (authUser) {
				// the user just logged in / the user was logged in
				dispatch({
					type: 'SET_USER',
					user: authUser
				})
			} else {
				// the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null
				})
			}
		})
	}, [dispatch])

	return (
		<Router>
			<div className='app'>
				<Header />
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Home />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/loading' element={<LoadingModal />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
