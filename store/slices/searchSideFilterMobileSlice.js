const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
	isSideFilterOpen: false,
}

const searchSideFilterMobileSlice = createSlice({
	name: 'searchFilterMobile',
	initialState,
	reducers: {
		toggleFilterOpen: (state, action) => {
			state.isSideFilterOpen = !state.isSideFilterOpen
		}
	},
})

export const { toggleFilterOpen } = searchSideFilterMobileSlice.actions
export default searchSideFilterMobileSlice.reducer
