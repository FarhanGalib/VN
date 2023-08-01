import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import users from './slices/usersSlice'
import counter from './slices/counterSlice'
import modal from './slices/modalSlice'
import products from './slices/productsSlice'
import searchFilters from './slices/searchFilterSlice'
import showFilter from './slices/searchSideFilterMobileSlice'
import sidebarDrawers from './slices/sidebarDrawerSlice'
import auth from './slices/authSlice'
import profileInfo from './slices/profileSlice'
import location from './slices/locationSlice'
import address from './slices/addressSlice'

const combinedReducer = combineReducers({
	counter,
	users,
	modal,
	products,
	searchFilters,
	showFilter,
	sidebarDrawers,
	auth,
	profileInfo,
	location,
	address,
})

//master reducer for the server side rendereing
const masterReducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			counter: {
				count: state.counter.count + action.payload.counter.count,
			},
			users: {
				users: [...action.payload.users.users, ...state.users.users],
			},
			modal: {
				modal: state.modal.open,
			},
			products: {
				products: state.products,
			},
			searchFilters: {
				searchFilters: state.searchFilters,
			},
			showFilter: {
				showFilter: state.showFilter,
			},
			sidebarDrawers: {
				sidebarDrawers: state.sidebarDrawers,
			},
			auth: {
				auth: state.auth,
			},
			profile: {
				profile: state.profile,
			},
		}
		return nextState
	} else {
		return combinedReducer(state, action)
	}
}

export const makeStore = () =>
	configureStore({
		reducer: masterReducer,
		// middleware: (getDefaultMiddlewares) => getDefaultMiddlewares()
	})

export const wrapper = createWrapper(makeStore, { debug: true })
