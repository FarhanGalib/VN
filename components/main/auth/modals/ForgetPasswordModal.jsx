import React, { useState } from 'react'

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	Text,
	Link,
	Stack,
	VStack,
	Alert,
	AlertIcon,
	AlertDescription,
	FormErrorMessage,
	HStack,
	Image,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from 'store/slices/modalSlice'
import {
	SIGNUP_MODAL,
	FORGET_PASSWORD_MODAL,
	FORGET_PASSWORD_SUBMIT_MODAL,
} from '../../../../const/auth'
import { Field, Form, Formik } from 'formik'
import { otpRequest, setOtpError, setResetPasswordPhone } from 'store/slices/authSlice'
import * as Yup from 'yup'
import { unwrapResult } from '@reduxjs/toolkit'
import { COUNTRIES } from 'utils/countries'
import PhoneNumberInput from 'utils/PhoneNumberInput'

const countryOptions = COUNTRIES.map(({ name, iso }) => ({
	label: name,
	value: iso,
}))

const ForgetPasswordModal = () => {
	const [phoneNo, setPhoneNo] = useState('')
	const modal = useSelector((state) => state.modal)
	const { isLoading, otpError } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const validationSchema = Yup.object({
		phone: Yup.string().required('Phone is Required'),
	})
	return (
		<>
			{/* reset password  modal*/}
			<Modal
				// initialFocusRef={initialRef}
				// finalFocusRef={finalRef}
				isOpen={modal.openForgetPasswordModal}
				onClose={() => {
					dispatch(closeModal(FORGET_PASSWORD_MODAL))
					setPhoneNo('')
					dispatch(setOtpError(''))
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
						To Reset Password, please enter your phone nubmer
					</Text>

					<ModalCloseButton />
					<ModalBody pb={8}>
						<Formik
							w={`100%`}
							initialValues={{ phone: '' }}
							onSubmit={(values, actions) => {
								dispatch(otpRequest(values))
									.then(unwrapResult)
									.then((res) => {
										dispatch(setResetPasswordPhone(values))
										dispatch(closeModal(FORGET_PASSWORD_MODAL))
										dispatch(openModal(FORGET_PASSWORD_SUBMIT_MODAL))
									})
								// 	.catch((e)=> {
								// 	toast({
								// 		title: `Error Occured!`,
								// 		position: `top`,
								// 		description: "Something went wrong.",
								// 		status: 'error',
								// 		 isClosable: true,
								// 	})
								// }
								// 	)

								actions.setSubmitting(false)
							}}
							validationSchema={validationSchema}
						>
							{(props) => (
								<Form w={`100%`} style={{ width: '100%' }} as={Stack}>
									<Stack>
										{otpError && (
											<Alert status="error">
												<AlertIcon />
												<AlertDescription>{otpError}</AlertDescription>
											</Alert>
										)}
										<Field>
											{({ field, form }) => (
												<FormControl
													isInvalid={form.errors.phone && form.touched.phone}
												>
													{/* <Input
														{...field}
														placeholder="Phone*"
														size={`md`}
														_placeholder={{
															fontWeight: 200,
															fontSize: `16px`,
															color: `gray.400`,
														}}
													/> */}
													<PhoneNumberInput
														_placeholder={{
															fontWeight: 200,
															fontSize: `16px`,
															color: `gray.400`,
														}}
														country="BGD"
														value={phoneNo}
														options={countryOptions}
														placeholder="Phone"
														// {...field}
														onChange={(val) => {
															setPhoneNo(val)
															field.value.phone = val
														}}
													/>

													<FormErrorMessage>
														{form.errors.phone}
													</FormErrorMessage>
												</FormControl>
											)}
										</Field>

										<Button
											isLoading={isLoading}
											type="submit"
											w={`100%`}
											variant={`solid`}
											fontWeight={`100`}
											colorScheme={`primary`}
										>
											Send OTP
										</Button>

										<VStack>
											<Text color={`gray.500`} fontSize={`14px`}>
												New User?{' '}
												<Link
													color={`#0070f3`}
													onClick={() => {
														dispatch(closeModal(FORGET_PASSWORD_MODAL))
														dispatch(openModal(SIGNUP_MODAL))
													}}
												>
													Register Here
												</Link>
											</Text>
										</VStack>
									</Stack>
								</Form>
							)}
						</Formik>

						{/* <Stack align={`center`} gap={`1`} mt={`3`} px={4} pb={2}> */}
						{/* <Input
								placeholder="Enter email or phone number*"
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>

							<Button
								w={`100%`}
								variant={`solid`}
								fontWeight={`100`}
								colorScheme={`primary`}
							>
								Send OTP
							</Button>
							<VStack>
								<Text color={`gray.500`} fontSize={`14px`}>
									New User?{' '}
									<Link
										color={`#0070f3`}
										onClick={() => {
											dispatch(closeModal(FORGET_PASSWORD_MODAL));
											dispatch(openModal(SIGNUP_MODAL));
										}}
									>
										Register Here
									</Link>
								</Text>
							</VStack> */}
						{/* </Stack> */}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default ForgetPasswordModal
