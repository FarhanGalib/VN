const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
	category: '',
	priceRange: '',
	brands: [],
	offers: [],
	rentalPeriod: [],
	rating: '',
	search: '',
}

const searchFilterSlice = createSlice({
	name: 'searchFilter',
	initialState,
	reducers: {
		setCategory: (state, action) => {
			state.category = action.payload
		},
		setPriceRange: (state, action) => {
			state.priceRange = action.payload
		},
		setBrands: (state, action) => {
			state.brands = [action.payload]
		},
		setOffers: (state, action) => {
			state.offers = [action.payload]
		},
		rentalPeriod: (state, action) => {
			state.rentalPeriod = [action.payload]
		},
		setRating: (state, action) => {
			state.rating = action.payload
		},
		setRating: (state, action) => {
			state.search = action.payload
		},
	},
})

export const {
	setCategory,
	setPriceRange,
	setBrands,
	setOffers,
	rentalPeriod,
	setRating,
} = searchFilterSlice.actions
export default searchFilterSlice.reducer
