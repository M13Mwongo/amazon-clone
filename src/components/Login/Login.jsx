import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Tab, Tabs, Box, Typography } from '@mui/material'
import Signin from './SignIn/SignIn.jsx'
import Signup from './SignUp/SignUp.jsx'
import { icon } from '../../constants'
import { ScaleLoader } from 'react-spinners'
import './Login.css'

function TabPanel({ children, value, index }) {
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	}
}

const Login = () => {
	const navigate = useNavigate()
	const [value, setValue] = useState(0)
	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [fName, setfName] = useState('')
	const [lName, setlName] = useState('')

	const handleChange = (event, newValue) => {
		setValue(newValue)
		setEmail('')
		setPassword('')
		setfName('')
		setlName('')
	}

	return (
		<div className={`login ${loading && `center`}`}>
			{loading ? (
				<ScaleLoader color='orange' height='160px' width='8px' />
			) : (
				<Box sx={{ width: '100%' }} className='login__mainContainer'>
					<Link to='/'>
						<img className='login__logo' src={icon} alt='Webiste logo' />
					</Link>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs
							value={value}
							onChange={handleChange}
							style={{ color: 'var(--darkgreen)' }}
						>
							<Tab label='Sign In' {...a11yProps(0)} />
							<Tab label='Sign Up' {...a11yProps(1)} />
						</Tabs>
					</Box>

					<TabPanel value={value} index={0}>
						<Signin
							email={email}
							password={password}
							setEmail={setEmail}
							setPassword={setPassword}
							loading={loading}
							setLoading={setLoading}
							navigate={navigate}
						/>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Signup
							fName={fName}
							setfName={setfName}
							lName={lName}
							setlName={setlName}
							email={email}
							password={password}
							confirmPassword={confirmPassword}
							setEmail={setEmail}
							setPassword={setPassword}
							setConfirmPassword={setConfirmPassword}
							loading={loading}
							setLoading={setLoading}
							navigate={navigate}
						/>
					</TabPanel>
				</Box>
			)}
		</div>
	)
}

export default Login

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
}
