import myProfileStyles from '/styles/myProfile.module.css'
import {
	Box,
	Text,
	Flex,
	Grid,
	Button,
	Tabs,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
	GridItem,
	Input,
	AspectRatio,
	useToast,
	Image,
	Spinner,
	IconButton,
	Stack,
	Heading,
	Progress,
	ProgressLabel,
} from '@chakra-ui/react'
import {
	HiCheckCircle,
	HiPhone,
	HiOutlineChevronUp,
	HiOutlineChevronDown,
	HiMail,
} from 'react-icons/hi'
import { RxCrossCircled } from 'react-icons/rx'
import { AiFillStar } from 'react-icons/ai'

import CustomerLayout from 'components/layout/CustomerLayout'
import React, { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
import { BsChatRight, BsFlagFill } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { MdStar } from 'react-icons/md'
import AuthLayout from 'components/layout/AuthLayout'
import { router } from 'next/router'
import { FiEdit, FiEdit2 } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import {
	getProfile,
	saveBannerPhoto,
	saveProfilePhoto,
} from 'store/slices/profileSlice'
import { objectToFormData } from 'utils/utils'
import { unwrapResult } from '@reduxjs/toolkit'
import ProfileCropper from 'components/my-profile/ProfileCropper'
import BannerCropper from 'components/my-profile/BannerCropper'
import { array } from 'yup'
// import Image from 'next/image'

const MyProfile = () => {
	const defaultHeight = 150
	const { profile } = useSelector((state) => state.profileInfo)
	const [descriptionHeight, setDescriptionHeight] = useState(defaultHeight)
	const [descriptionCollapsed, setDescriptionCollapsed] = useState(true)
	const [profilePhotoLink, setProfilePhotoLink] = useState(null)
	const [profilePhotoFile, setProfilePhotoFile] = useState(null)
	const [bannerPhotoLink, setBannerPhotoLink] = useState(null)
	const [bannerPhotoFile, setBannerPhotoFile] = useState(null)
	const [isCroppingModalOpen, setCroppingModal] = useState(false)
	const [isBannerCroppingModalOpen, setBannerCroppingModal] = useState(false)
	const [profileCanvas, setProfileCanvas] = useState(null)
	const [bannerCanvas, setBannerCanvas] = useState(null)
	const toast = useToast({
		containerStyle: {
			color: 'white',
		},
	})

	const profileRef = useRef(null)
	const bannerRef = useRef(null)
	const dispatch = useDispatch()

	const collapseButton = () => {
		setDescriptionCollapsed(!descriptionCollapsed)
		setDescriptionHeight(descriptionCollapsed ? defaultHeight : 'auto')
	}

	const getTotalRatings = (array = []) => {
		let total = 0

		if (array && array.length > 0) {
			array.map((val, i) => {
				if (i < 5) {
					total += val
				}
			})
		}
		return total
	}

	const getInduvidualRatingPracentage = (array = [], numberOfVote) => {
		let total = 0
		let avg = 0

		if (array && array.length > 0) {
			array.map((val, i) => {
				if (i < 5) {
					total += val
				}
			})
			if (numberOfVote > 0) avg = (numberOfVote / total) * 100
			else avg = 0
		}
		return avg
	}

	const handleProfilePictureChange = (e) => {
		if (e.target.files[0]) {
			setProfilePhotoFile(e.target.files[0])
			setProfilePhotoLink(URL.createObjectURL(e.target.files[0]))
			setCroppingModal(true)
		}
	}

	const handleSave = (cropperRef) => {
		const cropper = cropperRef.current
		if (cropper) {
			const coordinates = cropper.getCoordinates()
			const canvas = cropper.getCanvas()

			dispatch(
				saveProfilePhoto(
					objectToFormData({
						image: profilePhotoFile,
						width: coordinates.width,
						height: coordinates.height,
						top: coordinates.top,
						left: coordinates.left,
					})
				)
			)
				.then(unwrapResult)
				.then((res) => {
					setProfileCanvas(canvas.toDataURL())
					toast({
						description: 'Successfully Uploaded Profile Photo.',
						status: 'success',
						duration: 9000,
						isClosable: true,
						position: 'top',
					})
				})
				.catch((err) => {
					toast({
						description: 'Something Went Wrong.',
						status: 'error',
						duration: 9000,
						isClosable: true,
						position: 'top',
					})
				})
		}
		setCroppingModal(false)
	}

	const handleBannerPhotoChange = (e) => {
		if (e.target.files[0]) {
			setBannerPhotoFile(e.target.files[0])
			setBannerPhotoLink(URL.createObjectURL(e.target.files[0]))
			setBannerCroppingModal(true)
		}
	}

	const handleBannerPhotoSave = (cropperRef) => {
		const cropper = cropperRef.current
		if (cropper) {
			const coordinates = cropper.getCoordinates()
			const canvas = cropper.getCanvas()

			dispatch(
				saveBannerPhoto(
					objectToFormData({
						banner: bannerPhotoFile,
						width: coordinates.width,
						height: coordinates.height,
						top: coordinates.top,
						left: coordinates.left,
					})
				)
			)
				.then(unwrapResult)
				.then((res) => {
					setBannerCanvas(canvas.toDataURL())
					toast({
						description: 'Successfully Uploaded Banner Photo.',
						status: 'success',
						duration: 9000,
						isClosable: true,
						position: 'top',
					})
				})
				.catch((err) => {
					toast({
						description: 'Something Went Wrong.',
						status: 'error',
						duration: 9000,
						isClosable: true,
						position: 'top',
					})
				})
		}
		setBannerCroppingModal(false)
	}

	useEffect(() => {
		dispatch(getProfile())
	}, [])
	return (
		<>
			<Box>
				<Box
					width="100%"
					height={{ base: '100px', sm: '150px', md: '300px', lg: '300px' }}
					position="relative"
				>
					<AspectRatio
						ratio={8 / 3}
						maxH={{ base: '100px', sm: '150px', md: '300px', lg: '300px' }}
					>
						<Image
							src={
								bannerCanvas
									? bannerCanvas
									: profile?.user?.banner_url
									? profile?.user.banner_url
									: '/images/banner-profile.jpg'
							}
							alt="barbecue"
							layout="fill"
							fit="cover"
						/>
					</AspectRatio>
					<Input
						ref={bannerRef}
						type="file"
						style={{ display: 'none' }}
						pos={`absolute`}
						accept="image/*"
						onChange={(e) => handleBannerPhotoChange(e)}
					/>
					<BannerCropper
						isCroppingModalOpen={isBannerCroppingModalOpen}
						setCroppingModal={setBannerCroppingModal}
						handleSave={handleBannerPhotoSave}
						photoLink={bannerPhotoLink}
						ratio={8 / 3}
					/>

					<IconButton
						icon={<FiEdit2 />}
						pos="absolute"
						right={{ base: `none`, sm: `5px` }}
						bottom={{ base: `none`, sm: `5px` }}
						// colorScheme="primary"
						title="Change Banner"
						size={`xs`}
						onClick={() => bannerRef.current.click()}
					></IconButton>
				</Box>
				<Box ml={{ base: 0, sm: 5, md: 5, lg: 12, xl: 12 }} position="relative">
					<Flex
						gap={8}
						direction={{
							base: 'column',
							sm: 'column',
							md: 'row',
							lg: 'row',
							xl: 'row',
						}}
						w="100%"
					>
						<Grid
							w={{ base: '100%', sm: '30%', md: '20%', lg: '20%', xl: '15%' }}
							// border={`1px solid red`}
						>
							<Box className={myProfileStyles.imageBox}>
								<Box pos="relative" height={`150px`} width={`150px`}>
									<AspectRatio ratio={1} maxW="150px" maxH="150px">
										<Image
											fit="cover"
											style={{ borderRadius: 8 }}
											src={
												profileCanvas
													? profileCanvas
													: profile?.user?.image_url
													? profile?.user?.image_url
													: `/images/profile-image.jpg`
											}
											alt="barbecue"
											width="150px"
											height="150px"
											className={myProfileStyles.profileImage}
										/>
									</AspectRatio>
									<Input
										ref={profileRef}
										type="file"
										style={{ display: 'none' }}
										pos={`absolute`}
										accept="image/*"
										onChange={handleProfilePictureChange}
									/>
									<Box
										as={Button}
										display={`none`}
										textAlign={`center`}
										width={`100%`}
										height={`35%`}
										pos={`absolute`}
										bg="white"
										bottom="0%"
										zIndex={1}
										borderBottomRadius={`7px`}
										cursor={`pointer`}
										className={`${myProfileStyles.profileChangeImage} animate__animated animate__fadeInUp`}
										opacity=".5"
										onClick={() => profileRef.current.click()}
									>
										<Text fontSize={`sm`}>Change Picture</Text>
									</Box>
								</Box>
								<ProfileCropper
									isCroppingModalOpen={isCroppingModalOpen}
									setCroppingModal={setCroppingModal}
									handleSave={handleSave}
									photoLink={profilePhotoLink}
								/>
							</Box>
						</Grid>
						<Grid
							w={{ base: '100%', sm: '70%', md: '80%', lg: '85%', xl: '88%' }}
							mt={5}
						>
							<Flex
								gap={4}
								direction={{
									base: 'column',
									sm: 'column',
									md: 'row',
									lg: 'row',
									xl: 'row',
								}}
								w="100%"
							>
								<Grid>
									<Text
										mt={{ base: 10, sm: 6, md: 0, lg: 0 }}
										textAlign={{
											base: 'center',
											sm: 'left',
											md: 'left',
											lg: 'left',
										}}
										textStyle={{ base: 'md', sm: 'md', md: 'md', lg: 'lg' }}
										fontWeight="bold"
										as="h1"
									>
										{profile?.user?.name}
									</Text>
									<Text
										textStyle="xs"
										textAlign={{
											base: 'center',
											sm: 'left',
											md: 'left',
											lg: 'left',
										}}
									>
										{profile?.user?.is_verified ? (
											<HiCheckCircle
												style={{
													color: '#ce0078',
													marginTop: 5,
													display: 'inline-block',
													position: 'relative',
													marginLeft: '-2px',
													top: 4,
													fontSize: '16',
												}}
											/>
										) : (
											<RxCrossCircled
												style={{
													color: '#ce0078',
													marginTop: 5,
													display: 'inline-block',
													position: 'relative',
													marginLeft: '-2px',
													top: 4,
													fontSize: '16',
												}}
											/>
										)}{' '}
										{profile?.user?.is_verified
											? `Verified User`
											: `Non-verified User`}
									</Text>
								</Grid>
								<Grid mt={{ base: 0, sm: 0, md: 1, lg: 1 }}>
									<Button
										onClick={() => router.push(`/profile/edit-profile`)}
										rightIcon={
											<FaRegEdit
												style={{
													display: 'inline-block',
													position: 'relative',
													top: 0,
												}}
											/>
										}
										size="xs"
										colorScheme="primary"
									>
										Edit Profile
									</Button>
								</Grid>
							</Flex>
						</Grid>
					</Flex>
				</Box>
				<Flex
					gap={{ base: 0, sm: 2, md: 6, lg: 8 }}
					direction={{
						base: 'column',
						sm: 'column',
						md: 'row',
						lg: 'row',
						xl: 'row',
					}}
					w="100%"
					mt={5}
				>
					<Grid>
						<Text textStyle="md" fontWeight="bold" as="p">
							<HiPhone
								style={{
									color: '#ce0078',
									display: 'inline-flex',
									top: 2,
									position: 'relative',
								}}
							/>{' '}
							{profile?.user?.phone}
						</Text>
					</Grid>
					<Grid>
						<Text textStyle="md" fontWeight="bold" as="p">
							<HiMail
								style={{
									color: '#ce0078',
									display: 'inline-flex',
									top: 4,
									position: 'relative',
								}}
							/>{' '}
							{profile?.user?.email}
						</Text>
					</Grid>
				</Flex>
				<Flex
					gap={8}
					direction={{
						base: 'column',
						sm: 'column',
						md: 'row',
						lg: 'row',
						xl: 'row',
					}}
					w="100%"
					mt={8}
				>
					<Grid
						w={{ base: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%' }}
					>
						<Box>
							<Text textStyle="md" mb={1} fontWeight="bold" as="p">
								Address
							</Text>
							<Text textStyle="sm" as="p" mb={2}>
								humayun road, block # c, mohammadpur, Dhaka, 1207
							</Text>
							{/* <Box width="100%" height="300px" position="relative"> */}

							{
								<AspectRatio ratio={16 / 7}>
									<iframe
										style={{ width: '100%', height: '100%' }}
										frameBorder="0"
										scrolling="no"
										marginHeight="0"
										marginWidth="0"
										src={
											'https://maps.google.com/maps?q=' +
											23.775 +
											',' +
											90.404724 +
											'&t=&z=15&ie=UTF8&iwloc=&output=embed'
										}
									/>
								</AspectRatio>
							}
						</Box>
						{/* </Box> */}

						{profile?.user?.about && (
							<Box mt={6}>
								<Text textStyle="md" mb={2} fontWeight="bold" as="p">
									About
								</Text>
								<Text
									// className={
									// 	descriptionCollapsed
									// 		? myProfileStyles.descriptionCollapsed
									// 		: myProfileStyles.descriptionOpen
									// }
									textStyle="sm"
								>
									{profile?.user?.about}
								</Text>
								{/* <Box mt={1}>
								<Button
									align="center"
									onClick={collapseButton}
									className={
										descriptionCollapsed
											? myProfileStyles.descriptionButtonCollapsed
											: myProfileStyles.descriptionButtonOpen
									}
									rightIcon={
										descriptionCollapsed ? (
											<HiOutlineChevronDown />
										) : (
											<HiOutlineChevronUp />
										)
									}
									size="xs"
									colorScheme="primary"
									variant="outline"
								>
									{descriptionCollapsed ? 'See more' : 'See less'}
								</Button>
							</Box> */}
							</Box>
						)}
					</Grid>
					<Flex
						direction={`column`}
						w={{ base: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%' }}
					>
						<Text textStyle="md" fontWeight="bold" mb={2} as="p">
							Reviews
						</Text>
						<Tabs colorScheme={'primary'}>
							<TabList>
								<Tab>As a Vendor</Tab>
								<Tab>As a Renter</Tab>
							</TabList>
							<TabPanels>
								<TabPanel p={0}>
									<Flex
										direction={{
											base: `column`,
											sm: `column`,
											md: `column`,
											lg: `column`,
											xl: `row`,
										}}
										gap={5}
										mt={5}
									>
										<Stack direction={`column`}>
											<Text fontSize={`lg`}>
												<Stack direction={`row`} alignItems={`baseline`}>
													<Text fontSize={`xl`} fontWeight={`bold`}>
														{profile?.ratings_as_vendor
															? profile?.ratings_as_vendor[5]
															: '0'}
													</Text>
													<Text fontSize={`md`} color={`gray`}>
														/5
													</Text>
												</Stack>
											</Text>
											<Stack direction={`row`}>
												{new Array(5).fill(1).map((item, index) => (
													<AiFillStar size={`25px`} color={`#ce0078`} />
												))}
											</Stack>
											<Text fontSize={`sm`}>
												{getTotalRatings(profile?.ratings_as_vendor)} Ratings
											</Text>
										</Stack>
										<Stack gap={1} w={`100%`}>
											{new Array(5).fill(1).map((item, indexRow) => (
												<Stack
													direction={`row`}
													w={`100%`}
													alignItems={`center`}
													gap={3}
												>
													<Stack direction={`row`}>
														{new Array(5)
															.fill(1)
															.map((item, index) =>
																indexRow >= index ? (
																	<AiFillStar color={`#ce0078`} />
																) : (
																	<AiFillStar color={`#EDF2F7`} />
																)
															)}
													</Stack>
													<Stack
														direction={`row`}
														width={`100%`}
														align={`center`}
													>
														<Progress
															width={`100%`}
															value={getInduvidualRatingPracentage(
																profile?.ratings_as_vendor,
																profile?.ratings_as_vendor
																	? profile?.ratings_as_vendor[indexRow]
																	: ''
															)}
															size="sm"
															colorScheme="pink"
														/>
														<Text fontSize={`xs`}>
															{profile?.ratings_as_vendor
																? profile?.ratings_as_vendor[indexRow]
																: ''}
														</Text>
													</Stack>
												</Stack>
											))}
										</Stack>
									</Flex>
								</TabPanel>
								<TabPanel p={0}>
									<Flex
										direction={{
											base: `column`,
											sm: `column`,
											md: `column`,
											lg: `column`,
											xl: `row`,
										}}
										gap={5}
										mt={5}
									>
										<Stack direction={`column`}>
											<Text fontSize={`lg`}>
												<Stack direction={`row`} alignItems={`baseline`}>
													<Text fontSize={`xl`} fontWeight={`bold`}>
														{profile?.ratings_as_customer
															? profile?.ratings_as_customer[5]
															: ''}
													</Text>
													<Text fontSize={`md`} color={`gray`}>
														/5
													</Text>
												</Stack>
											</Text>
											<Stack direction={`row`}>
												{new Array(5).fill(1).map((item, index) => (
													<AiFillStar color={`#ce0078`} size={`25px`} />
												))}
											</Stack>
											<Text fontSize={`sm`}>
												{getTotalRatings(profile?.ratings_as_customer)} Ratings
											</Text>
										</Stack>
										<Stack gap={1} w={`100%`}>
											{new Array(5).fill(1).map((item, indexRow) => (
												<Stack
													direction={`row`}
													w={`100%`}
													alignItems={`center`}
													gap={3}
												>
													<Stack direction={`row`}>
														{new Array(5)
															.fill(1)
															.map((item, index) =>
																indexRow >= index ? (
																	<AiFillStar color={`#ce0078`} />
																) : (
																	<AiFillStar color={`#EDF2F7`} />
																)
															)}
													</Stack>
													<Stack
														direction={`row`}
														width={`100%`}
														align={`center`}
													>
														<Progress
															width={`100%`}
															value={getInduvidualRatingPracentage(
																profile?.ratings_as_customer,
																profile?.ratings_as_customer
																	? profile?.ratings_as_customer[indexRow]
																	: ''
															)}
															size="sm"
															colorScheme="pink"
														/>
														<Text fontSize={`xs`}>
															{profile?.ratings_as_customer
																? profile?.ratings_as_customer[indexRow]
																: ''}
														</Text>
													</Stack>
												</Stack>
											))}
										</Stack>
									</Flex>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}

MyProfile.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'My Account', isCurrentPage: false, link: '/dashboard' },
	{ label: 'Profile', isCurrentPage: true },
]
MyProfile.PageLayout = CustomerLayout
MyProfile.authLayout = AuthLayout
export default MyProfile
