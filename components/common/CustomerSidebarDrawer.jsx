import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerContent,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import CustomerSidebar from './CustomerSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from 'store/slices/sidebarDrawerSlice';
import { drawerType } from 'const/drawer';

const CustomerSidebarDrawer = () => {
	const { isCustomerSidebarOpen } = useSelector(
		(state) => state.sidebarDrawers
	);
	const dispatch = useDispatch();
	return (
		<Drawer
			display={{ base: 'block', xl: 'block' }}
			size="xs"
			isOpen={isCustomerSidebarOpen}
			placement="left"
			onClose={() => dispatch(closeSidebar(drawerType.CUSTOMER_SIDEBAR))}
		>
			<DrawerOverlay />
			<DrawerContent bg={`white`}>
				<DrawerCloseButton />

				<DrawerBody>
					<Box pt={10}>
						<CustomerSidebar />
					</Box>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default CustomerSidebarDrawer;
