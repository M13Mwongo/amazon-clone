import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../fbConfig'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth'
import { icon } from '../../constants'

import './Login.css'

const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signIn = (e) => {
		e.preventDefault()
		signInWithEmailAndPassword(auth, email, password)
			.then((authenticatedUser) => {
				// Signed in
				//const user = auth.user
				navigate('/', { replace: true })
			})
			.catch((error) => {
				alert(error.message)
			})
	}

	const register = (e) => {
		e.preventDefault()
		createUserWithEmailAndPassword(auth, email, password)
			.then((authenticatedUser) => {
				// Signed in
				//const user = auth.user
				navigate('/', { replace: true })
			})
			.catch((error) => {
				alert(error.message)
				console.log(error.message + ' ' + error.code)
			})
	}

	return (
		<div className='login'>
			<div className='login__mainContainer'>
				<Link to='/'>
					<img className='login__logo' src={icon} alt='Webiste logo' />
				</Link>

				<div className='login__container'>
					<h1>Sign-in</h1>

					<form>
						<div className='login__input'>
							<h5>E-mail</h5>
							<input
								className='login__inputEmail'
								type='text'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<span className='login__inputSpan'>* Required</span>
						</div>

						<div className='login__input'>
							<h5>Password</h5>
							<input
								className='login__inputPassword'
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<span className='login__inputSpan'>* Required</span>
						</div>

						<button
							type='submit'
							className='login__signInButton'
							onClick={signIn}
						>
							Sign In
						</button>
					</form>

					<p>
						By signing-in to the AMAZON FAKE CLONE, you agree to the{' '}
						<a href='/' className='fake'>
							conditions of Use &amp; sale
						</a>
						. Please see our{' '}
						<a href='/' className='fake'>
							Privacy Notice
						</a>
						, our Cookies Notice and our Interest-Based Ads Notice.
					</p>

					<button className='login__registerButton' onClick={register}>
						Create your Amazon Account
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
