import AuthLayout from 'components/layout/AuthLayout'
import { Box } from '@chakra-ui/react';
import CustomerLayout from 'components/layout/CustomerLayout';
import React from 'react';

const settings = () => {
	return (
		<>
			<Box>
				<Box>Settings</Box>
			</Box>
		</>
	);
};
settings.PageLayout = CustomerLayout;
settings.authLayout = AuthLayout;
settings.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'Settings', isCurrentPage: true }
];
export default settings;
