import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../fbConfig'
import './signup.css'
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

const SignUp = () => {
	const navigate = useNavigate()
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		showPassword: false,
		showConfirmPassword: false,
		errorName: false,
		errorEmail: false,
		errorPassword: false,
		errorConfirmPassword: false
	})

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value })
	}

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword
		})
	}

	const handleClickShowConfirmPassword = () => {
		setValues({
			...values,
			showConfirmPassword: !values.showConfirmPassword
		})
	}

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	const validateName = () => {
		values.name.length < 4
			? setValues({ ...values, errorName: true })
			: setValues({ ...values, errorName: false })
	}

	const validateEmail = () => {
		const mailFormat =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

		if (!values.email.match(mailFormat)) {
			setValues({ ...values, errorEmail: true })
		} else {
			setValues({ ...values, errorEmail: false })
		}
	}

	const validatePassword = () => {
		values.password.length < 6 && values.password.length > 0
			? setValues({ ...values, errorPassword: true })
			: setValues({ ...values, errorPassword: false })

		values.password !== values.confirmPassword
			? setValues({ ...values, errorConfirmPassword: true })
			: setValues({ ...values, errorConfirmPassword: false })
	}

	const validateConfirmPassword = () => {
		values.password !== values.confirmPassword
			? setValues({ ...values, errorConfirmPassword: true })
			: setValues({ ...values, errorConfirmPassword: false })
	}

	const register = async (e) => {
		e.preventDefault()

		await createUserWithEmailAndPassword(auth, values.email, values.password)
			.then((authenticatedUser) => {
				// Signed in
				const user = authenticatedUser.user
				navigate('/', { replace: true })
			})
			.catch((error) => {
				alert(error.message)
				console.log(error.message + ' ' + error.code)
			})
	}

	return (
		<div className='login__container'>
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
				<div>
					<TextField
						required
						value={values.name}
						onChange={handleChange('name')}
						onBlur={validateName}
						error={values.errorName ? true : false}
						id='outlined-required'
						label='Name'
						placeholder='Your Name'
						helperText={
							values.errorName && `Your name must be longer than 3 characters`
						}
						sx={{
							marginTop: '10px',
							width: '100%',
							borderColor: 'var(--orange)'
						}}
					/>
					<TextField
						required
						value={values.email}
						onChange={handleChange('email')}
						onBlur={validateEmail}
						helperText={values.errorEmail ? 'Invalid email address' : null}
						error={values.errorEmail ? true : false}
						id='outlined-required'
						label='Email'
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
						helperText='This is text'
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
							onBlur={validatePassword}
							error={
								values.errorPassword || values.errorConfirmPassword
									? true
									: false
							}
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
						{values.errorPassword && (
							<FormHelperText
								id='outlined-weight-helper-text'
								style={{ color: 'red' }}
							>
								Your password must be longer than 5 characters
							</FormHelperText>
						)}
					</FormControl>
					<FormControl
						required
						variant='outlined'
						sx={{ marginTop: '10px', width: '100%' }}
					>
						<InputLabel htmlFor='outlined-adornment-password'>
							Confirm Password
						</InputLabel>
						<OutlinedInput
							id='outlined-adornment-password'
							type={values.showConfirmPassword ? 'text' : 'password'}
							value={values.confirmPassword}
							onChange={handleChange('confirmPassword')}
							onBlur={validateConfirmPassword}
							error={values.errorConfirmPassword ? true : false}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										onClick={handleClickShowConfirmPassword}
										onMouseDown={handleMouseDownPassword}
										edge='end'
									>
										{values.showConfirmPassword ? (
											<VisibilityOff />
										) : (
											<Visibility />
										)}
									</IconButton>
								</InputAdornment>
							}
							label='Password'
						/>
						{values.errorConfirmPassword && (
							<FormHelperText
								id='outlined-weight-helper-text'
								style={{ color: 'red' }}
							>
								Password must match
							</FormHelperText>
						)}
					</FormControl>
					<button className='login__signin_button' onClick={register}>
						Submit
					</button>
				</div>
			</Box>
		</div>
	)
}

export default SignUp
