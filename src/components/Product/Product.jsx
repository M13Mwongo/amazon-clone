import React from 'react'
import PropTypes from 'prop-types'

import './Product.css'
import { useStateValue } from '../../contextAPI/StateProvider'

const Product = ({ id, title, image, price, rating }) => {
	const [{}, dispatch] = useStateValue()
	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating
			}
		})
	}
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p hidden>{id}</p>
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

			<button className='product__button' onClick={addToBasket}>
				Add to Basket
			</button>
		</div>
	)
}

export default Product

Product.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string,
	image: PropTypes.any,
	price: PropTypes.number,
	rating: PropTypes.symbol
}
