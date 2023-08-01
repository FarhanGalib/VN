// import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {
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
} from '@chakra-ui/react';

const regModals = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpen2,
		onOpen: onOpen2,
		onClose: onClose2,
	} = useDisclosure();

	const {
		isOpen: isOpen3,
		onOpen: onOpen3,
		onClose: onClose3,
	} = useDisclosure();
	const {
		isOpen: isResetOtpModalOpen,
		onOpen: onResetOtpModalOpen,
		onClose: onResetOtpModalClose,
	} = useDisclosure();
	const {
		isOpen: isOtpModalOpen,
		onOpen: onOtpModalOpen,
		onClose: onOtpModalClose,
	} = useDisclosure();
	const x = useDisclosure();

	console.log('buttonProps = ', x);
	useEffect(() => {
		onOpen();
	}, []);
	return (
		<div>
			<h1>Login</h1>
			<Button colorScheme={`blue`} size={`sm`} onClick={onOpen3}>
				Open Modal
			</Button>
			<Modal
				// initialFocusRef={initialRef}
				// finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader align={`center`}>Logo</ModalHeader>
					<Text fontSize="17px" align={`center`} color={`gray.700`}>
						To Sign in, please enter your mobile number
					</Text>
					<Text fontSize="17px " align={`center`} color={`gray.700`}>
						Or
					</Text>
					<Text fontSize="17px " align={`center`} color={`gray.700`}>
						Sign in with your email & password
					</Text>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Stack align={`center`} gap={`2`} mt={`3`} px={4} pb={2}>
							<Input variant="outline" borderRadius={`25px`}></Input>
							<HStack justify={`center`} fontSize={`14px`}>
								<Checkbox defaultChecked size={`14px`} color={`gray.700`}>
									Agree To Varanin's{' '}
								</Checkbox>
								<Link color={`#0070f3`}>{` `} Terms and Condition</Link>
							</HStack>
							<VStack justify={`center`} w={`100%`}>
								<Button
									w={`100%`}
									fontSize={`16px`}
									variant={`solid`}
									borderRadius={`25px`}
									fontWeight={`100`}
									colorScheme={`blue`}
									onClick={() => {
										onClose();
										onOtpModalOpen();
									}}
								>
									Sign in with OTP
								</Button>
								<Button
									w={`100%`}
									fontSize={`16px`}
									fontWeight={`100`}
									variant={`outline`}
									borderRadius={`25px`}
									borderColor={`#0070f3`}
									onClick={() => {
										onClose();
										onOpen3();
									}}
								>
									Sign in with Password
								</Button>
							</VStack>
							<VStack>
								<Text fontSize={`14px`} color={`gray.700`}>
									New User?{' '}
									<Link
										color={`#0070f3`}
										href="#"
										onClick={() => {
											onClose();
											onOpen2();
										}}
									>
										Register Here
									</Link>
								</Text>
								<Text fontSize={`14px`}>Or</Text>
							</VStack>
							<HStack>
								<Button
									variant={`outline`}
									borderRadius={`25px`}
									fontWeight={`300`}
									leftIcon={<FcGoogle size={`26px`} />}
									fontSize={`14px`}
								>
									Sign in with Google
								</Button>
								<Button
									variant={`outline`}
									borderRadius={`25px`}
									fontWeight={`300`}
									leftIcon={<FaFacebook color={`#3b5998`} size={`26px`} />}
									fontSize={`14px`}
								>
									Sign in with Facebook
								</Button>
							</HStack>
						</Stack>
					</ModalBody>
				</ModalContent>
			</Modal>

			{/* Email login modal*/}
			<Modal
				// initialFocusRef={initialRef}
				// finalFocusRef={finalRef}
				isOpen={isOpen3}
				onClose={onClose3}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader align={`center`}>Logo</ModalHeader>
					<Text fontSize="17px" align={`center`} color={`gray.500`}>
						To Sign in, please enter your email & Password
					</Text>

					<ModalCloseButton />
					<ModalBody px={10} pb={8}>
						<Stack align={`center`} gap={`1`} mt={`3`} px={4} pb={2}>
							<Input
								placeholder="Email*"
								borderRadius={`25px`}
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>
							<Input
								placeholder="Password*"
								borderRadius={`25px`}
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>
							<Text
								w={`100%`}
								align={`right`}
								color={`#0070f3`}
								fontSize={`14px`}
								onClick={() => {
									onClose3();
									onResetOtpModalOpen();
								}}
								cursor='pointer'
							>
								Forget Password?
							</Text>
							<Button
								w={`100%`}
								variant={`solid`}
								borderRadius={`25px`}
								fontWeight={`100`}
								colorScheme={`blue`}
							>
								Sign In
							</Button>
							<VStack>
								<Text color={`gray.500`} fontSize={`14px`}>
									New User?{' '}
									<Link
										color={`#0070f3`}
										onClick={() => {
											onClose3();
											onOpen2();
										}}
									>
										Register Here
									</Link>
								</Text>
								<Text color={`gray.500`} fontSize={`14px`}>
									Or
								</Text>
							</VStack>
							<HStack>
								<Button
									fontSize={`14px`}
									color={`gray.500`}
									variant={`outline`}
									borderRadius={`25px`}
									fontWeight={`300`}
									leftIcon={<FcGoogle size={`26px`} />}
								>
									Sign in with Google
								</Button>
								<Button
									fontSize={`14px`}
									color={`gray.500`}
									variant={`outline`}
									borderRadius={`25px`}
									fontWeight={`300`}
									leftIcon={<FaFacebook color={`#3b5998`} size={`26px`} />}
								>
									Sign in with Facebook
								</Button>
							</HStack>
						</Stack>
					</ModalBody>
				</ModalContent>
			</Modal>

			{/* Otp modal */}
			<Modal
				// initialFocusRef={initialRef}
				// finalFocusRef={finalRef}
				isOpen={isOtpModalOpen}
				onClose={onOtpModalClose}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader align={`center`}>Logo</ModalHeader>
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
						+01771502075
					</Text>

					<ModalCloseButton />
					<ModalBody px={10} pb={8}>
						<Stack align={`center`} gap={`1`} mt={`3`} px={4} pb={2}>
							<HStack>
								{/* <Input
									placeholder="0"
									borderRadius={`5px`}
									size={`md`}
									_placeholder={{
										fontWeight: 200,
										fontSize: `16px`,
										color: `gray.400`,
									}}
								/> */}
								<PinInput otp>
									<PinInputField />
									<PinInputField />
									<PinInputField />
									<PinInputField />
									<PinInputField />
									<PinInputField />
								</PinInput>
							</HStack>

							<Text
								w={`100%`}
								align={`center`}
								color={`gray.500`}
								fontSize={`14px`}
								cursor='pointer'
								fontStyle={`italic`}
							>
								Expires in : 2.00
							</Text>
							<Link
								// w={`100%`}
								align={`center`}
								color={`#0070f3`}
								fontSize={`14px`}
								onClick={() => {
									onOtpModalClose();
									onOpen3();
								}}
							>
								Login with password instead
							</Link>
							<Button
								w={`100%`}
								variant={`solid`}
								borderRadius={`25px`}
								fontWeight={`100`}
								colorScheme={`blue`}
							>
								Sign In
							</Button>
							{/* <VStack>
								<Text color={`gray.500`} fontSize={`14px`}>
									New User?{' '}
									<Link
										color={`#0070f3`}
										onClick={() => {
											onClose3();
											onOpen2();
										}}
									>
										Register Here
									</Link>
								</Text>
								<Text color={`gray.500`} fontSize={`14px`}>
									Or
								</Text>
							</VStack> */}
							{/* <HStack>
								<Button
									fontSize={`14px`}
									color={`gray.500`}
									variant={`outline`}
									borderRadius={`25px`}
									fontWeight={`300`}
									leftIcon={<FcGoogle size={`26px`} />}
								>
									Sign in with Google
								</Button>
								<Button
									fontSize={`14px`}
									color={`gray.500`}
									variant={`outline`}
									borderRadius={`25px`}
									fontWeight={`300`}
									leftIcon={<FaFacebook color={`#3b5998`} size={`26px`} />}
								>
									Sign in with Facebook
								</Button>
							</HStack> */}
						</Stack>
					</ModalBody>
				</ModalContent>
			</Modal>

			{/* reset password  modal*/}
			<Modal
				// initialFocusRef={initialRef}
				// finalFocusRef={finalRef}
				isOpen={isResetOtpModalOpen}
				onClose={onResetOtpModalClose}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader align={`center`}>Reset Password</ModalHeader>
					<Text fontSize="17px" align={`center`} color={`gray.500`}>
						To Reset Password, please enter your mobile number
					</Text>

					<ModalCloseButton />
					<ModalBody px={10} pb={8}>
						<Stack align={`center`} gap={`1`} mt={`3`} px={4} pb={2}>
							<Input
								placeholder="Enter email or phone number*"
								borderRadius={`25px`}
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
								borderRadius={`25px`}
								fontWeight={`100`}
								colorScheme={`blue`}
							>
								Send OTP
							</Button>
							<VStack>
								<Text color={`gray.500`} fontSize={`14px`}>
									New User?{' '}
									<Link
										color={`#0070f3`}
										onClick={() => {
											onResetOtpModalClose();
											onOpen2();
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

			{/* registration modal */}
			<Modal
				// initialFocusRef={initialRef}
				// finalFocusRef={finalRef}
				isOpen={isOpen2}
				onClose={onClose2}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader align={`center`}>Registration</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Stack gap={`1`} mt={`3`} px={`3`}>
							<Input
								placeholder="Name(As Per NID)*"
								borderRadius={`25px`}
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>
							<Input
								placeholder="Contact No*"
								borderRadius={`25px`}
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>
							<Input
								placeholder="Email"
								borderRadius={`25px`}
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>
							<Input
								placeholder="Address"
								borderRadius={`25px`}
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>
							<Input
								placeholder="Select Identity Type"
								borderRadius={`25px`}
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>
							<Input
								placeholder="Insert NID Number"
								borderRadius={`25px`}
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>
							<Box fontSize={`14px`}>
								<Checkbox defaultChecked size={`14px`} color={`gray.700`}>
									Will provide NID later{' '}
								</Checkbox>
							</Box>
							<Input
								placeholder="Password*"
								borderRadius={`25px`}
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>
							<Input
								placeholder="Confirm Password*"
								borderRadius={`25px`}
								size={`md`}
								_placeholder={{
									fontWeight: 200,
									fontSize: `16px`,
									color: `gray.400`,
								}}
							/>
							<HStack fontSize={`14px`}>
								<Checkbox defaultChecked size={`14px`} color={`gray.700`}>
									Agree To Varanin's{' '}
								</Checkbox>
								<Link color={`#0070f3`}>{` `} Terms and Condition</Link>
							</HStack>
							<Button
								my="lg"
								variant={`solid`}
								borderRadius={`25px`}
								fontWeight={`100`}
								colorScheme={`blue`}
							>
								Registration
							</Button>
							<SimpleGrid columns={2} spacing={2}>
								<Button
									leftIcon={<FcGoogle size={`26px`} />}
									variant={`outline`}
									borderRadius={`25px`}
									fontWeight={`100`}
									fontSize={`16px`}
								>
									Sign in with Google
								</Button>
								<Button
									leftIcon={<FaFacebook color={`#3b5998`} size={`26px`} />}
									variant={`outline`}
									borderRadius={`25px`}
									fontWeight={`100`}
									fontSize={`16px`}
								>
									Sign in with Facebook
								</Button>
							</SimpleGrid>
						</Stack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default regModals;
