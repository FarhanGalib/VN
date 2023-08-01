import { Badge, Box, Button, Text, useToast } from '@chakra-ui/react'
import myAddressesStyles from 'styles/myAddress.module.css'
import { useDispatch } from 'react-redux'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useState } from 'react'
import { deleteAddress } from 'store/slices/addressSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { router } from 'next/router'

const AddressesCard = ({ address }) => {
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()
	const toast = useToast({
		containerStyle: {
			color: 'white',
		},
	})
	const handleDelete = (id) => {
		setIsLoading(true)
		dispatch(deleteAddress(id))
			.then(unwrapResult)
			.then((res) => {
				setIsLoading(true)
				toast({
					title: `Successfully Deleted!`,
					position: `top`,
					status: 'success',
					isClosable: true,
				})
			})
			.catch((err) => {
				setIsLoading(false)
				toast({
					title: `${err.data.message}`,
					position: `top`,
					status: 'error',
					isClosable: true,
				})
			})
	}
	return (
		<Box p={5} className={myAddressesStyles.addressBox}>
			<Text textStyle="sm" fontWeight="bold" as="p">
				{address?.title}
				{/* <Badge
					variant="solid"
					colorScheme="primary"
					ml={2}
					color="white"
					fontSize="12px"
					lineHeight="18px"
					fontWeight="bold"
				>
					Default
				</Badge> */}
			</Text>
			<Text mb={2} textStyle="sm" as="p">
				{address?.name}{' '}
			</Text>
			<Text textStyle="sm" as="p">
				{`${address?.area_address}, ${address?.area?.name}`}
			</Text>
			<Text textStyle="sm" as="p">
				{`${address?.city?.name}-${address?.zip_code}, ${address?.state?.name}`}
			</Text>
			<Text textStyle="sm" as="p">
				{`${address?.country?.name}`}
			</Text>
			<Text textStyle="sm" as="p">
				{address?.phone}
			</Text>
			<Text textStyle="sm" mb={2} fontWeight="bold" as="p">
				{address?.email}
			</Text>
			<Button
				rightIcon={<AiFillEdit />}
				size="xs"
				mr={2}
				colorScheme="primary"
				variant="outline"
				onClick={() => router.push(`/addresses/${address.id}`)}
				isDisabled={isLoading}
			>
				Edit
			</Button>
			<Button
				rightIcon={<AiFillDelete />}
				size="xs"
				colorScheme="red"
				variant="outline"
				onClick={() => handleDelete(address.id)}
				isDisabled={isLoading}
				isLoading={isLoading}
			>
				Delete
			</Button>
		</Box>
	)
}

export default AddressesCard
