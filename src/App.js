import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Home, Login } from './components'
import { auth } from './fbConfig'
import { useStateValue } from './contextAPI/StateProvider'

import './App.css'

function App() {
	const [{}, dispatch] = useStateValue()

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log('THE USER IS >>> ', authUser)

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
	}, [])

	return (
		<Router>
			<div className='app'>
				<Header />
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
