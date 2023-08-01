import { Box, Container, Flex, IconButton } from '@chakra-ui/react'
import BreadCrumb from 'components/common/BreadCrumb'
import CustomerSidebarDrawer from 'components/common/CustomerSidebarDrawer'
import { drawerType } from 'const/drawer'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { openSidebar } from 'store/slices/sidebarDrawerSlice'
import CustomerSidebar from '../common/CustomerSidebar'

const CustomerLayout = ({ children, breadCrumb }) => {
	const dispatch = useDispatch()
	return (
		<>
			<Box mt={`12`}>
				<Container
					maxW={{
						base: 'container.md',
						md: 'container.lg',
						lg: 'container.xl',
					}}
				>
					<Box display={{ base: 'none', lg: 'flex' }}>
						{breadCrumb && <BreadCrumb items={breadCrumb} />}
					</Box>
					<IconButton
						display={{ base: 'flex', lg: 'none' }}
						icon={<HiOutlineArrowNarrowRight />}
						variant={`ghost`}
						onClick={() => {
							dispatch(openSidebar(drawerType.CUSTOMER_SIDEBAR))
						}}
					/>
					<CustomerSidebarDrawer />
					<Flex dir="row" mt={{ base: '2', lg: '8' }}>
						<Box w={`200px`} display={{ base: 'none', lg: 'flex' }}>
							<CustomerSidebar />
						</Box>
						<Box w="100%">{children}</Box>
					</Flex>
				</Container>
			</Box>
		</>
	)
}

export default CustomerLayout
