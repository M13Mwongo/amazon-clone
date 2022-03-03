import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Home } from './components'

import './App.css'

function App() {
	return (
		<div className='app'>
			<Header />
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
