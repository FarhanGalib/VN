import React, { useState } from 'react'

import {
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	Input,
	Text,
	Checkbox,
	Link,
	Stack,
	HStack,
	FormErrorMessage,
	useToast,
} from '@chakra-ui/react'
import { COUNTRIES } from 'utils/countries'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from 'store/slices/modalSlice'
import { SIGNUP_MODAL, OTP_MODAL } from '../../../../const/auth'
import { Field, Form, Formik } from 'formik'
import {
	registrationGetOtpRequest,
	setGivenRegistrationUserInfo,
} from 'store/slices/authSlice'
import * as Yup from 'yup'
import { unwrapResult } from '@reduxjs/toolkit'
import PhoneNumberInput from 'utils/PhoneNumberInput'

const countryOptions = COUNTRIES.map(({ name, iso }) => ({
	label: name,
	value: iso,
}))

const SignUpModal = () => {
	const modal = useSelector((state) => state.modal)
	const { isLoading, signUpErrors } = useSelector((state) => state.auth)
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const toast = useToast({
		containerStyle: {
			color: 'white',
		},
	})
	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.required('Email is Required')
			.email('Invalid email address'),
		phone: Yup.string().required('Phone no. is required'),
		password: Yup.string().required('Password is required'),
		password_confirmation: Yup.string()
			.required('Confirm Password is required')
			.oneOf([Yup.ref('password'), null], 'Passwords must match'),
		isChecked: Yup.string().required('Must agree with Terms & Conditions.'),
	})

	return (
		<>
			<Modal
				isOpen={modal.openSignUpModal}
				onClose={() => {
					dispatch(closeModal(SIGNUP_MODAL))
					setValue('')
				}}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader align={`center`}>
						<HStack justify="center">
							<Image src={'/images/vlogo.png'} alt="" />{' '}
						</HStack>
					</ModalHeader>
					<Text fontSize="17px" align={`center`} color={`gray.500`}>
						To Reginster, please enter your information
					</Text>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Stack gap={`1`} mt={`3`}>
							<Formik
								w={`100%`}
								initialValues={{
									name: '',
									email: '',
									phone: '',
									password: '',
									password_confirmation: '',
									isChecked: '',
								}}
								onSubmit={(values, actions) => {
									dispatch(registrationGetOtpRequest(values))
										.then(unwrapResult)
										.then((res) => {
											dispatch(setGivenRegistrationUserInfo(values))
											dispatch(closeModal(SIGNUP_MODAL))
											dispatch(openModal(OTP_MODAL))
											setValue('')
											toast({
												title: `OTP Sent!`,
												position: `top`,
												description: 'An OTP has been sent successfully.',
												status: 'success',
												isClosable: true,
											})
										})
										.catch((e) => {
											toast({
												// title: `Error Occured!`,
												position: `top`,
												description: e.message,
												status: 'error',
												isClosable: true,
												color: 'white',
											})
										})
									actions.setSubmitting(false)
								}}
								validationSchema={validationSchema}
							>
								{(props) => (
									<Form w={`100%`} style={{ width: '100%' }} as={Stack}>
										<Stack gap={2}>
											<Field name="name">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															signUpErrors?.name ||
															(form.errors.name && form.touched.name)
														}
													>
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
														{form.errors.name && (
															<FormErrorMessage>
																{form.errors.name}
															</FormErrorMessage>
														)}

														{!form.errors.name &&
															signUpErrors &&
															signUpErrors?.name && (
																<Text color={`#e53e3e`} fontSize={`sm`} mt={1}>
																	{signUpErrors.name[0]}
																</Text>
															)}
													</FormControl>
												)}
											</Field>

											<Field name="email">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															signUpErrors?.email ||
															(form.errors.email && form.touched.email)
														}
													>
														<Input
															{...field}
															placeholder="Email*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>
														{form.errors.email && (
															<FormErrorMessage>
																{form.errors.email}
															</FormErrorMessage>
														)}
														{!form.errors.email &&
															signUpErrors &&
															signUpErrors?.email && (
																<Text color={`#e53e3e`} fontSize={`sm`} mt={1}>
																	{signUpErrors.email[0]}
																</Text>
															)}
													</FormControl>
												)}
											</Field>

											<Field>
												{({ field, form }) => (
													<FormControl
														isInvalid={
															signUpErrors?.phone ||
															(form.errors.phone && form.touched.phone)
														}
													>
														{/* <Input
															as={PhoneNumberInput}
															country={'us'}
															placeholder="Phone*"
															// type="phone"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
															value={value}
															onChange={(phone) => setValue(phone)}
															{...field}
															// className={styles.phoneNumber}
														/> */}
														<PhoneNumberInput
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
															country="BGD"
															value={value}
															options={countryOptions}
															placeholder="Phone"
															// {...field}
															onChange={(val) => {
																setValue(val)
																field.value.phone = val.trim()
															}}
														/>
														{form.errors.phone && (
															<FormErrorMessage>
																{form.errors.phone}
															</FormErrorMessage>
														)}

														{!form.errors.phone &&
															signUpErrors &&
															signUpErrors?.phone && (
																<Text color={`#e53e3e`} fontSize={`sm`} mt={1}>
																	{signUpErrors.phone[0]}
																</Text>
															)}
													</FormControl>
												)}
											</Field>

											<Field name="password">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															signUpErrors?.password ||
															(form.errors.password && form.touched.password)
														}
													>
														<Input
															{...field}
															placeholder="Password*"
															type="password"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>
														{form.errors.password && (
															<FormErrorMessage>
																{form.errors.password}
															</FormErrorMessage>
														)}

														{!form.errors.e &&
															signUpErrors &&
															signUpErrors?.password && (
																<Text color={`#e53e3e`} fontSize={`sm`} mt={1}>
																	{signUpErrors.password[0]}
																</Text>
															)}
													</FormControl>
												)}
											</Field>

											<Field name="password_confirmation">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															signUpErrors?.password_confirmation ||
															(form.errors.password_confirmation &&
																form.touched.password_confirmation)
														}
													>
														<Input
															{...field}
															placeholder="Confirm Password*"
															type="password"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>
														{form.errors.password_confirmation && (
															<FormErrorMessage>
																{form.errors.password_confirmation}
															</FormErrorMessage>
														)}

														{!form.errors.password_confirmation &&
															signUpErrors &&
															signUpErrors?.password_confirmation && (
																<Text color={`#e53e3e`} fontSize={`sm`} mt={1}>
																	{signUpErrors.password_confirmation[0]}
																</Text>
															)}
													</FormControl>
												)}
											</Field>
											<Field name="isChecked">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															signUpErrors?.isChecked ||
															(form.errors.isChecked && form.touched.isChecked)
														}
													>
														<HStack fontSize={`14px`} mt={2}>
															<Checkbox
																{...field}
																size={`sm`}
																color={`gray.700`}
															>
																Agree To Varanin's{' '}
															</Checkbox>
															<Link color={`#0070f3`}>
																{` `} Terms and Condition
															</Link>
														</HStack>

														{form.errors.isChecked && (
															<FormErrorMessage>
																{form.errors.isChecked}
															</FormErrorMessage>
														)}
													</FormControl>
												)}
											</Field>
											<Button
												isLoading={isLoading}
												type="submit"
												my="lg"
												variant={`solid`}
												fontWeight={`100`}
												colorScheme={`primary`}
												w={`100%`}
												// onClick={() => {
												// dispatch(closeModal(SIGNUP_MODAL));
												// dispatch(openModal(OTP_MODAL));
												// }}
											>
												Submit
											</Button>
										</Stack>
									</Form>
								)}
							</Formik>
						</Stack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default SignUpModal
