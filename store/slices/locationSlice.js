import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getApi } from 'utils/utils'

const initialState = {
	countryByIpLoading: '',
	countryByIp: '',
	countryByIpError: '',
	countryLoading: false,
	countries: [],
	countryError: '',
	stateLoading: false,
	states: [],
	stateError: '',
	cityLoading: '',
	cities: [],
	cityError: '',
	areaLaoding: false,
	areas: [],
	areaError: '',
}

export const getCountryByIp = createAsyncThunk(
	'locationSlice/getCountryByIp',
	async (params = {}, { rejectWithValue }) => {
		try {
			return await getApi(`/country-by-ip-location`, params)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

export const getCountries = createAsyncThunk(
	'locationSlice/getCountries',
	async (params, { rejectWithValue }) => {
		try {
			return await getApi(`/country-list`, params)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

export const getStates = createAsyncThunk(
	'locationSlice/getStates',
	async (id, { rejectWithValue }) => {
		try {
			return await getApi(`/state-list/${id}`)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

export const getCities = createAsyncThunk(
	'locationSlice/getCities',
	async (id, { rejectWithValue }) => {
		try {
			return await getApi(`/city-list/${id}`)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

export const getAreas = createAsyncThunk(
	'locationSlice/getAreas',
	async (id, { rejectWithValue }) => {
		try {
			return await getApi(`/area-list/${id}`)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

const locationSlice = createSlice({
	name: 'locationSlice',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getCountryByIp.pending, (state) => {
				state.countryByIpLoading = true
			})
			.addCase(getCountryByIp.fulfilled, (state, action) => {
				state.countryByIpLoading = false
				state.countryByIp = action.payload.data
				state.countryByIpError = ''
			})
			.addCase(getCountryByIp.rejected, (state, action) => {
				state.countryByIpLoading = false
				state.countryByIpError = action.payload.message
			})
			.addCase(getCountries.pending, (state) => {
				state.countryLoading = true
			})
			.addCase(getCountries.fulfilled, (state, action) => {
				state.countryLoading = false
				state.countries = action.payload.data
				state.countryError = ''
			})
			.addCase(getCountries.rejected, (state, action) => {
				state.countryLoading = false
				state.countryError = action.payload.message
			})
			.addCase(getStates.pending, (state) => {
				state.stateLoading = true
			})
			.addCase(getStates.fulfilled, (state, action) => {
				state.stateLoading = false
				state.states = action.payload.data
				state.stateError = ''
			})
			.addCase(getStates.rejected, (state, action) => {
				state.stateLoading = false
				state.stateError = action.payload.message
			})
			.addCase(getCities.pending, (state) => {
				state.cityLoading = true
			})
			.addCase(getCities.fulfilled, (state, action) => {
				state.cityLoading = false
				state.cities = action.payload.data
				state.cityError = ''
			})
			.addCase(getCities.rejected, (state, action) => {
				state.cityLoading = false
				state.cityError = action.payload.message
			})
			.addCase(getAreas.pending, (state) => {
				state.areaLaoding = true
			})
			.addCase(getAreas.fulfilled, (state, action) => {
				state.areaLaoding = false
				state.areas = action.payload.data
				state.areaError = ''
			})
			.addCase(getAreas.rejected, (state, action) => {
				state.areaLaoding = false
				state.areaError = action.payload.message
			})
	},
})

export default locationSlice.reducer
