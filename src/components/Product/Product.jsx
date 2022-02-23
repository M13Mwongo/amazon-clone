import React from 'react'
import PropTypes from 'prop-types'

import './Product.css'

const Product = ({ id, title, image, price, rating }) => {
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small className='product__price-dollar'>&#36;</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p className='product__rating-star'>&#9733;</p>
						))}
				</div>
			</div>

			<img src={image} className='product__image' alt={id} />

			<button className='product__button'>Add to Basket</button>
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
