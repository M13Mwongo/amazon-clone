import React from 'react'
import { useStateValue } from '../../contextAPI/StateProvider'

import './Product.css'

const Product = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue()

	const addToBasket = () => {
		// dispatch the item into the data layer
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
		<div className='product' id={id}>
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
							<span key={i} className='product__rating-star'>
								&#9733;
							</span>
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
