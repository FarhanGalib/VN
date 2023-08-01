const { createSlice } = require('@reduxjs/toolkit');
const { drawerType } = require('const/drawer');

const initialState = {
	isCustomerSidebarOpen: false,
};
const sidebarDrawerSlice = createSlice({
	name: `sidebarDrawerSlice`,
	initialState,
	reducers: {
		openSidebar: (state, action) => {
			switch (action.payload) {
				case drawerType.CUSTOMER_SIDEBAR:
					state.isCustomerSidebarOpen = true;
					break;

				default:
					break;
			}
		},
		closeSidebar: (state, action) => {
			switch (action.payload) {
				case drawerType.CUSTOMER_SIDEBAR:
					state.isCustomerSidebarOpen = false;
					break;

				default:
					break;
			}
		},
	},
});

export const { openSidebar, closeSidebar } = sidebarDrawerSlice.actions;
export default sidebarDrawerSlice.reducer;
