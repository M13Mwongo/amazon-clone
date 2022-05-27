import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../fbConfig'
import { useStateValue } from '../../contextAPI/StateProvider'
import { Box, SwipeableDrawer, List, Button } from '@mui/material'
import { BsCart4 as BasketIcon, BsSearch as Search } from 'react-icons/bs'
import { BiMenuAltRight as HambugerMenu } from 'react-icons/bi'
import { logo } from '../../constants'
import { IconContext } from 'react-icons'

import './Header.css'

const Header = () => {
	const [{ basket, user }] = useStateValue()
	const [openRight, setOpenRight] = useState(false)

	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut()
		}
	}
	const status = () => {
		console.log(user)
	}

	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setOpenRight(open)
	}

	const navSmallList = () => (
		<Box
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List className='header__mini_link'>
				<Link to='/checkout'>
					<div className='header__option-basket'>
						<IconContext.Provider
							value={{ className: 'header__option-basket-icon' }}
						>
							<BasketIcon />
						</IconContext.Provider>
						<span className='header__option-lineTwo header__basketCount'>
							{basket?.length}
						</span>
					</div>
				</Link>
				<Link to={!user && '/login'}>
					<div className='header__option' onClick={handleAuthenticaton}>
						<span className='header__option-lineOne'>
							Hello {!user ? 'Guest' : user.email}
						</span>
						<span className='header__option-lineTwo'>
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</Link>
				<Link to={user ? '/orders' : '/login'}>
					<div className='header__option'>
						<span className='header__option-lineOne'>Returns</span>
						<span className='header__option-lineTwo'>&amp; Orders</span>
					</div>
				</Link>
				<div className='header__option'>
					<span className='header__option-lineOne'>Your</span>
					<span className='header__option-lineTwo'>Prime</span>
				</div>
			</List>
		</Box>
	)

	return (
		<div className='header'>
			<Link to='/'>
				<img src={logo} alt='Amazon Logo' className='header__logo' />
			</Link>

			<div className='header__search'>
				<input
					className='header__search-input'
					type='text'
					placeholder='Search ...'
				/>
				<span className='header__searchIcon' onClick={status}>
					<Search className='header__searchIcon-icon' />
				</span>
			</div>

			<div className='header__nav'>
				<Link to={!user && '/login'}>
					<div className='header__option' onClick={handleAuthenticaton}>
						<span className='header__option-lineOne'>
							Hello {!user ? 'Guest' : user.email}
						</span>
						<span className='header__option-lineTwo'>
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</Link>
				<Link to={user ? '/orders' : '/login'}>
					<div className='header__option'>
						<span className='header__option-lineOne'>Returns</span>
						<span className='header__option-lineTwo'>&amp; Orders</span>
					</div>
				</Link>
				<div className='header__option'>
					<span className='header__option-lineOne'>Your</span>
					<span className='header__option-lineTwo'>Prime</span>
				</div>
				<Link to='/checkout'>
					<div className='header__option-basket'>
						<BasketIcon />
						<span className='header__option-lineTwo header__basketCount'>
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>

			<div className='header__mini'>
				<Button onClick={toggleDrawer(true)}>
					<IconContext.Provider
						value={{ className: 'header__mini_button', size: '1.4em' }}
					>
						<HambugerMenu />
					</IconContext.Provider>
				</Button>
				<SwipeableDrawer
					anchor='right'
					open={openRight}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
				>
					{navSmallList()}
				</SwipeableDrawer>
			</div>
		</div>
	)
}

export default Header
