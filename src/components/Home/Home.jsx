import React from 'react'
import { Product } from '..'

import { heroLanding, products } from '../../constants'

import './Home.css'

const Home = () => {
	return (
		<div className='home'>
			<img src={heroLanding} alt='Landing Page' className='home__image' />

			<div className='home__row'>
				<Product
					key={products.id}
					title={products.title}
					image={products.image}
					rating={products.rating}
					price={products.price}
				/>
			</div>
		</div>
	)
}

export default Home
