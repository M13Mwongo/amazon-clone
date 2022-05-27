import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../fbConfig'

import './signin.css'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import { AiOutlineEye as Visibility } from 'react-icons/ai'
import { AiOutlineEyeInvisible as VisibilityOff } from 'react-icons/ai'

const SignIn = () => {
	const navigate = useNavigate()
	const [values, setValues] = useState({
		email: '',
		password: '',
		errorStatus: false,
		showPassword: false
	})

	const signin = async (e) => {
		e.preventDefault()

		await signInWithEmailAndPassword(auth, values.email, values.password)
			.then((authenticatedUser) => {
				// Signed in
				const user = authenticatedUser.user
				navigate('/', { replace: true })
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				setValues({ ...values, errorStatus: true })
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

	// const InputField = styled(TextField)(() => ({
	// 	'& label': {
	// 		color: 'var(--orange)'
	// 	},
	// 	'& label.Mui-focused': {
	// 		color: 'var(--orange)'
	// 	},
	// 	'& .MuiFormHelperText-root': {
	// 		color: 'var(--orange)'
	// 	},
	// 	'& .MuiInput-underline:after': {
	// 		borderColor: 'var(--orange)'
	// 	},
	// 	'& .MuiOutlinedInput-root': {
	// 		color: 'var(--orange)',
	// 		backgroundColor: 'var(--lessblack)',

	// 		'& fieldset': {
	// 			color: 'var(--orange)',
	// 			borderColor: 'var(--orange)'
	// 		},
	// 		'&:hover fieldset': {
	// 			color: 'var(--orange)',
	// 			borderColor: 'var(--white)'
	// 		},
	// 		'&.Mui-focused fieldset': {
	// 			color: 'var(--orange)',
	// 			borderColor: 'var(--orange)'
	// 		}
	// 	}
	// }))

	return (
		<div className='login__container'>
			{/* <form>
				<div className='login__input'>
					<h5>E-mail</h5>
					<input
						className='login__inputEmail'
						type='email'
						value={values.email}
						onBlur
					/>
				</div>

				<div className='login__input'>
					<h5>Password</h5>
					<input
						className='login__inputPassword'
						type='password'
						value={values.password}
					/>
				</div>

				<button type='submit' className='login__signInButton' onClick={signin}>
					Sign In
				</button>
			</form> */}
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
				<div>
					<TextField
						required
						value={values.email}
						onChange={handleChange('email')}
						id='outlined-required'
						label='Email'
						placeholder='example@email.com'
						className='login__input_email'
						sx={{ m: 1, width: '25ch' }}
					/>
					<FormControl
						sx={{ m: 1, width: '25ch' }}
						variant='outlined'
						className='login__input_password'
					>
						<InputLabel htmlFor='outlined-adornment-password'>
							Password
						</InputLabel>
						<OutlinedInput
							id='outlined-adornment-password'
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
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
					</FormControl>
					<button>Submit</button>
				</div>
			</Box>
		</div>
	)
}

export default SignIn
