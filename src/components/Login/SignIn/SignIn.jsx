import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../fbConfig'
import './signin.css'
import {
	Box,
	IconButton,
	OutlinedInput,
	InputLabel,
	InputAdornment,
	FormControl,
	FormHelperText,
	TextField
} from '@mui/material'
import {
	AiOutlineEye as Visibility,
	AiOutlineEyeInvisible as VisibilityOff
} from 'react-icons/ai'

const SignIn = () => {
	const navigate = useNavigate()
	const [values, setValues] = useState({
		email: '',
		password: '',
		emailError: false,
		passwordError: false,
		loginError: false,
		showPassword: false
	})

	const signin = async (e) => {
		e.preventDefault()

		//navigate('/loading', { replace: false })

		await signInWithEmailAndPassword(auth, values.email, values.password)
			.then((authenticatedUser) => {
				// Signed in
				const user = authenticatedUser.user
				navigate('/', { replace: true })
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				setValues({ ...values, loginError: true })
				alert(errorCode)
			})
	}

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value })
	}

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword
		})
	}

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	const validateEmail = () => {
		const mailFormat =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

		if (!values.email.match(mailFormat)) {
			setValues({ ...values, emailError: true })
		} else {
			setValues({ ...values, emailError: false })
		}
	}

	return (
		<div className='login__container'>
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
				<TextField
					required
					value={values.email}
					onChange={handleChange('email')}
					onBlur={validateEmail}
					id='outlined-required'
					label='Email'
					helperText={values.emailError ? 'Invalid Email Address' : null}
					error={values.emailError ? true : false}
					placeholder='example@email.com'
					sx={{
						marginTop: '10px',
						width: '100%',
						borderColor: 'var(--orange)'
					}}
				/>
				<FormControl
					required
					variant='outlined'
					className='login__input_password input control'
					sx={{ marginTop: '10px', width: '100%' }}
				>
					<InputLabel htmlFor='outlined-adornment-password'>
						Password
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-password'
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={handleChange('password')}
						error={values.passwordError ? true : false}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'
								>
									{values.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Password'
					/>
					<FormHelperText
						id='outlined-weight-helper-text'
						style={{ color: 'red' }}
					>
						{values.passwordError
							? 'Passwords must be more than 3 characters'
							: null}
					</FormHelperText>
				</FormControl>
				<button className='login__signin_button' onClick={signin}>
					Submit
				</button>
			</Box>
		</div>
	)
}

export default SignIn
