import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Tab, Tabs, Box, Typography } from '@mui/material'
import Signin from './SignIn/SignIn.jsx'
import Signup from './SignUp/SignUp.jsx'
import { icon } from '../../constants'
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
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className='login center loading'>
			<Box sx={{ width: '100%' }} className='login__mainContainer'>
				<Link to='/'>
					<img className='login__logo' src={icon} alt='logo' />
				</Link>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs
						value={value}
						onChange={handleChange}
						style={{
							backgroundColor: 'var(--purewhite)',
							padding: '10px 20px'
						}}
					>
						<Tab label='Sign In' {...a11yProps(0)} />
						<Tab label='Sign Up' {...a11yProps(1)} />
					</Tabs>
				</Box>

				<TabPanel value={value} index={0}>
					<Signin />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Signup />
				</TabPanel>
			</Box>
		</div>
	)
}

export default Login

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
}
