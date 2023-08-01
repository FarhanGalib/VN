import { createSlice } from '@reduxjs/toolkit';
import { FORGET_PASSWORD_MODAL, FORGET_PASSWORD_SUBMIT_MODAL, OTP_MODAL, SIGNIN_MODAL, SIGNUP_MODAL } from '../../const/auth';

const initialState = {
	openSignInModal: false,
	openSignUpModal: false,
	openOTPModal: false,
	openForgetPasswordModal: false,
	openForgetPasswordSubmitModal: false,
	type: '',
};

export const modalSlice = createSlice({
	name: 'modalOpen',
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.type = action.payload;
			switch (action.payload) {
				case SIGNIN_MODAL:
					state.openSignInModal = true;
					break;
				case SIGNUP_MODAL:
					state.openSignUpModal = true;
					break;
				case OTP_MODAL:
					state.openOTPModal = true;
					break;
				case FORGET_PASSWORD_MODAL:
					state.openForgetPasswordModal = true;
					break;
				case FORGET_PASSWORD_SUBMIT_MODAL:
					state.openForgetPasswordSubmitModal = true;
					break;
				default:
					break;
			}
		},
		closeModal: (state, action) => {
			state.open = false;
			state.type = action.payload;

			switch (action.payload) {
				case SIGNIN_MODAL:
					state.openSignInModal = false;
					break;
				case SIGNUP_MODAL:
					state.openSignUpModal = false;
					break;
				case OTP_MODAL:
					state.openOTPModal = false;
					break;
				case FORGET_PASSWORD_MODAL:
					state.openForgetPasswordModal = false;
					break;
				case FORGET_PASSWORD_SUBMIT_MODAL:
					state.openForgetPasswordSubmitModal = false;
					break;
				default:
					break;
			}
      state.type = '';
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
