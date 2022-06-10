import React from 'react'
import { Box, Grid } from '@mui/material'
import { Product } from '..'
import { heroLanding, products } from '../../constants'

import './Home.css'

const Home = () => {
	return (
		<div className='home'>
			<img src={heroLanding} alt='Landing Page' className='home__image' />

			<Box sx={{ width: '100%' }} className='home__container'>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					className='home__container_grid'
				>
					{products.map(
						(product, index) =>
							index < 2 && (
								<Grid
									item
									sm={12}
									md={6}
									key={product.id}
									className='home__container_grid-product'
								>
									<Product
										id={product.id}
										title={product.title}
										rating={product.rating}
										price={product.price}
										image={product.image}
									/>
								</Grid>
							)
					)}
					{products.map((product, index) =>
						(index > 1) & (index < 5) ? (
							<Grid
								item
								sm={12}
								md={4}
								key={product.id}
								className='home__container_grid-product'
							>
								<Product
									id={product.id}
									title={product.title}
									rating={product.rating}
									price={product.price}
									image={product.image}
								/>
							</Grid>
						) : null
					)}
					{products.map((product, index) =>
						index > 4 ? (
							<Grid
								item
								sm={12}
								md={6}
								key={product.id}
								className='home__container_grid-product'
							>
								<Product
									id={product.id}
									title={product.title}
									rating={product.rating}
									price={product.price}
									image={product.image}
								/>
							</Grid>
						) : null
					)}
				</Grid>
			</Box>
		</div>
	)
}

export default Home
