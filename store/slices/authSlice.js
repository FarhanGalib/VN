import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postApi } from 'utils/utils'

const initialState = {
	isLoading: false,
	isTokenLoader: true,
	isSignedIn: false,
	// userInfo: '',
	token: '',
	isError: false,
	errors: [],
	signInError: '',
	signUpErrors: [],
	forgetPasswordSubmitErrors: [],
	forgetPasswordCodeError: '',
	otpError: '',
	errorMsg: '',
	status: '',
	givenRegistrationUserInfo: '',
	resetPasswordPhone: '',
}

export const signInUser = createAsyncThunk(
	'useAuth/signInUser',
	async (params, { rejectWithValue }) => {
		try {
			return await postApi(`/login`, params)
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)

export const registrationGetOtpRequest = createAsyncThunk(
	'useAuth/registrationGetOtpRequest',
	async (data, { rejectWithValue }) => {
		try {
			const res = await postApi(`/register-send-otp`, data)
			return res.data
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)

export const registrationRequest = createAsyncThunk(
	'useAuth/registrationRequest',
	async (params, { rejectWithValue }) => {
		try {
			const res = await postApi(`/register`, params)
			return res.data
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)

export const resetPasswordRequest = createAsyncThunk(
	'useAuth/resetPasswordRequest',
	async (params, { rejectWithValue }) => {
		try {
			console.log(params)
			return await postApi(`/reset-password`, params)
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)

export const otpRequest = createAsyncThunk(
	'useAuth/otpRequest',
	async (params, { rejectWithValue }) => {
		try {
			return await postApi(`/send-password-reset-code`, params)
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)

const authSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		signOut: (state) => {
			state.token = ''
			state.user = ''
			state.isSignedIn = false
			localStorage.removeItem('token')
			localStorage.removeItem('user')
		},
		setAuth: (state, action) => {
			state.isTokenLoader = true
			state.token = action.payload.token
			state.user = action.payload.user
			state.isSignedIn = true
		},
		setTokenLoader: (state, action) => {
			state.isTokenLoader = action.payload
		},
		setGivenRegistrationUserInfo: (state, action) => {
			state.givenRegistrationUserInfo = action.payload
		},
		setResetPasswordPhone: (state, action) => {
			state.resetPasswordPhone = action.payload
		},
		setSignInError: (state, action) => {
			state.signInError = action.payload
		},
		setOtpError: (state, action) => {
			state.otpError = action.payload
		},
	},
	extraReducers: (builder) => {
		//////////////////////////// Sign In /////////////////////////////////
		builder
			.addCase(signInUser.pending, (state) => {
				state.isLoading = true
				state.isSignedIn = false
				state.user = ''
				state.token = ''
				state.isError = false
				state.signInError = ''
				state.errorMsg = ''
			})
			.addCase(signInUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSignedIn = true
				state.user = action.payload.data.user
				state.token = action.payload.data.token
				state.isError = false
				state.signInError = ''
				state.errorMsg = ''
				window.localStorage.setItem('token', action.payload.data.token)
				window.localStorage.setItem(
					'user',
					JSON.stringify(action.payload.data.user)
				)
			})
			.addCase(signInUser.rejected, (state, action) => {
				state.isLoading = false
				state.isSignedIn = false
				state.user = ''
				state.token = ''
				state.isError = true
				state.signInError = action.payload?.message
					? action.payload?.message
					: []
				// state.errors = action.payload.errors;
				state.errorMsg = ''
				// state.errorMessage = action.error?.message
			})
			//;//////////////////////// Registration Send Otp ////////////////////////////////
			.addCase(registrationGetOtpRequest.pending, (state) => {
				state.isLoading = true
				state.isSignedIn = false
				// state.userInfo = action.payload;
				// state.token = action.payload;
			})
			.addCase(registrationGetOtpRequest.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSignedIn = false
				state.user = ''
				state.token = ''
				state.isError = false
				state.errors = []
				state.signUpErrors = []
				state.errorMsg = ''
				// state.givenRegistrationUserInfo = action.payload
				// window.localStorage.setItem('token', action.payload.token)
				// window.localStorage.setItem('user', JSON.stringify(action.payload.user))
			})
			.addCase(registrationGetOtpRequest.rejected, (state, action) => {
				state.isLoading = false
				state.isSignedIn = true
				state.user = ''
				state.token = ''
				state.isError = true
				state.errors = []
				state.signUpErrors = action.payload?.errors
					? action.payload?.errors
					: []
				state.errorMsg = ''
			})
			/////////////////////////////////// Registration ///////////////////////////////////
			.addCase(registrationRequest.pending, (state) => {
				state.isLoading = true
				state.isSignedIn = false
				// state.userInfo = action.payload;
				// state.token = action.payload;
			})
			.addCase(registrationRequest.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSignedIn = true
				state.user = action.payload?.user
				state.token = action.payload?.token
				state.isError = false
				state.errors = []
				state.signUpErrors = []
				state.errorMsg = ''
				window.localStorage.setItem('token', action.payload.token)
				window.localStorage.setItem('user', JSON.stringify(action.payload.user))
			})
			.addCase(registrationRequest.rejected, (state, action) => {
				state.isLoading = false
				state.isSignedIn = true
				state.user = ''
				state.token = ''
				state.isError = true
				state.errors = []
				state.signUpErrors = action.payload?.errors
					? action.payload?.errors
					: []
				state.errorMsg = ''
			})
			////////////////////////// Forget Password OTP ////////////////////////////////
			.addCase(otpRequest.pending, (state) => {
				state.isLoading = true
				state.otpError = ''
			})
			.addCase(otpRequest.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(otpRequest.rejected, (state, action) => {
				state.isLoading = false
				state.otpError = action.payload?.message
			})
			////////////////////////// Reset PasswordRequest ////////////////////////////////
			.addCase(resetPasswordRequest.pending, (state) => {
				state.isLoading = true
				state.forgetPasswordSubmitErrors = ''
			})
			.addCase(resetPasswordRequest.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(resetPasswordRequest.rejected, (state, action) => {
				state.isLoading = false
				console.log(action.payload)
				state.forgetPasswordSubmitErrors = action.payload?.errors || ''
				state.forgetPasswordCodeError = action.payload?.message
			})
	},
})

export default authSlice.reducer
export const {
	setAuth,
	setTokenLoader,
	signOut,
	setGivenRegistrationUserInfo,
	setResetPasswordPhone,
	setSignInError,
	setOtpError,
} = authSlice.actions
