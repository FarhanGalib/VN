import {
	Box,
	Button,
	Grid,
	Text,
	Flex,
	Input,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Select,
	useToast,
} from '@chakra-ui/react'
import {
	getAreas,
	getCities,
	getCountries,
	getStates,
} from 'store/slices/locationSlice'
import CustomerLayout from 'components/layout/CustomerLayout'
import { MdArrowBackIos } from 'react-icons/md'
import { AiFillSave } from 'react-icons/ai'
import AuthLayout from 'components/layout/AuthLayout'
import { Field, Form, Formik } from 'formik'
import { unwrapResult } from '@reduxjs/toolkit'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAddress, updateAddress } from 'store/slices/addressSlice'
import { useRouter } from 'next/router'

const EditAddress = () => {
	const dispatch = useDispatch()
	const toast = useToast({
		containerStyle: {
			color: 'white',
		},
	})
	const initValue = {
		title: '',
		name: '',
		email: '',
		phone: '',
		country_id: '',
		state_id: '',
		city_id: '',
		area_id: '',
		zip_code: '',
		area_address: '',
	}
	const { countries, states, cities, areas } = useSelector(
		(state) => state.location
	)
	const { addressDetails } = useSelector((state) => state.address)
	const router = useRouter()
	const { id } = router.query

	const validationSchema = Yup.object({
		title: Yup.string().required('Title is required'),
		name: Yup.string().required('Full Name is required'),
		email: Yup.string()
			.required('Email is Required')
			.email('Invalid email address'),
		phone: Yup.string().required('Mobile Number is required'),
		country_id: Yup.string().required('Country is required'),
		state_id: Yup.string().required('District/State is required'),
		city_id: Yup.string().required('Town/City is required'),
		area_id: Yup.string().required('Area is required'),
		zip_code: Yup.string().required('Postal Code is required'),
		area_address: Yup.string().required('Street Address is required'),
	})

	const initFormData = () => {
		if (addressDetails) {
			return {
				...initValue,
				title: addressDetails?.title ? addressDetails?.title : '',
				name: addressDetails?.name ? addressDetails?.name : '',
				email: addressDetails?.email ? addressDetails?.email : '',
				phone: addressDetails?.phone ? addressDetails?.phone : '',
				country_id: addressDetails?.country_id
					? addressDetails?.country_id
					: '',
				state_id: addressDetails?.state_id ? addressDetails?.state_id : '',
				city_id: addressDetails?.city_id ? addressDetails?.city_id : '',
				area_id: addressDetails?.area_id ? addressDetails?.area_id : '',
				zip_code: addressDetails?.zip_code ? addressDetails?.zip_code : '',
				area_address: addressDetails?.area_address
					? addressDetails?.area_address
					: '',
			}
		}
	}

	const getCityList = (stateId) => {
		dispatch(getCities(stateId))
	}

	const getAreaList = (cityId) => {
		dispatch(getAreas(cityId))
	}

	const handleStateChange = (e) => {
		getCityList(e.target.value)
	}

	const handleCityChange = (e) => {
		getAreaList(e.target.value)
	}

	useEffect(() => {
		dispatch(getCountries())
		return
	}, [])

	//Get address details
	useEffect(() => {
		if (!id) return
		dispatch(getAddress(id))
		return
	}, [id])

	//Get State,cities and areas List
	useEffect(() => {
		if (!addressDetails) return
		dispatch(getStates(addressDetails.country_id))
		dispatch(getCities(addressDetails.state_id))
		dispatch(getAreas(addressDetails.city_id))
		return
	}, [addressDetails])

	return (
		<>
			<Box ml={{ base: 0, sm: 0, md: 0, lg: 20 }}>
				<Text mt={8} mb={2} textStyle="md" fontWeight="bold" as="h3">
					Address Details
				</Text>
				<Formik
					w={`100%`}
					initialValues={initFormData()}
					validationSchema={validationSchema}
					enableReinitialize={true}
					onSubmit={(values, actions) => {
						dispatch(updateAddress({ id, data: values }))
							.then(unwrapResult)
							.then((res) => {
								toast({
									title: `Address updated successfully!`,
									position: `top`,
									status: 'success',
									isClosable: true,
								})
							})
							.catch((e) => {
								toast({
									title: `Error Occured!`,
									position: `top`,
									description: 'Something went wrong.',
									status: 'error',
									isClosable: true,
								})
							})
						actions.setSubmitting(false)
					}}
				>
					{({ handleChange, values }) => (
						<Form w={`100%`} style={{ width: '100%' }}>
							<Flex gap={6}>
								<Grid w="100%" mt={5}>
									<Box>
										<Field name="title">
											{({ field, form }) => (
												<FormControl
													isInvalid={form.errors.title && form.touched.title}
												>
													<FormLabel fontSize={'16'} mb={1}>
														Title
													</FormLabel>
													<Input type="text" {...field} />
													<FormErrorMessage>
														{form.errors.title}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</Box>
								</Grid>
							</Flex>

							<Flex gap={6}>
								<Grid w="100%" mt={5}>
									<Box>
										<Field name="name">
											{({ field, form }) => (
												<FormControl
													isInvalid={form.errors.name && form.touched.name}
												>
													<FormLabel fontSize={'16'} mb={1}>
														Full Name
													</FormLabel>
													<Input {...field} type="text" />
													<FormErrorMessage>
														{form.errors.name}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</Box>
									<Box mt={5}>
										<Field name="email">
											{({ field, form }) => (
												<FormControl
													isInvalid={form.errors.email && form.touched.email}
												>
													<FormLabel fontSize={'16'} mb={1}>
														Email
													</FormLabel>
													<Input type="text" {...field} />
													<FormErrorMessage>
														{form.errors.email}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</Box>
									<Box mt={5}>
										<Field name="phone">
											{({ field, form }) => (
												<FormControl
													isInvalid={form.errors.phone && form.touched.phone}
												>
													<FormLabel fontSize={'16'} mb={1}>
														Mobile Number
													</FormLabel>
													<Input type="text" {...field} />
													<FormErrorMessage>
														{form.errors.phone}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</Box>
								</Grid>
							</Flex>

							<Flex gap={6}>
								<Grid w="100%" mt={5}>
									<Box>
										<Field name="country_id">
											{({ field, form }) => (
												<FormControl
													isInvalid={
														form.errors.country_id && form.touched.country_id
													}
												>
													<FormLabel fontSize={'16'} mb={1}>
														Country/Region
													</FormLabel>
													<Select
														{...field}
														placeholder="Select Country"
														size={`md`}
														isDisabled
													>
														{countries.map((country) => (
															<option key={country.value} value={country.value}>
																{country.label}
															</option>
														))}
													</Select>
													<FormErrorMessage>
														{form.errors.country_id}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</Box>
								</Grid>
							</Flex>

							<Flex gap={6}>
								<Grid w="100%">
									<Box mt={5}>
										<Field name="state_id">
											{({ field, form }) => (
												<FormControl
													isInvalid={
														form.errors.state_id && form.touched.state_id
													}
												>
													<FormLabel fontSize={'16'} mb={1}>
														District/State
													</FormLabel>
													<Select
														{...field}
														placeholder="Select District/State"
														size={`md`}
														onChange={(e) => {
															handleChange(e)
															values.city_id = ''
															values.area_id = ''
															handleStateChange(e)
														}}
													>
														{states.map((state) => (
															<option key={state.value} value={state.value}>
																{state.label}
															</option>
														))}
													</Select>
													<FormErrorMessage>
														{form.errors.state_id}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</Box>
									<Box mt={5}>
										<Field name="city_id">
											{({ field, form }) => (
												<FormControl
													isInvalid={
														form.errors.city_id && form.touched.city_id
													}
												>
													<FormLabel fontSize={'16'} mb={1}>
														Town/City
													</FormLabel>
													<Select
														{...field}
														placeholder="Select City"
														size={`md`}
														onChange={(e) => {
															handleChange(e)
															values.area_id = ''
															handleCityChange(e)
														}}
													>
														{cities.map((city) => (
															<option key={city.value} value={city.value}>
																{city.label}
															</option>
														))}
													</Select>
													<FormErrorMessage>
														{form.errors.city_id}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</Box>
									<Box mt={5}>
										<Field name="area_id">
											{({ field, form }) => (
												<FormControl
													isInvalid={
														form.errors.area_id && form.touched.area_id
													}
												>
													<FormLabel fontSize={'16'} mb={1}>
														Area
													</FormLabel>
													<Select
														{...field}
														placeholder="Select Area"
														size={`md`}
													>
														{areas.map((area) => (
															<option key={area.value} value={area.value}>
																{area.label}
															</option>
														))}
													</Select>
													<FormErrorMessage>
														{form.errors.area_id}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</Box>
									<Box mt={5}>
										<Field name="zip_code">
											{({ field, form }) => (
												<FormControl
													isInvalid={
														form.errors.zip_code && form.touched.zip_code
													}
												>
													<FormLabel fontSize={'16'} mb={1}>
														Postal Code
													</FormLabel>
													<Input type="text" {...field} />
													<FormErrorMessage>
														{form.errors.zip_code}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</Box>
									<Box mt={5}>
										<Field name="area_address">
											{({ field, form }) => (
												<FormControl
													isInvalid={
														form.errors.area_address &&
														form.touched.area_address
													}
												>
													<FormLabel fontSize={'16'} mb={1}>
														Street Address
													</FormLabel>
													<Input type="text" {...field} />
													<FormErrorMessage>
														{form.errors.area_address}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>
									</Box>

									{/* <Box mt={5}>
										<FormControl>
											<FormLabel fontSize={'16'} mb={1}>
												Mobile Number (Secondary)
											</FormLabel>
											<Input type="text" value={''} />
										</FormControl>
									</Box> */}
								</Grid>
							</Flex>
							<Box align={'right'} mt={8}>
								<Button
									rightIcon={<MdArrowBackIos />}
									colorScheme="primary"
									size={{ base: 'xs', sm: 'xs', md: 'sm', lg: 'sm' }}
									variant="outline"
								>
									Cancel
								</Button>
								<Button
									rightIcon={<AiFillSave />}
									ml={4}
									colorScheme="primary"
									size={{ base: 'xs', sm: 'xs', md: 'sm', lg: 'sm' }}
									variant="solid"
									type="submit"
								>
									Save
								</Button>
							</Box>
						</Form>
					)}
				</Formik>
			</Box>
		</>
	)
}

EditAddress.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'My Account', isCurrentPage: false, link: '/dashboard' },
	{ label: 'Address', isCurrentPage: true },
]
EditAddress.PageLayout = CustomerLayout
EditAddress.authLayout = AuthLayout
export default EditAddress
