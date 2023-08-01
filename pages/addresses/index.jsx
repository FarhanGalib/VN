import { Box, Button, Grid } from '@chakra-ui/react'
import CustomerLayout from 'components/layout/CustomerLayout'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { router } from 'next/router'
import AuthLayout from 'components/layout/AuthLayout'
import { getAddressList } from 'store/slices/addressSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import AddressesCard from 'components/addresses/AddressesCard'

const Addresses = () => {
	const { addressList } = useSelector((state) => state.address)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAddressList())
	}, [])
	return (
		<>
			<Box ml={{ base: 0, sm: 0, md: 0, lg: 20 }}>
				<Button
					onClick={() => {
						router.push('/addresses/add')
					}}
					rightIcon={<AiOutlinePlusCircle />}
					size="md"
					mr={3}
					colorScheme="primary"
				>
					Add Address
				</Button>
				<Grid
					gap={5}
					mt={6}
					direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
					templateColumns={{
						base: 'repeat(1, 1fr)',
						sm: 'repeat(1, 1fr)',
						md: 'repeat(2, 1fr)',
						lg: 'repeat(2, 1fr)',
						xl: 'repeat(2, 1fr)',
					}}
				>
					{addressList.length > 0 &&
						addressList.map((address) => (
							<Grid key={address.id}>
								<AddressesCard address={address} />
							</Grid>
						))}
				</Grid>
			</Box>
		</>
	)
}

Addresses.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'My Account', isCurrentPage: false, link: '/dashboard' },
	{ label: 'Address', isCurrentPage: true },
]
Addresses.PageLayout = CustomerLayout
Addresses.authLayout = AuthLayout

export default Addresses
