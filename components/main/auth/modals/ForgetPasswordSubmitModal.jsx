import React, { useEffect } from 'react'
import { FaFacebook } from 'react-icons/fa'
import app from 'utils/firebaseConfig.js'

import {
	getAuth,
	RecaptchaVerifier,
	signInWithPhoneNumber,
} from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'
import {
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	FormControl,
	FormLabel,
	Input,
	Text,
	Checkbox,
	Box,
	Link,
	Stack,
	HStack,
	VStack,
	SimpleGrid,
	PinInputField,
	PinInput,
	FormErrorMessage,
	useToast,
	Alert,
	AlertIcon,
	AlertDescription,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from 'store/slices/modalSlice'
import {
	SIGNUP_MODAL,
	OTP_MODAL,
	FORGET_PASSWORD_SUBMIT_MODAL,
	SIGNIN_MODAL,
} from '../../../../const/auth'
import { Field, Form, Formik } from 'formik'
import {
	resetPasswordRequest,
	setResetPasswordPhone,
} from 'store/slices/authSlice'
import * as Yup from 'yup'
import { unwrapResult } from '@reduxjs/toolkit'

const ForgetPasswordSubmitModal = () => {
	const modal = useSelector((state) => state.modal)
	const { isLoading, forgetPasswordSubmitErrors, forgetPasswordCodeError } =
		useSelector((state) => state.auth)
	const { resetPasswordPhone } = useSelector((state) => state.auth)

	const dispatch = useDispatch()
	const toast = useToast({
		containerStyle: {
			color: 'white',
		},
	})
	// const auth = getAuth(app)

	const validationSchema = Yup.object({
		code: Yup.string().required('Code is required'),
		password: Yup.string().required('Password is required'),
		password_confirmation: Yup.string()
			.required('Confirm Password is required')
			.oneOf([Yup.ref('password'), null], 'Passwords must match'),
	})

	return (
		<>
			<Modal
				isOpen={modal.openForgetPasswordSubmitModal}
				onClose={() => dispatch(closeModal(FORGET_PASSWORD_SUBMIT_MODAL))}
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
						To reset password, please enter your information
					</Text>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Stack gap={`1`} mt={`3`}>
							<Formik
								w={`100%`}
								initialValues={{
									code: '',
									password: '',
									password_confirmation: '',
								}}
								onSubmit={(values, actions) => {
									dispatch(
										resetPasswordRequest({ ...values, ...resetPasswordPhone })
									)
										.then(unwrapResult)
										.then((res) => {
											dispatch(closeModal(FORGET_PASSWORD_SUBMIT_MODAL))
											dispatch(openModal(SIGNIN_MODAL))
											toast({
												title: `Password Reset Successful!`,
												position: `top`,
												// description: "Your account has been created successfully.",
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
											<Alert
												status={!forgetPasswordCodeError ? 'success' : 'error'}
											>
												<AlertIcon />
												<AlertDescription textDecoration={`jusify`}>
													{!forgetPasswordCodeError
														? `An OTP code has been sent to your phone.`
														: forgetPasswordCodeError}
												</AlertDescription>
											</Alert>

											<Field name="code">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															forgetPasswordCodeError ||
															(form.errors.code && form.touched.code)
														}
													>
														<Input
															{...field}
															placeholder="code*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>
														{form.errors.code && (
															<FormErrorMessage>
																{form.errors.code}
															</FormErrorMessage>
														)}
														{!form.errors.code && forgetPasswordCodeError && (
															<Text color={`#e53e3e`} fontSize={`sm`} mt={1}>
																{forgetPasswordCodeError}
															</Text>
														)}
													</FormControl>
												)}
											</Field>

											<Field name="password">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															forgetPasswordSubmitErrors?.password ||
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

														{!form.errors.password &&
															forgetPasswordSubmitErrors &&
															forgetPasswordSubmitErrors?.password && (
																<Text color={`#e53e3e`} fontSize={`sm`} mt={1}>
																	{forgetPasswordSubmitErrors.password[0]}
																</Text>
															)}
													</FormControl>
												)}
											</Field>

											<Field name="password_confirmation">
												{({ field, form }) => (
													<FormControl
														isInvalid={
															forgetPasswordSubmitErrors?.password_confirmation ||
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
															forgetPasswordSubmitErrors &&
															forgetPasswordSubmitErrors?.password_confirmation && (
																<Text color={`#e53e3e`} fontSize={`sm`} mt={1}>
																	{
																		forgetPasswordSubmitErrors
																			.password_confirmation[0]
																	}
																</Text>
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

export default ForgetPasswordSubmitModal
