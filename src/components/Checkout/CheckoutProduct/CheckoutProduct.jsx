import React from 'react'
import { useStateValue } from '../../../contextAPI/StateProvider'
import { GrAdd as Add } from 'react-icons/gr'
import { AiOutlineDelete as Delete } from 'react-icons/ai'
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue()

	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id
		})
	}

	return (
		<div className='checkoutProduct'>
			<img className='checkoutProduct__image' src={image} alt={id} />

			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>
					<small>&#36;</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>&#9733;</p>
						))}
				</div>
				<div>
					<button className='checkoutProduct__info_button button__add'>
						Add
						<Add size={18} style={{ marginLeft: '5px' }} />
					</button>
					<button
						onClick={removeFromBasket}
						className='checkoutProduct__info_button button__remove'
					>
						Delete <Delete size={18} style={{ marginLeft: '5px' }} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CheckoutProduct
