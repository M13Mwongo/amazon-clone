import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../fbConfig'

const SignIn = ({
	email,
	setEmail,
	password,
	setPassword,
	setLoading,
	navigate
}) => {
	const signin = async (e) => {
		e.preventDefault()
		setLoading(true)
		await signInWithEmailAndPassword(auth, email, password)
			.then((authenticatedUser) => {
				// Signed in
				//const user = auth.user
				navigate('/', { replace: true })
				setLoading(false)
			})
			.catch((error) => {
				alert(error.message)
			})
	}

	return (
		<div className='login__container'>
			<form>
				<div className='login__input'>
					<h5>E-mail</h5>
					<input
						className='login__inputEmail'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onBlur
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

				<button type='submit' className='login__signInButton' onClick={signin}>
					Sign In
				</button>
			</form>
		</div>
	)
}

export default SignIn
