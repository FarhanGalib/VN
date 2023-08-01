import React from 'react'
import {
	Text,
	Stack,
	Td,
	Tr,
	Tbody,
	Th,
	Thead,
	Box,
	Button,
	Select,
	InputGroup,
	InputLeftElement,
	Input,
	Grid,
	TableContainer,
	Table,
	Switch,
	Container,
	Image,
	AspectRatio,
	Flex,
	IconButton,
	Collapse,
	Heading,
} from '@chakra-ui/react'
import AuthLayout from 'components/layout/AuthLayout'
import CustomerLayout from '../../components/layout/CustomerLayout'
import { FiPlusCircle } from 'react-icons/fi'
import { RiArrowDownSFill } from 'react-icons/ri'
import { VscSearch } from 'react-icons/vsc'
import { MdSearch } from 'react-icons/md'
import styles from 'styles/myItems.module.css'
import { useState } from 'react'
import { router } from 'next/router'

const MyItems = () => {
	const [isSearchShown, setSearchShown] = useState(false)

	return (
		<Container
			maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
		>
			<Box pl={{ base: '0', lg: '9' }}>
				<Flex
					justifyContent={`space-between`}
					align={`center
		`}
				>
					<Box maxW={`200px`}>
						<Button
							colorScheme={`primary`}
							size={`sm`}
							rightIcon={<FiPlusCircle />}
							justifyContent={`space-between`}
							onClick={() => {
								router.push(`/add-item`)
							}}
						>
							ADD ITEM
						</Button>
					</Box>

					<InputGroup
						display={{ base: 'none', sm: 'inline-block', md: 'none' }}
						ml={0}
						borderColor={`gray.300`}
						size={`sm`}
						// grow={`1`}
						maxW={'200px'}
						w="100%"
					>
						<InputLeftElement
							pointerEvents="none"
							children={<VscSearch />}
							borderColor={`#7B7B7B`}
							ml={0}
						/>
						<Input
							type="string"
							placeholder="Search"
							borderRadius="6px"
							ml={0}
						/>
					</InputGroup>
					<IconButton
						display={{ base: 'flex', sm: 'none' }}
						size="sm"
						icon={<MdSearch color="base.500" />}
						onClick={() => {
							setSearchShown((val) => !val)
						}}
					/>
				</Flex>
				<Collapse in={isSearchShown} animateOpacity>
					<InputGroup
						display={{ base: 'inline-block', sm: 'none' }}
						ml={0}
						mt={5}
						borderColor={`gray.300`}
						size={`sm`}
						// grow={`1`}
						// maxW={"200px"}
						w="100%"
					>
						<InputLeftElement
							pointerEvents="none"
							children={<VscSearch />}
							borderColor={`#7B7B7B`}
							ml={0}
						/>
						<Input
							type="string"
							placeholder="Search"
							borderRadius="6px"
							ml={0}
						/>
					</InputGroup>
				</Collapse>

				<Grid
					templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
					gap={6}
					my={5}
				>
					<Select
						borderRadius="6px"
						variant="outline"
						// maxW="200px"
						w="100%"
						borderColor={`gray.300`}
						placeholder="Select Location"
						_placeholder={{
							color: `gray.300`,
						}}
						size="sm"
						icon={<RiArrowDownSFill />}
					/>
					<Select
						borderRadius="6px"
						variant="outline"
						// maxW="200px"
						w="100%"
						borderColor={`gray.300`}
						placeholder="Category"
						_placeholder={{
							color: `gray.300`,
						}}
						size="sm"
						icon={<RiArrowDownSFill />}
					/>
					<Box display={{ base: 'none', lg: 'flex' }}></Box>

					<InputGroup
						display={{ base: 'none', md: 'flex' }}
						ml={0}
						borderColor={`gray.300`}
						size={`sm`}
						// grow={`1`}
						// maxW={'200px'}
						w="100%"
					>
						<InputLeftElement
							pointerEvents="none"
							children={<VscSearch />}
							borderColor={`#7B7B7B`}
							ml={0}
						/>
						<Input
							type="string"
							placeholder="Search"
							borderRadius="6px"
							ml={0}
						/>
					</InputGroup>
				</Grid>

				<TableContainer
					display={{ base: 'none', md: 'block' }}
					//   css={{
					//     "&::-webkit-scrollbar": {
					//       width: "4px",
					//     },
					//     "&::-webkit-scrollbar-track": {
					//       width: "6px",
					//     },
					//     "&::-webkit-scrollbar-thumb": {
					//       background: "#ce0078",
					//       borderRadius: "24px",
					//     },

					//   }}
				>
					<Table variant="simple">
						<Thead>
							<Tr>
								<Th className={`${styles.tableHeader}`}>Sr</Th>
								<Th className={`${styles.tableHeader}`}>Image</Th>
								<Th className={`${styles.tableHeader}`}>Item Name</Th>
								<Th className={`${styles.tableHeader}`}>SKU Number</Th>
								<Th className={`${styles.tableHeader}`}>Added On</Th>
								<Th className={`${styles.tableHeader}`}>Address</Th>
								<Th className={`${styles.tableHeader}`}>Current Stock</Th>
								<Th className={`${styles.tableHeader}`}>Dispatched</Th>
								<Th className={`${styles.tableHeader}`}>Publish</Th>
							</Tr>
						</Thead>
						<Tbody color={`#323232`}>
							{[1, 2, 3, 4, 5, 6].map((row, index) => (
								<Tr key={index}>
									<Td textAlign="center">
										<Text
											fontSize={`xs`}
											className={`${styles.tableBodyTextCorlor}`}
										>
											{index + 1}
										</Text>
									</Td>
									<Td textAlign="center">
										<AspectRatio w="50px" ratio={1}>
											<Image src="/images/laptop.png" alt="" />
										</AspectRatio>
									</Td>
									<Td textAlign="center">
										<Text
											fontSize={`xs`}
											className={`${styles.tableBodyTextCorlor}`}
										>
											{`Laptop`}
										</Text>{' '}
									</Td>
									<Td textAlign="center">
										<Text
											fontSize={`xs`}
											className={`${styles.tableBodyTextCorlor}`}
										>
											{index + 1}
										</Text>{' '}
									</Td>
									<Td textAlign="center">
										<Text
											fontSize={`xs`}
											className={`${styles.tableBodyTextCorlor}`}
										>
											{new Date().toLocaleString('en-US', {
												day: 'numeric',
												month: 'short',
												year: 'numeric',
											})}
										</Text>
									</Td>
									<Td textAlign="center">
										<Text
											fontSize={`xs`}
											className={`${styles.tableBodyTextCorlor}`}
										>
											Location 1
										</Text>
									</Td>
									<Td textAlign="center">
										<Text
											fontSize={`xs`}
											className={`${styles.tableBodyTextCorlor}`}
										>
											3
										</Text>
									</Td>
									<Td textAlign="center">
										<Text
											fontSize={`xs`}
											className={`${styles.tableBodyTextCorlor}`}
										>
											1
										</Text>
									</Td>
									<Td textAlign="center">
										<Switch colorScheme="primary" />
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>

				<Stack direction={`column`} display={{ base: 'flex', md: 'none' }}>
					{[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
						<Flex
							key={item}
							align={`center`}
							gap={2}
							border={`1px`}
							borderWidth={`1px`}
							borderColor={`primary.500`}
							p={2}
						>
							<AspectRatio w="50px" ratio={1}>
								<Image src="/images/laptop.png" alt="" />
							</AspectRatio>
							<Stack>
								<Heading size={`xs`}>Leather Handbag</Heading>
								<Text fontSize={`xs`}>
									SKU:{' '}
									<Text as={'span'} fontWeight={`bold`}>
										251
									</Text>{' '}
									Dispatched:{' '}
									<Text as={'span'} fontWeight={`bold`}>
										2
									</Text>
								</Text>
								<Text as={'span'} fontSize={`xs`}>
									Stock:{' '}
									<Text as={'span'} fontWeight={`bold`}>
										21
									</Text>{' '}
									Added On:{' '}
									<Text as={'span'} fontWeight={`bold`}>
										March 16, 2023
									</Text>{' '}
								</Text>
								<Text as={'span'} fontSize={`xs`}>
									Address:{' '}
									<Text as={'span'} fontWeight={`bold`}>
										Mirpur-2, Dhaka
									</Text>{' '}
								</Text>
								<Flex align={`center`} gap={3}>
									<Text fontSize={`xs`}>Publish: </Text>
									<Switch
										colorScheme="primary"
										size={`sm`}
										isChecked={!(index % 2)}
									/>
								</Flex>
							</Stack>
						</Flex>
					))}
				</Stack>
			</Box>
		</Container>
	)
}

MyItems.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'My Items', isCurrentPage: true },
]
MyItems.PageLayout = CustomerLayout
MyItems.authLayout = AuthLayout
export default MyItems
