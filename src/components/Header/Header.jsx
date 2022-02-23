import React from 'react'
import { BsCart4 as BasketIcon, BsSearch as Search } from 'react-icons/bs'
import { logo } from '../../constants'

import './Header.css'

const Header = () => {
	return (
		<div className='header'>
			<img src={logo} alt='Amazon Logo' className='header__logo' />

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
				<div className='header__option'>
					<span className='header__option-lineOne'>Hello User</span>
					<span className='header__option-lineTwoe'>Sign In</span>
				</div>
				<div className='header__option'>
					<span className='header__option-lineOne'>Returns</span>
					<span className='header__option-lineTwoe'>&amp; Orders</span>
				</div>
				<div className='header__option'>
					<span className='header__option-lineOne'>Your</span>
					<span className='header__option-lineTwo'>Prime</span>
				</div>
				<div className='header__option-basket'>
					<BasketIcon />
					<span className='header__option-lineTwo header__basketCount'>0</span>
				</div>
			</div>
		</div>
	)
}

export default Header
