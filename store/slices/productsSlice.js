import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from './API/productsAPI'

const initialState = {
	isLoading: false,
	products: [],
	isError: false,
	errorMessage: '',
}

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => await getProducts({params})
)
export const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true
				state.isError = false
				state.errorMessage = ''
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false
				state.products = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false
				state.products = []
				state.isError = true
				state.errorMessage = action.error?.message
			})
	},
})
export default productsSlice.reducer
