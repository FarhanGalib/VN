import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteApi, getApi, postApi, putApi } from 'utils/utils'

const initialState = {
	isLoading: false,
	addressList: [],
	errorMessage: '',
	errors: [],
	addressDetails: '',
}

export const getAddressList = createAsyncThunk(
	'addressSlice/getAddressList',
	async (params = {}, { rejectWithValue }) => {
		try {
			return await getApi(`/addresses`, params)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

export const deleteAddress = createAsyncThunk(
	'addressSlice/deleteAddress',
	async (id, { rejectWithValue }) => {
		try {
			return await deleteApi(`/addresses/${id}`)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

export const createAddress = createAsyncThunk(
	'addressSlice/createAddress',
	async (params = {}, { rejectWithValue }) => {
		try {
			return await postApi(`/addresses`, params)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

export const getAddress = createAsyncThunk(
	'addressSlice/getAddress',
	async (id, { rejectWithValue }) => {
		try {
			return await getApi(`/addresses/${id}`)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

export const updateAddress = createAsyncThunk(
	'addressSlice/updateAddress',
	async ({ id, data }, { rejectWithValue }) => {
		try {
			return await putApi(`/addresses/${id}`, data)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

const addressSlice = createSlice({
	name: 'addressSlice',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getAddressList.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getAddressList.fulfilled, (state, action) => {
				state.isLoading = false
				state.addressList = action.payload.data.data
				state.errorMessage = ''
			})
			.addCase(getAddressList.rejected, (state, action) => {
				state.isLoading = false
				state.errorMessage = action.payload.message
			})
			.addCase(deleteAddress.pending, (state) => {
				state.isLoading = true
			})
			.addCase(deleteAddress.fulfilled, (state, action) => {
				console.log('success')
				state.isLoading = false
				state.addressList = state.addressList.filter(
					(address) => address.id !== action.meta.arg
				)
				state.errorMessage = ''
			})
			.addCase(deleteAddress.rejected, (state, action) => {
				state.isLoading = false
				state.errorMessage = action.payload.data.message
			})
			.addCase(createAddress.pending, (state) => {
				state.isLoading = true
				state.errors = []
			})
			.addCase(createAddress.fulfilled, (state, action) => {
				console.log('success')
				state.isLoading = false
				state.errorMessage = ''
				state.errors = []
			})
			.addCase(createAddress.rejected, (state, action) => {
				state.isLoading = false
				state.errorMessage = action.payload.data.message
				state.errors = action.payload.data?.errors || []
			})
			.addCase(getAddress.pending, (state) => {
				state.isLoading = true
				state.errors = []
			})
			.addCase(getAddress.fulfilled, (state, action) => {
				state.isLoading = false
				state.errorMessage = ''
				state.errors = []
				state.addressDetails = action.payload.data
			})
			.addCase(getAddress.rejected, (state, action) => {
				state.isLoading = false
				state.errorMessage = action.payload.data.message
				state.errors = action.payload.data?.errors || []
			})

			.addCase(updateAddress.pending, (state) => {
				state.isLoading = true
				state.errors = []
			})
			.addCase(updateAddress.fulfilled, (state, action) => {
				state.isLoading = false
				state.errorMessage = ''
				state.errors = []
			})
			.addCase(updateAddress.rejected, (state, action) => {
				state.isLoading = false
				state.errorMessage = action.payload.data.message
				state.errors = action.payload.data?.errors || []
			})
	},
})

export default addressSlice.reducer
