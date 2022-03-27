export const initialState = {
	basket: [],
	user: null
}

// Selector
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
	console.log(action)

	const getIItemIndex = (entireBasket, item) => {}

	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item]
			}

		case 'EMPTY_BASKET':
			return {
				...state,
				basket: []
			}

		case 'REMOVE_FROM_BASKET':
			const tempBasket = state.basket

			const itemIndex = tempBasket.findIndex(
				(basketItem) => basketItem.id === action.id
			)

			let newBasket = tempBasket.valueOf()

			if (itemIndex >= 0) {
				console.log('item Index', itemIndex)
				newBasket.splice(itemIndex, 1)
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in basket!`
				)
			}

			return {
				...state,
				basket: newBasket
			}

		case 'SET_USER':
			return {
				...state,
				user: action.user
			}

		default:
			return state
	}
}

export default reducer
