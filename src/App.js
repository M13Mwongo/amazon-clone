import { Checkout, Header, Home } from './components'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='app'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/checkout' element={<Checkout />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
