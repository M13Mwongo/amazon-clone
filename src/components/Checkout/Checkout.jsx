import React from 'react'
import Subtotal from './Subtotal/Subtotal'
import { useStateValue } from '../../contextAPI/StateProvider'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'
import { banner } from '../../constants'

import './Checkout.css'

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue()

	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img className='checkout__ad' src={banner} alt='Banner' />

				<div>
					<h3>Hello, {user?.email}</h3>
					<h2 className='checkout__title'>Your shopping Basket</h2>

					{basket.map((item) => (
						<CheckoutProduct
							key={item.id}
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>

			<div className='checkout__right'>
				<Subtotal />
			</div>
		</div>
	)
}

export default Checkout
