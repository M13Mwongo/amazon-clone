import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../fbConfig'

const SignUp = (
	fName,
	setfName,
	lName,
	setlName,
	email,
	setEmail,
	password,
	confirmPassword,
	setPassword,
	setConfirmPassword,
	setLoading
) => {
	const navigate = useNavigate()

	const register = async (e) => {
		e.preventDefault()
		setLoading(true)
		await createUserWithEmailAndPassword(auth, email, password)
			.then((authenticatedUser) => {
				// Signed in
				//const user = auth.user
				navigate('/', { replace: true })
				setLoading(false)
			})
			.catch((error) => {
				alert(error.message)
				console.log(error.message + ' ' + error.code)
			})
	}

	return (
		<div className='login__container'>
			<form>
				<div className='login__input'>
					<h5>First Name</h5>
					<input
						type='text'
						value={fName}
						onChange={(e) => setfName(e.target.value)}
					/>
				</div>
				<div className='login__input'>
					<h5>Last Name</h5>
					<input
						type='text'
						value={lName}
						onChange={(e) => setlName(e.target.value)}
					/>
				</div>
				<div className='login__input'>
					<h5>E-mail</h5>
					<input
						className='login__inputEmail'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='login__input'>
					<h5>Password</h5>
					<input
						className='login__inputPassword'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='login__input'>
					<h5>Confirm Password</h5>
					<input
						className='login__inputPassword'
						type='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
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
			</form>
		</div>
	)
}

export default SignUp
