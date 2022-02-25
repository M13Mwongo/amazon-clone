import React from 'react'
import { Product } from '..'
import { heroLanding, products } from '../../constants'

import './Home.css'

const Home = () => {
	return (
		<div className='home'>
			<img src={heroLanding} alt='Landing Page' className='home__image' />

			<div className='home__row'>
				{products.map(
					(product, index) =>
						index < 2 && (
							<Product
								key={product.id}
								title={product.title}
								rating={product.rating}
								price={product.price}
								image={product.image}
							/>
						)
				)}
			</div>
			<div className='home__row'>
				{products.map((product, index) =>
					(index > 1) & (index < 5) ? (
						<Product
							key={product.id}
							title={product.title}
							rating={product.rating}
							price={product.price}
							image={product.image}
						/>
					) : null
				)}
			</div>
			<div className='home__row'>
				{products.map((product, index) =>
					index > 4 ? (
						<Product
							key={product.id}
							title={product.title}
							rating={product.rating}
							price={product.price}
							image={product.image}
						/>
					) : null
				)}
			</div>
		</div>
	)
}

export default Home
