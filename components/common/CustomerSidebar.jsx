import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useDispatch } from 'react-redux'
import { signOut } from 'store/slices/authSlice'

const accountLinks = [
	{ title: 'Dashboard', path: '/dashboard' },
	{ title: 'Profile', path: '/my-profile', subpath: '/profile/edit-profile' },
	{ title: 'My Bookings', path: '/my-bookings', subpath: '/my-bookings/[id]' },
	{ title: 'Address', path: '/addresses', subpath: '/addresses/[id]' },
	{ title: 'Create Address', path: '/addresses/add' },
]
const vendorLinks = [
	{ title: 'Add Item', path: '/add-item' },
	{ title: 'My Items', path: '/my-items' },
	{ title: 'Rent Requests', path: '/rent-requests', subpath: '/rent-requests/[id]' },
]

const MoreLinks = [{ title: 'Settings', path: '/settings' }]

const CustomerSidebar = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const styles = {}
	const getSelected = (path, subpath) => {
		return router.pathname === path || router.pathname === subpath
			? 'primary.500'
			: 'brand.500'
	}
	return (
		<>
			<Box>
				<Flex direction="column" gap={2}>
					<Heading size="sm" color="brand.500">
						Account
					</Heading>
					{accountLinks.map(({ title, path, subpath }) => (
						<Box key={title}>
							<Link
								as={NextLink}
								href={`${path}`}
								fontSize="sm"
								ml="20px"
								color={getSelected(path, subpath)}
								style={{ textDecoration: 'none' }}
								_hover={{ color: 'primary.600' }}
							>
								{title}
							</Link>
						</Box>
					))}

					<Heading size="sm" color="brand.500" mt={3}>
						Vendor
					</Heading>
					{vendorLinks.map(({ title, path, subpath }) => (
						<Box key={title}>
							<Link
								as={NextLink}
								href={`${path}`}
								fontSize="sm"
								ml="20px"
								color={getSelected(path, subpath)}
								style={{ textDecoration: 'none' }}
								_hover={{ color: 'primary.600' }}
							>
								{title}
							</Link>
						</Box>
					))}

					<Heading size="sm" color="brand.500" mt={3}>
						More
					</Heading>
					{MoreLinks.map(({ title, path }) => (
						<Box key={title}>
							<Link
								as={NextLink}
								href={`${path}`}
								fontSize="sm"
								ml="20px"
								color={getSelected(path)}
								style={{ textDecoration: 'none' }}
								_hover={{ color: 'primary.600' }}
							>
								{title}
							</Link>
						</Box>
					))}
					<Box>
						<Text
							onClick={() => {
								router.push(`/`)
								dispatch(signOut())
							}}
							fontSize="sm"
							ml="20px"
							style={{ textDecoration: 'none' }}
							_hover={{ color: 'primary.600' }}
							cursor={`pointer`}
						>
							Sign Out
						</Text>
					</Box>
				</Flex>
			</Box>
		</>
	)
}

export default CustomerSidebar
