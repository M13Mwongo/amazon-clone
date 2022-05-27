//File will contain all static data that will be exported from here
import React, { useState } from 'react'
import { Box, Button, Fade, Modal } from '@mui/material'
import { PuffLoader } from 'react-spinners'

//Images to be imported
import logo from '../assets/amazon.png'
import icon from '../assets/amazon_icon.png'
import banner from '../assets/banner.jpg'
import heroLanding from '../assets/heroLanding.jpg'

//Products to be displayed on the Products Component.
const products = [
	{
		id: '12321341',
		title:
			'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
		price: 11.96,
		rating: 5,
		image:
			'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
	},
	{
		id: '49538094',
		title:
			'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
		price: 239.99,
		rating: 4,
		image:
			'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
	},
	{
		id: '4903850',
		title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
		price: 199.99,
		rating: 3,
		image:
			'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
	},
	{
		id: '23445930',
		title:
			'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
		price: 98.99,
		rating: 5,
		image:
			'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
	},
	{
		id: '325435445',
		title:
			'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
		price: 598.99,
		rating: 4,
		image:
			'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
	},
	{
		id: '90829332',
		title:
			"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
		price: 1094.98,
		rating: 4,
		image:
			'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
	},
	{
		id: '17386969',
		title: 'Crayola Light Up Tracing Pad Pink, Gifts For Girls & Boys',
		price: '25.99',
		rating: 4,
		image: 'https://m.media-amazon.com/images/I/81XF01g3PFL._AC_SX679_.jpg'
	}
]

//Loading modal animation
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 100,
	bgcolor: 'var(--blue)',
	borderRadius: '4px',
	p: 4,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}

const LoadingModal = (props) => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Fade in={open}>
					<Box sx={style}>
						<PuffLoader
							color='var(--orange)'
							speedMultiplier={1.6}
							size={100}
						/>
					</Box>
				</Fade>
			</Modal>
		</div>
	)
}

export { banner, logo, icon, heroLanding, products, LoadingModal }
