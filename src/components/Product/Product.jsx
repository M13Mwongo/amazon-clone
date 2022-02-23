import React from 'react'
import PropTypes from 'prop-types'

import './Product.css'

const Product = ({ id, title, image, price, rating }) => {
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>

				<p className='product__price'>
					<small>&dollar;</small>
					<strong>{price}</strong>
				</p>

				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>🌟</p>
						))}
				</div>
			</div>

			<img src={image} alt='Product' />
			<button>Add to Basket</button>
		</div>
	)
}

export default Product

Product.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string,
	image: PropTypes.any,
	price: PropTypes.number,
	rating: PropTypes.symbol
}
