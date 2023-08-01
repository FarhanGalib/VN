import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import CustomerLayout from '../../components/layout/CustomerLayout'
import OngoingRent from '../../components/dashboard/OngoingRent/OngoingRent'
import AsVendor from '../../components/dashboard/AsVendor/AsVendor'
import AsRenter from '../../components/dashboard/AsRenter/AsRenter'
import AuthLayout from 'components/layout/AuthLayout'

const dashboard = () => {
	return (
		<>
			<Box>
				<Tabs colorScheme={'primary'} size="sm">
					<TabList>
						<Tab>Ongoing Rent</Tab>
						<Tab>As a Vendor</Tab>
						<Tab>As a Renter </Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<OngoingRent title={`As a Renter`} />
							<Box py={5}></Box>
							<OngoingRent title={`As a Vendor`} />
						</TabPanel>
						<TabPanel>
							<AsVendor />
						</TabPanel>
						<TabPanel>
							<AsRenter />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</>
	)
}
dashboard.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'Dashboard', isCurrentPage: true },
]
dashboard.PageLayout = CustomerLayout
dashboard.authLayout = AuthLayout
export default dashboard
