import React, { useState, useEffect } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
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
	HStack,
	PinInputField,
	PinInput,
	useToast,
	Image,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, openModal } from 'store/slices/modalSlice'
import { OTP_MODAL, SIGNIN_MODAL } from '../../../../const/auth'
import {
	registrationRequest,
	setGivenRegistrationUserInfo,
} from 'store/slices/authSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { router } from 'next/router'

const OtpModal = () => {
	const modal = useSelector((state) => state.modal)
	const { givenRegistrationUserInfo, isLoading } = useSelector(
		(state) => state.auth
	)
	const [otp, setOtp] = useState('')
	const dispatch = useDispatch()

	const toast = useToast({
		containerStyle: {
			color: 'white',
		},
	})
	const handleOtpSubmit = () => {
		dispatch(registrationRequest({ ...givenRegistrationUserInfo, code: otp }))
			.then(unwrapResult)
			.then((res) => {
				dispatch(closeModal(OTP_MODAL))
				toast({
					title: `Account Created!`,
					position: `top`,
					description: 'Your account has been created successfully.',
					status: 'success',
					isClosable: true,
				})
				router.push('/profile/edit-profile')
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
	}

	return (
		<>
			{/* Otp modal */}
			<Modal
				isOpen={modal.openOTPModal}
				onClose={() => {
					dispatch(closeModal(OTP_MODAL))
					dispatch(setGivenRegistrationUserInfo(''))
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
					<Text
						fontSize="lg"
						align={`center`}
						color={`gray.700`}
						fontWeight={`700`}
					>
						Verification Code
					</Text>
					<Text
						fontSize="17px"
						align={`center`}
						color={`gray.700`}
						fontWeight={`500`}
					>
						We have sent the verification code to your mobile number
					</Text>

					<Text
						fontSize="17px"
						align={`center`}
						color={`gray.700`}
						fontWeight={`500`}
					>
						{givenRegistrationUserInfo.phone}
					</Text>

					<ModalCloseButton />
					<ModalBody pb={8}>
						<FormControl isInvalid={true}>
							<Stack align={`center`} gap={`1`} mt={`3`} pb={2}>
								<HStack>
									<PinInput otp onChange={(value) => setOtp(value)}>
										<PinInputField />
										<PinInputField />
										<PinInputField />
										<PinInputField />
										<PinInputField />
										<PinInputField />
									</PinInput>
								</HStack>
								{/* <FormErrorMessage>OTP is required.</FormErrorMessage> */}

								<Link
									align={`center`}
									color={`#0070f3`}
									fontSize={`14px`}
									onClick={() => {
										dispatch(closeModal(OTP_MODAL))
										dispatch(openModal(SIGNIN_MODAL))
									}}
								>
									Login with password instead
								</Link>
								<Button
									isDisabled={otp.length !== 6 || isLoading}
									w={`100%`}
									variant={`solid`}
									fontWeight={`100`}
									colorScheme={`primary`}
									isLoading={isLoading}
									onClick={() => handleOtpSubmit()}
								>
									Submit
								</Button>
							</Stack>
						</FormControl>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default OtpModal
