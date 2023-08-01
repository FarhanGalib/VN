import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Container,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Divider,
	Avatar,
	AvatarBadge,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	useToast,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { VscSearch } from 'react-icons/vsc'
import { AiFillCalendar, AiFillHeart } from 'react-icons/ai'
import { MdLocationOn, MdMessage, MdShoppingCart } from 'react-icons/md'
import { FiChevronDown, FiChevronRight, FiPhoneIncoming } from 'react-icons/fi'
import { SIGNIN_MODAL, SIGNUP_MODAL } from 'const/auth'
import { openModal } from 'store/slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { router } from 'next/router'
import { signOut } from 'store/slices/authSlice'
import { unwrapResult } from '@reduxjs/toolkit'

export default function Header() {
	const { isOpen, onToggle } = useDisclosure()
	const dispatch = useDispatch()
	const { isSignedIn, token, user } = useSelector((state) => state.auth)

	const handleSignIn = () => {
		dispatch(openModal(SIGNIN_MODAL))
	}

	const handleSighUp = () => {
		dispatch(openModal(SIGNUP_MODAL))
	}
	return (
		<Box boxShadow={`0px 4px 4px rgba(0, 0, 0, 0.25)`}>
			<Flex
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderStyle={'solid'}
				align={'center'}
			>
				<Container maxW="3xl" centerContent>
					<Flex
						flex={{ base: 1 }}
						justify={{ base: 'center', xl: 'start' }}
						align={'center'}
						gap={3}
					>
						<Text
							textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
							fontFamily={'heading'}
							color={useColorModeValue('gray.800', 'white')}
						>
							<Image
								cursor="pointer"
								onClick={() => {
									router.push('/')
								}}
								maxW={'120px'}
								src={'/images/vlogo.png'}
								alt=""
							/>
						</Text>
						<Flex
							display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }}
							ml={10}
							align={`center`}
						>
							<DesktopNav isSignedIn={isSignedIn} token={token} user={user} />
						</Flex>
						{!isSignedIn && !token && (
							<Stack
								flex={{ base: 1, md: 0 }}
								justify={'flex-end'}
								direction={'row'}
								spacing={3}
							>
								<Button
									size="sm"
									colorScheme="primary"
									variant="outline"
									fontSize={'sm'}
									fontWeight={400}
									onClick={handleSignIn}
									display={{
										base: 'none',
										md: 'none',
										lg: 'none',
										xl: 'inline-flex',
									}}
								>
									Sign In
								</Button>
								<Button
									size={`sm`}
									display={{
										base: 'none',
										md: 'none',
										lg: 'none',
										xl: 'inline-flex',
									}}
									fontSize={'sm'}
									colorScheme={`primary`}
									onClick={handleSighUp}
								>
									Sign Up
								</Button>
							</Stack>
						)}
					</Flex>
				</Container>
				<Flex
					flex={{ base: 1, xl: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', xl: 'none' }}
					justify={`flex-end`}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <GrClose w={3} h={3} /> : <GiHamburgerMenu w={5} h={5} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	)
}
const DesktopNav = ({ isSignedIn, token, user }) => {
	const linkColor = useColorModeValue('gray.600', 'gray.200')
	const linkHoverColor = useColorModeValue('gray.800', 'white')
	const popoverContentBgColor = useColorModeValue('white', 'gray.800')
	const dispatch = useDispatch()
	const toast = useToast({
		containerStyle: {
			color: 'white',
		},
	})

	const handleSignOut = () => {
		dispatch(signOut())
		toast({
			title: `Sign out successful!`,
			position: `top`,
			status: 'success',
			isClosable: true,
		})
		router.push(`/`)
	}

	return (
		<Stack direction={'row'} spacing={3} align={`center`} w={`100%`}>
			<InputGroup h={`35px`} w={`532px`}>
				<InputLeftElement
					h={`35px`}
					pointerEvents="none"
					children={<VscSearch color="#7B7B7B" size={`15px`} />}
				/>
				<Input
					type="string"
					h={`35px`}
					placeholder="Search for camera, drones, equipments, etc."
					_placeholder={{
						fontWeight: 200,
						fontSize: `16px`,
						color: `#7B7B7B`,
					}}
				/>
			</InputGroup>

			<InputGroup h={`35px`} maxW={`160px`}>
				<InputLeftElement
					h={`35px`}
					pointerEvents="none"
					children={<MdLocationOn style={{ color: '#D9D9D9' }} />}
				/>
				<Input h={`35px`} type="text" placeholder="Location" fontSize={'sm'} />
			</InputGroup>
			{isSignedIn && token && (
				<Flex direction={`row`} align="center" gap={4}>
					<Flex direction={`column`} align={`center`} cursor="pointer">
						<Icon as={MdMessage} color={`#CE0078`} />
						<Text fontSize={`12px`} color={`#CE0078`}>
							Message
						</Text>
					</Flex>

					<Flex direction={`column`} align={`center`} cursor="pointer">
						<Icon as={AiFillCalendar} color={`#CE0078`} />
						<Text
							cursor="pointer"
							onClick={() => {
								router.push('/profile/edit-profile')
							}}
							fontSize={`12px`}
							color={`#CE0078`}
						>
							Bookings
						</Text>
					</Flex>
					<Flex direction={`column`} align={`center`} cursor="pointer">
						<Icon as={AiFillHeart} color={`#CE0078`} />
						<Text fontSize={`12px`} color={`#CE0078`}>
							Orders
						</Text>
					</Flex>
					<Flex direction={`column`} align={`center`} cursor="pointer" onClick={()=> router.push(`/cart`)}>
						<Icon as={MdShoppingCart} color={`#CE0078`} />
						<Text fontSize={`12px`} color={`#CE0078`}>
							Cart
						</Text>
					</Flex>
					<Menu>
						<MenuButton>
							<Avatar
								size="sm"
								// name="Kent Dodds"
								src="https://bit.ly/tioluwani-kolawole"
							>
								<AvatarBadge boxSize="1.25em" bg="green.500" />
							</Avatar>
						</MenuButton>
						<MenuList>
							<MenuItem
								onClick={() => router.push(`/dashboard`)}
								_hover={{ bg: 'primary.50' }}
							>
								Dashboard
							</MenuItem>
							<MenuItem
								onClick={() => router.push(`/my-profile`)}
								_hover={{ bg: 'primary.50' }}
							>
								Profile
							</MenuItem>
							<MenuDivider />
							<MenuItem
								onClick={() => {
									handleSignOut()
								}}
								_hover={{ bg: 'primary.50' }}
							>
								Sign Out
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			)}
			{/* {NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>
						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={popoverContentBgColor}
								p={4}
								rounded={'xl'}
								minW={'sm'}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))} */}
		</Stack>
	)
}
const DesktopSubNav = ({ label, href, subLabel }) => {
	return (
		<Link
			href={href}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
		>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text
						transition={'all .3s ease'}
						_groupHover={{ color: 'pink.400' }}
						fontWeight={500}
					>
						{label}
					</Text>
					<Text fontSize={'sm'}>{subLabel}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon color={'pink.400'} w={5} h={5} as={FiChevronRight} />
				</Flex>
			</Stack>
		</Link>
	)
}
const MobileNav = () => {
	const dispatch = useDispatch()

	const handleSignIn = () => {
		dispatch(openModal(SIGNIN_MODAL))
	}

	const handleSighUp = () => {
		dispatch(openModal(SIGNUP_MODAL))
	}
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			p={4}
			display={{ xl: 'none' }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
			<Divider />
			<Stack
				flex={{ base: 1, md: 0 }}
				justify={'flex-start'}
				direction={'column'}
				spacing={3}
				color={`gray.600`}
			>
				<Link
					//  size='sm'
					colorScheme="primary"
					variant="outline"
					// fontSize={'sm'}
					fontWeight={600}
					color={`gray.600`}
					onClick={handleSignIn}
					// display={{ base: 'none', md: 'none', lg: 'none', xl: 'inline-flex' }}
				>
					Sign In
				</Link>
				<Link
					fontWeight={600}
					color={`gray.600`}
					colorScheme={`primary`}
					onClick={handleSighUp}
				>
					Sign Up
				</Link>
			</Stack>
		</Stack>
	)
}
const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure()
	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Text
					fontWeight={600}
					color={useColorModeValue('gray.600', 'gray.200')}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={FiChevronDown}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
					/>
				)}
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					align={'start'}
				>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	)
}

const NAV_ITEMS = [
	{
		label: 'Inspiration',
		children: [
			{
				label: 'Explore Design Work',
				subLabel: 'Trending Design to inspire you',
				href: '#',
			},
			{
				label: 'New & Noteworthy',
				subLabel: 'Up-and-coming Designers',
				href: '#',
			},
		],
	},
	{
		label: 'Find Work',
		children: [
			{
				label: 'Job Board',
				subLabel: 'Find your dream design job',
				href: '#',
			},
			{
				label: 'Freelance Projects',
				subLabel: 'An exclusive list for contract work',
				href: '#',
			},
		],
	},
	{
		label: 'Learn Design',
		href: '#',
	},
	{
		label: 'Hire Designers',
		href: '#',
	},
]
