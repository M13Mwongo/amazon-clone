import React from 'react'
import { auth } from '../../fbConfig'
import { useStateValue } from '../../contextAPI/StateProvider'
import { Link } from 'react-router-dom'
import { BsCart4 as BasketIcon, BsSearch as Search } from 'react-icons/bs'
import { logo } from '../../constants'
import './Header.css'

const Header = () => {
	const [{ basket, user }] = useStateValue()

	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut()
		}
	}

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
				<span className='header__searchIcon'>
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
		</div>
	)
}

export default Header
