import editProfileStyles from 'styles/editProfile.module.css'
import {
	Box,
	Text,
	Flex,
	Grid,
	Input,
	Button,
	Textarea,
	Select,
	UnorderedList,
	ListItem,
	FormControl,
	FormErrorMessage,
	Alert,
	AlertIcon,
	FormLabel,
} from '@chakra-ui/react'
import CustomerLayout from 'components/layout/CustomerLayout'
import useFileUpload from 'react-use-file-upload'
import React, { useEffect, useRef, useState } from 'react'
import { RiImageAddFill } from 'react-icons/ri'
import PhoneNumberInput from 'utils/PhoneNumberInput'
import { COUNTRIES } from 'utils/countries'
import AuthLayout from 'components/layout/AuthLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getIdentityTypes, getProfile, updateProfile } from 'store/slices/profileSlice'
import { Field, Form, Formik, useFormikContext } from 'formik'
import {
	getAreas,
	getCities,
	getCountries,
	getCountryByIp,
	getStates,
} from 'store/slices/locationSlice'
import IdPhotoSection from 'components/edit-profile/IdCardPhotoSection'
import { router } from 'next/router'
import IdCardPhotoSection from 'components/edit-profile/IdCardPhotoSection'
import * as Yup from 'yup'
import { objectToFormData } from 'utils/utils'

const countryOptions = COUNTRIES.map(({ name, iso }) => ({
	label: name,
	value: iso,
}))

const initData = {
	name: '',
	phone: '',
	phone_secondary: '',
	email: '',
	about: '',
	address: '',
	country_id: '',
	state_id: '',
	city_id: '',
	area_id: '',
	zip_code: '',
	lat: '',
	long: '',
	identity_type_id: '',
	identity_number: '',
	identity_photo_front_url: '',
	identity_photo_back_url: '',
	identity_selfie_photo_url: '',
	identity_photo_front: '',
	identity_photo_back: '',
	identity_selfie_photo: '',
}

const EditProfile = () => {
	const dispatch = useDispatch()
	const inputRef = useRef()
	const { profile: profileData, isLoading } = useSelector((state) => state.profileInfo)
	const { identityTypes } = useSelector((state) => state.profileInfo)
	const { countries, countryByIp, states, cities, areas } = useSelector(
		(state) => state.location
	)

	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.required('Email is Required')
			.email('Invalid email address'),
		phone: Yup.string().required('Phone no. is required'),
		about: Yup.string().required('About is required'),
		address: Yup.string().required('Address is required'),
		country_id: Yup.string().required('Country is required'),
		state_id: Yup.string().required('State is required'),
		city_id: Yup.string().required('City is required'),
		area_id: Yup.string().required('Area is required'),
		zip_code: Yup.string().required('Zip is required'),
		lat: Yup.string().required('Latitude is required'),
		long: Yup.string().required('Longatude is required'),
		identity_type_id: Yup.string().required('Identity Type is required'),
		identity_number: Yup.string().required('Identity number is required'),
		// identity_photo_front: Yup.string().required('Identity is required'),
		// identity_photo_back: Yup.string().required('Identity is required'),
		// identity_selfie_photo: Yup.string().required('Identity Selfie is required'),
	})
	const [value, setValue] = useState('')
	const {
		files,
		fileNames,
		fileTypes,
		totalSize,
		totalSizeInBytes,
		handleDragDropEvent,
		clearAllFiles,
		createFormData,
		setFiles,
		removeFile,
	} = useFileUpload()

	//Set Initisl Form Data with If selected Country is taken from IP or User Profile
	const initFormData = () => {
		if (profileData?.user) {
			if (profileData?.user?.profile === null) {
				return {
					...initData,
					...profileData.user,
					country_id: countryByIp?.value,
				}
			}

			// getAreaList(profileData?.user?.city?.id)
			return {
				...profileData.user,
				identity_type_id: profileData?.user?.identity_type_id,
				country_id: profileData?.user?.country?.id,
				state_id: profileData?.user?.state?.id,
				city_id: profileData?.user?.city?.id,
				area_id: profileData?.user?.area?.id,
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
		if (profileData?.user) setValue(profileData.user.phone)
	}, [profileData])

	useEffect(() => {
		dispatch(getCountryByIp())
		dispatch(getProfile())
		dispatch(getCountries())
		dispatch(getIdentityTypes())
	}, [])

	//Get State List
	useEffect(() => {
		if (!profileData?.user) return
		if (profileData?.user) {
			if (profileData?.user?.profile === null) {
				dispatch(getStates(countryByIp?.value))
				return
			}
			dispatch(getStates(profileData?.user?.country?.id))
			return
		}
	}, [profileData?.user, countryByIp])

	useEffect(() => {
		if (!profileData?.user) return
		getCityList(profileData?.user?.state?.id)
	}, [profileData?.user?.state?.id])

	useEffect(() => {
		if (!profileData?.user) return
		getAreaList(profileData?.user?.city?.id)
	}, [profileData?.user?.city?.id])

	return (
		<>
			<AuthLayout>
				<Formik
					w={`100%`}
					enableReinitialize={true}
					initialValues={initFormData()}
					onSubmit={(values, actions) => {
						console.log('values = ', values)
						dispatch(updateProfile(objectToFormData(values)))
							.then(unwrapResult)
							.then((res) => {})
							.catch((err) => console.log(err))

						actions.setSubmitting(false)
					}}
					validationSchema={validationSchema}
				>
					{(props) => (
						<Form w={`100%`} style={{ width: '100%' }}>
							{router?.query?.fromLogin && (
								<Alert status="warning">
									<AlertIcon />
									You did not update your profile. Please upadate.
								</Alert>
							)}
							<Box
								p={{ base: 2, sm: 4, md: 8, lg: 10 }}
								className={editProfileStyles.profileBox}
							>
								<Text textStyle="2md" fontWeight="bold" as="h3">
									Update Profile
								</Text>
								<Text mt={8} mb={2} textStyle="md" fontWeight="bold" as="h3">
									General Information
								</Text>
								<Flex gap={6}>
									<Grid w="100%">
										<Box>
											<Field name="name">
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.name && form.touched.name}
													>
														<FormLabel>Full Name</FormLabel>
														<Input
															{...field}
															placeholder="Name*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>

														<FormErrorMessage>
															{form.errors.name}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
								</Flex>
								<Flex
									gap={6}
									direction={{
										base: 'column',
										sm: 'column',
										md: 'row',
										lg: 'row',
									}}
								>
									<Grid
										w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}
										mt={5}
									>
										<Box>
											{/* <PhoneNumberInput
											_placeholder={{
												fontWeight: 200,
												fontSize: `16px`,
												color: `gray.400`,
											}}
											isDisabled
											value={value}
											options={countryOptions}
											placeholder="Phone"
											onChange={(value) => setValue(value)}
										/> */}
											<Field name="phone">
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.phone && form.touched.phone}
													>
														<FormLabel>Phone</FormLabel>
														<Input
															{...field}
															placeholder="Phone*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
															isDisabled
														/>

														<FormErrorMessage>
															{form.errors.phone}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
									<Grid
										w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}
										mt={{ base: 0, sm: 0, md: 5, lg: 5 }}
									>
										<Box>
											<Field name="email">
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.email && form.touched.email}
													>
														<FormLabel>Email</FormLabel>
														<Input
															{...field}
															isDisabled
															placeholder="Email*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>

														<FormErrorMessage>
															{form.errors.name}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
								</Flex>
								<Flex
									gap={6}
									direction={{
										base: 'column',
										sm: 'column',
										md: 'row',
										lg: 'row',
									}}
								>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={5}
									>
										<Box>
											<Field name="phone_secondary">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.phone_secondary &&
															form.touched.phone_secondary
														}
													>
														<FormLabel>Secondary Phone</FormLabel>
														<Input
															{...field}
															placeholder="Secondary Phone*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>

														<FormErrorMessage>
															{form.errors.phone_secondary}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
								</Flex>
								<Flex gap={6}>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={5}
									>
										<Box>
											<Field name="about">
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.about && form.touched.about}
													>
														<FormLabel>About</FormLabel>
														<Textarea
															{...field}
															placeholder="About*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>

														<FormErrorMessage>
															{form.errors.about}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
								</Flex>

								<Text mt={10} textStyle="md" fontWeight="bold" as="h3">
									Address
								</Text>
								<Flex gap={6}>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={5}
									>
										<Box>
											<Field name="address">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.address && form.touched.address
														}
													>
														<FormLabel>Address</FormLabel>
														<Textarea
															{...field}
															placeholder="Address*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>

														<FormErrorMessage>
															{form.errors.address}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
								</Flex>
								<Flex
									gap={6}
									direction={{
										base: 'column',
										sm: 'column',
										md: 'row',
										lg: 'row',
									}}
								>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={5}
									>
										<Box>
											<Field name="country_id">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.country_id && form.touched.country_id
														}
													>
														<FormLabel>Select Country</FormLabel>
														<Select
															{...field}
															placeholder="Select Country"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
															isDisabled
														>
															{countries.map((country) => (
																<option
																	key={country.value}
																	value={country.value}
																>
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
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={{ base: 0, sm: 0, md: 5, lg: 5 }}
									>
										<Box>
											<Field name="state_id">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.state_id && form.touched.state_id
														}
													>
														<FormLabel>Select State</FormLabel>
														<Select
															{...field}
															placeholder="Select State/Division/Province"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
															onChange={(e) => {
																handleStateChange(e)
																props.handleChange(e)
																props.values.city_id = ''
																props.values.area_id = ''
															}}
														>
															{/* {console.log("props = ",props.values.state_id)} */}
															{states.map((state) => (
																<option key={state.value} value={state.value}>
																	{state.label}
																</option>
															))}
														</Select>
														{/* {console.log(form.values)} */}
														<FormErrorMessage>
															{form.errors.state_id}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
								</Flex>
								<Flex
									gap={6}
									direction={{
										base: 'column',
										sm: 'column',
										md: 'row',
										lg: 'row',
									}}
								>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={5}
									>
										<Box>
											<Field name="city_id">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.city_id && form.touched.city_id
														}
													>
														<FormLabel>Select City</FormLabel>
														<Select
															{...field}
															placeholder="Select City"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
															onChange={(e) => {
																handleCityChange(e)
																props.handleChange(e)
																props.values.area_id = ''
															}}
															isDisabled={!props.values?.state_id}
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
									</Grid>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={{ base: 0, sm: 0, md: 5, lg: 5 }}
									>
										<Box>
											<Field name="area_id">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.area_id && form.touched.area_id
														}
													>
														<FormLabel>Select Area</FormLabel>
														<Select
															{...field}
															placeholder="Select Area"
															size={`md`}
															isDisabled={!props.values?.city_id}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														>
															{areas.map((area) => (
																<option key={area.value} value={area.value}>
																	{area.label}
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
									</Grid>
								</Flex>
								<Flex
									gap={6}
									direction={{
										base: 'column',
										sm: 'column',
										md: 'row',
										lg: 'row',
									}}
								>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={{ base: 5, sm: 5, md: 5, lg: 5 }}
									>
										<Box>
											<Field name="zip_code">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.zip_code && form.touched.zip_code
														}
													>
														<FormLabel>Zip Code/Postal Code</FormLabel>
														<Input
															{...field}
															placeholder="Zip Code/Postal Code"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>

														<FormErrorMessage>
															{form.errors.zip_code}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
								</Flex>
								<Text mt={10} textStyle="md" fontWeight="bold" as="h3">
									Google Map
								</Text>
								<Flex
									gap={6}
									direction={{
										base: 'column',
										sm: 'column',
										md: 'row',
										lg: 'row',
									}}
								>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={5}
									>
										<Box>
											<Field name="lat">
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.lat && form.touched.lat}
													>
														<FormLabel>Latitude</FormLabel>
														<Input
															{...field}
															placeholder="Latitude*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>

														<FormErrorMessage>
															{form.errors.lat}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={{ base: 0, sm: 0, md: 5, lg: 5 }}
									>
										<Box>
											<Field name="long">
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.long && form.touched.long}
													>
														<FormLabel>Longitude</FormLabel>
														<Input
															{...field}
															placeholder="Longitude*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>

														<FormErrorMessage>
															{form.errors.long}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
								</Flex>

								<Text mt={10} textStyle="md" fontWeight="bold" as="h3">
									Identity Verification
								</Text>
								<Flex
									gap={6}
									direction={{
										base: 'column',
										sm: 'column',
										md: 'row',
										lg: 'row',
									}}
								>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={5}
									>
										<Box>
											<Field name="identity_type_id">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.identity_type_id &&
															form.touched.identity_type_id
														}
													>
														<FormLabel>Select Identity Type</FormLabel>
														<Select
															{...field}
															placeholder="Select Identity Type"
														>
															{identityTypes.map((idType) => (
																<option key={idType.value} value={idType.value}>
																	{idType.label}
																</option>
															))}
														</Select>

														<FormErrorMessage>
															{form.errors.long}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={{ base: 0, sm: 0, md: 5, lg: 5 }}
									>
										<Box>
											<Field name="identity_number">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.identity_number &&
															form.touched.identity_number
														}
													>
														<FormLabel>Identity Number</FormLabel>
														<Input
															{...field}
															placeholder="Identity Number*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>

														<FormErrorMessage>
															{form.errors.identity_number}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
										</Box>
									</Grid>
								</Flex>
								<Text mt={10} textStyle="md" fontWeight="bold" as="h3">
									Upload your ID Photo
								</Text>
								<Flex
									gap={6}
									direction={{
										base: 'column',
										sm: 'column',
										md: 'row',
										lg: 'row',
									}}
								>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={5}
									>
										<Box>
											<UnorderedList>
												<ListItem mb={3}>
													Make sure the entire frame of your ID card is visible
													in the photo.
												</ListItem>
												<ListItem mb={3}>
													Please ensure your photo is readable and in focus. We
													will not accept unclear photo.
												</ListItem>
												<ListItem>
													Your ID card must be valid and not expired.
												</ListItem>
											</UnorderedList>
										</Box>
									</Grid>
									<Flex
										gap={8}
										direction={{
											base: 'column',
											sm: 'row',
											md: 'row',
											lg: 'row',
										}}
										alignItems={{ base: 'center' }}
									>
										<IdCardPhotoSection
											isRequired={true}
											link={profileData?.user?.identity_photo_front_url || ''}
											title="ID Photo (Front)"
											getFile={(file) => {
												props.values.identity_photo_front = file
											}}
										/>
										<IdCardPhotoSection
											isRequired={true}
											link={profileData?.user?.identity_photo_back_url || ''}
											title="ID Photo (Back)"
											getFile={(file) => {
												props.values.identity_photo_back = file
											}}
										/>
									</Flex>
								</Flex>

								<Text mt={10} textStyle="md" fontWeight="bold" as="h3">
									Upload a Selfie with your ID
								</Text>
								<Flex
									gap={6}
									direction={{
										base: 'column',
										sm: 'column',
										md: 'row',
										lg: 'row',
									}}
								>
									<Grid
										w={{ base: '100%', sm: '100%', md: '48.5%', lg: '48.5%' }}
										mt={5}
									>
										<Box>
											<UnorderedList>
												<ListItem mb={3}>
													Only use your ID card and no one else’s.
												</ListItem>
												<ListItem mb={3}>
													Make sure the entire frame of your ID card and your
													face are visible in the photo. We need to verify if
													the ID card belongs to you.
												</ListItem>
												<ListItem mb={3}>
													Your ID card must be valid and not expired.
												</ListItem>
												<ListItem>
													Credentials shown on your ID must match with the
													information you input in the form.
												</ListItem>
											</UnorderedList>
										</Box>
									</Grid>
									<Flex
										gap={8}
										direction={{
											base: 'column',
											sm: 'row',
											md: 'row',
											lg: 'row',
										}}
										alignItems={{ base: 'center' }}
									>
										<IdCardPhotoSection
											isRequired={true}
											link={profileData?.user?.identity_selfie_photo_url || ''}
											title="Selfie"
											getFile={(file) => {
												console.log(file)
												props.values.identity_selfie_photo = file
											}}
										/>
									</Flex>
								</Flex>

								<Box
									mt={10}
									display={`flex`}
									direction={{ base: `column`, sm: `row` }}
									justifyContent={{ base: `center`, sm: `flex-start` }}
								>
									<Button
										size="sm"
										mr={3}
										colorScheme="primary"
										type="submit"
										isLoading={isLoading}
									>
										Save
									</Button>
									<Button size="sm" colorScheme="primary" variant={'outline'}>
										Cancel
									</Button>
								</Box>
							</Box>
						</Form>
					)}
				</Formik>
			</AuthLayout>
		</>
	)
}

EditProfile.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'My Account', isCurrentPage: false, link: '/dashboard' },
	{ label: 'Profile', isCurrentPage: false, link: '/my-profile' },
	{ label: 'Edit Profile', isCurrentPage: true },
]
EditProfile.PageLayout = CustomerLayout
EditProfile.authLayout = AuthLayout

export default EditProfile
