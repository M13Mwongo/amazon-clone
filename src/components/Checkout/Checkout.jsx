import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import FlipMove from 'react-flip-move'
import Subtotal from './Subtotal/Subtotal'
import { useStateValue } from '../../contextAPI/StateProvider'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'
import { banner } from '../../constants'

import './Checkout.css'

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue()

	const removeItem = () => {}

	useEffect(() => {}, [])

	return (
		<Box className='checkout' sx={{ flexGrow: 1 }}>
			<Grid container xs={12} md={9}>
				<img className='checkout__ad' src={banner} alt='Banner' />

				<div>
					<h3>
						Hello,{' '}
						{user
							? user.email
							: `Guest. Please sign in to purchase your products`}
					</h3>
					<h2 className='checkout__title'>Shopping Basket</h2>

					<FlipMove>
						{basket.map((item) => (
							<Box sx={{ flexGrow: 1 }} key={item.id}>
								<Grid
									container
									spacing={2}
									flex='row'
									justifyContent='center'
									alignItems='center'
								>
									<Grid item xs={12}>
										<CheckoutProduct
											key={item.id}
											id={item.id}
											title={item.title}
											image={item.image}
											price={item.price}
											rating={item.rating}
										/>
									</Grid>
								</Grid>
							</Box>
						))}
					</FlipMove>
				</div>
			</Grid>

			<Grid container xs={12} md={3}>
				<Subtotal />
			</Grid>
		</Box>
	)
}

export default Checkout
