import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../fbConfig'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
import { Box, Tabs, Tab } from '@mui/material'
import { icon } from '../../constants'
import { ScaleLoader } from 'react-spinners'

import './Login.css'

const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	return (
		<div className='login'>
			{loading ? (
				<ScaleLoader color='orange' height='160px' width='8px' />
			) : (
				<div className='login__mainContainer'>
					<Link to='/'>
						<img className='login__logo' src={icon} alt='Webiste logo' />
					</Link>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label='basic tabs example'
						>
							<Tab label='Item One' {...a11yProps(0)} />
							<Tab label='Item Two' {...a11yProps(1)} />
							<Tab label='Item Three' {...a11yProps(2)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						Item One
					</TabPanel>
					<TabPanel value={value} index={1}>
						Item Two
					</TabPanel>
					<SignIn
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
					/>
				</div>
			)}
		</div>
	)
}

export default Login
