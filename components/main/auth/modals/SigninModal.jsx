import React, { useState } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

import {
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
	Link,
	Stack,
	HStack,
	VStack,
	FormErrorMessage,
	Image,
	Alert,
	AlertIcon,
	AlertDescription,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, closeModal } from 'store/slices/modalSlice'
import {
	SIGNIN_MODAL,
	SIGNUP_MODAL,
	FORGET_PASSWORD_MODAL,
} from '../../../../const/auth'
import { Field, Form, Formik } from 'formik'
import { setSignInError, signInUser } from 'store/slices/authSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { router } from 'next/router'

const SigninModal = () => {
	const modal = useSelector((state) => state.modal)
	const { token, isSignedIn, isLoading, signInError } = useSelector(
		(state) => state.auth
	)
	const [passwordType, setPasswordType] = useState('password')
	const dispatch = useDispatch()
	const toast = useToast({
		containerStyle: {
			color: 'white',
		},
	})

	const validateUsername = (value) => {
		let error
		if (!value) {
			error = 'Email or Phone no. is required'
		}
		// else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
		// 	error = 'Invalid email address'
		return error
	}
	const validatePass = (value) => {
		let error
		if (!value) {
			error = 'Password is required'
		} else if (value.length < 8)
			error = 'Password must be at least 8 character.'
		else return false
		return error
	}

	return (
		<>
			{/* Email login modal*/}
			<Modal
				isOpen={modal.openSignInModal}
				onClose={() => {
					dispatch(closeModal(SIGNIN_MODAL))
					dispatch(setSignInError(''))
				}}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader align={`center`}>
						{' '}
						<HStack justify="center">
							<Image src={'/images/vlogo.png'} alt="" />{' '}
						</HStack>
					</ModalHeader>
					<Text fontSize="17px" align={`center`} color={`gray.500`}>
						To Sign in, please enter your email & Password
					</Text>

					<ModalCloseButton />
					<ModalBody pb={8}>
						<Stack align={`center`} gap={`1`} mt={`3`} pb={2}>
							<Formik
								w={`100%`}
								initialValues={{ username: '', password: '' }}
								onSubmit={(values, actions) => {
									dispatch(signInUser(values))
										.then(unwrapResult)
										.then((res) => {
											dispatch(closeModal(SIGNIN_MODAL))
											toast({
												title: `Signed in successfully!`,
												position: `top`,
												status: 'success',
												isClosable: true,
											})
											if (!res.data.user.profile) {
												router.push(
													{
														pathname: '/profile/edit-profile',
														query: { fromLogin: true },
													},
													'/profile/edit-profile'
												)
											}
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
								{(props) => (
									<Form w={`100%`} style={{ width: '100%' }} as={Stack}>
										<Stack>
											{signInError && (
												<Alert status="error">
													<AlertIcon />
													<AlertDescription>{signInError}</AlertDescription>
												</Alert>
											)}
											<Field name="username" validate={validateUsername}>
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.username && form.touched.username
														}
													>
														<Input
															{...field}
															placeholder="Email or Phone no.*"
															size={`md`}
															_placeholder={{
																fontWeight: 200,
																fontSize: `16px`,
																color: `gray.400`,
															}}
														/>

														<FormErrorMessage>
															{form.errors.username}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>

											<Field name="password" validate={validatePass}>
												{({ field, form }) => (
													<FormControl
														isInvalid={
															form.errors.password && form.touched.password
														}
													>
														<InputGroup size="md">
															<Input
																{...field}
																type={
																	passwordType === 'text' ? 'text' : 'password'
																}
																placeholder="Password*"
																size={`md`}
																_placeholder={{
																	fontWeight: 200,
																	fontSize: `16px`,
																	color: `gray.400`,
																}}
															/>
															<InputRightElement width="4.5rem">
																{passwordType === 'password' ? (
																	<BsFillEyeFill
																		color='lightGray'
																		cursor='pointer'
																		onClick={() => setPasswordType('text')}
																	/>
																) : (
																	<BsFillEyeSlashFill
																		color='lightGray'
																		cursor='pointer'
																		onClick={() => setPasswordType('password')}
																	/>
																)}
															</InputRightElement>
														</InputGroup>
														
														<FormErrorMessage>
															{form.errors.password}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>

											<Stack direction={`row`} justify={`flex-end`} w={`100%`}>
												<Text
													color={`#0070f3`}
													fontSize={`14px`}
													onClick={() => {
														dispatch(closeModal(SIGNIN_MODAL))
														dispatch(openModal(FORGET_PASSWORD_MODAL))
													}}
													cursor="pointer"
												>
													Forget Password?
												</Text>
											</Stack>
											<Button
												isLoading={isLoading}
												type="submit"
												w={`100%`}
												variant={`solid`}
												fontWeight={`100`}
												colorScheme={`primary`}
											>
												Sign In
											</Button>
										</Stack>
									</Form>
								)}
							</Formik>

							<VStack>
								<Text color={`gray.500`} fontSize={`14px`}>
									New User?{' '}
									<Link
										color={`#0070f3`}
										onClick={() => {
											dispatch(closeModal(SIGNIN_MODAL))
											dispatch(openModal(SIGNUP_MODAL))
										}}
									>
										Register Here
									</Link>
								</Text>
							</VStack>
						</Stack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default SigninModal
