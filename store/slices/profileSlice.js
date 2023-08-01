import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	getIdentityTypeList,
	getMyProfile,
	postBannerPhoto,
	postProfilePhoto,
	saveProfile,
} from './API/userProfilileAPI'

const initialState = {
	isLoading: false,
	profilePhoto: '',
	bannerPhoto: '',
	errorMsg: '',
	profile: '',
	identityTypes: [],
}
export const saveProfilePhoto = createAsyncThunk(
	'profileSlice/saveProfilePhoto',
	async (data, { rejectWithValue }) => {
		try {
			return await postProfilePhoto(data)
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)

export const saveBannerPhoto = createAsyncThunk(
	'profileSlice/saveBannerPhoto',
	async (data, { rejectWithValue }) => {
		try {
			return await postBannerPhoto(data)
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)

export const getProfile = createAsyncThunk(
	'profileSlice/getProfile',
	async (params = {}, { rejectWithValue }) => {
		try {
			return await getMyProfile(params)
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)

export const getIdentityTypes = createAsyncThunk(
	'profileSlice/getIdentityTypes',
	async (params = {}, { rejectWithValue }) => {
		try {
			return await getIdentityTypeList(params)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

export const updateProfile = createAsyncThunk(
	'profileSlice/updateProfile',
	async (params = {}, { rejectWithValue }) => {
		try {
			return await saveProfile(params)
		} catch (err) {
			return rejectWithValue(err.response)
		}
	}
)

export const profileSlice = createSlice({
	name: 'profileSlice',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(saveProfilePhoto.pending, (state) => {
				state.isLoading = true
				state.errorMsg = ''
			})
			.addCase(saveProfilePhoto.fulfilled, (state, action) => {
				state.isLoading = false
				state.profilePhoto = action.payload
				state.errorMsg = ''
			})
			.addCase(saveProfilePhoto.rejected, (state, action) => {
				state.isLoading = false
			})
			.addCase(saveBannerPhoto.pending, (state) => {
				state.isLoading = true
				state.errorMsg = ''
			})
			.addCase(saveBannerPhoto.fulfilled, (state, action) => {
				state.isLoading = false
				state.bannerPhoto = action.payload
				state.errorMsg = ''
			})
			.addCase(saveBannerPhoto.rejected, (state, action) => {
				state.isLoading = false
			})
			.addCase(getProfile.pending, (state) => {
				state.isLoading = true
				state.errorMsg = ''
			})
			.addCase(getProfile.fulfilled, (state, action) => {
				state.isLoading = false
				state.profile = action.payload.data
				state.errorMsg = ''
			})
			.addCase(getProfile.rejected, (state, action) => {
				state.isLoading = false
			})

			.addCase(getIdentityTypes.pending, (state) => {
				state.isLoading = true
				state.errorMsg = ''
			})
			.addCase(getIdentityTypes.fulfilled, (state, action) => {
				state.isLoading = false
				state.identityTypes = action.payload.data
				state.errorMsg = ''
			})
			.addCase(getIdentityTypes.rejected, (state, action) => {
				state.isLoading = false
			})
			.addCase(updateProfile.pending, (state) => {
				state.isLoading = true
				state.errorMsg = ''
			})
			.addCase(updateProfile.fulfilled, (state, action) => {
				state.isLoading = false
				// state.profile = action.payload.data
				state.errorMsg = ''
			})
			.addCase(updateProfile.rejected, (state, action) => {
				state.isLoading = false
			})
		
	},
})

export default profileSlice.reducer
