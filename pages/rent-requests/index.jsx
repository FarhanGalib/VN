import {
	Badge,
	Box,
	Button,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	IconButton,
	Image,
	Stack,
	Table,
	TableContainer,
	Tag,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react'
import styles from '/styles/common.module.css'
import CustomerLayout from 'components/layout/CustomerLayout'
import AuthLayout from 'components/layout/AuthLayout'
import { router } from 'next/router'

const RentRequests = () => {
	return (
		<>
			<Container
				maxW={{
					base: 'container.md',
					md: 'container.lg',
					lg: 'container.xl',
				}}
			>
				<Heading fontSize={`md`} mb={8}>
					Rent Requests
				</Heading>

				<TableContainer display={{ base: 'none', md: 'block' }}>
					<Table variant="simple">
						<Thead>
							<Tr>
								<Th className={`${styles.tableHeader}`}></Th>
								<Th className={`${styles.tableHeader}`}>Invoice</Th>
								<Th className={`${styles.tableHeader}`}>Customer</Th>
								<Th className={`${styles.tableHeader}`}>Status</Th>
								<Th className={`${styles.tableHeader}`}>Amount</Th>
								<Th className={`${styles.tableHeader}`}>Payment Status </Th>
								<Th className={`${styles.tableHeader}`}>Actions</Th>
							</Tr>
						</Thead>
						<Tbody color={`#323232`}>
							{[1, 2, 3].map((row, index) => (
								<Tr key={index}>
									<Td textAlign="center">
										<Text
											fontSize={`xs`}
											className={`${styles.tableBodyTextCorlor}`}
										>
											{index + 1}
										</Text>
									</Td>
									<Td>
										<Stack>
											<Heading size={`xs`}>6412d3dac5e82</Heading>
											<Text fontSize={`xs`}>Created Date: March 16, 2023</Text>
										</Stack>
									</Td>
									<Td>
										<Stack>
											<Heading size={`xs`}>Farhan galib</Heading>
											<Text fontSize={`xs`}>Mobile: +8801521301460</Text>
										</Stack>
									</Td>
									<Td>
										<Text fontSize={`xs`}>
											<Tag
												variant="solid"
												colorScheme="green"
												color="#ffffff"
												size={`sm`}
											>
												{' '}
												Completed
											</Tag>
										</Text>{' '}
									</Td>
									<Td>
										<Heading size={`xs`}>&#2547; 9000</Heading>
									</Td>
									<Td>
										<Heading size={`xs`} color={`green`}>
											Paid
										</Heading>
									</Td>

									<Td textAlign="center">
										<Button
											size={`sm`}
											rightIcon={<Image src="/images/eyeIcon.png" />}
											colorScheme={`primary`}
											variant={`outline`}
											onClick={() => router.push(`rent-requests/1`)}
										>
											View
										</Button>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>

				{/* Mobile View */}
				<Grid
					display={{ base: 'grid', md: 'none' }}
					templateColumns={{ base: 'repeat(auto-fit, minmax(230px, 1fr))' }}
					gap="3"
				>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
						<GridItem key={item}>
							<Flex
								border={`1px solid lightgray`}
								borderRadius={`md`}
								p={2}
								direction="column"
								gap={2}
							>
								<Flex align={`center`}>
									<Text fontSize="14px" w={`40%`} fontWeight={700}>
										Booking Info
									</Text>
									<Box pl={2}>
										<Heading size={`xs`}>6412d3dac5e82</Heading>
										<Text fontSize="2xs">Created Date: March 16, 2023</Text>
									</Box>
								</Flex>

								<Flex align={`center`}>
									<Text fontSize="14px" w={`40%`} fontWeight={700}>
										Customer
									</Text>
									<Box pl={2}>
										<Heading size={`xs`}>Farhan Galib</Heading>
										<Text fontSize="2xs">Mobile: +8801212535221</Text>
									</Box>
								</Flex>

								<Flex align={`center`}>
									<Text fontSize="14px" w={`40%`} fontWeight={700}>
										Status
									</Text>
									<Badge
										bg={`status.pending`}
										color={`white`}
										px={`15px`}
										borderRadius={`md`}
										pl={2}
									>
										Pending
									</Badge>
								</Flex>

								<Flex align={`center`}>
									<Text fontSize="14px" w={`40%`} fontWeight={700}>
										Amount
									</Text>
									<Text fontSize="sm" fontWeight={`bold`} pl={2}>
										&#2547; 9000
									</Text>
								</Flex>

								<Flex align={`center`}>
									<Text fontSize="14px" w={`40%`} fontWeight={700}>
										Payment Status
									</Text>
									<Text
										fontSize="sm"
										fontWeight={`bold`}
										color={`status.success`}
										pl={2}
									>
										{`Paid`}
									</Text>
								</Flex>

								<Button
									size={`xs`}
									rightIcon={<Image src="/images/eyeIcon.png" />}
									colorScheme={`primary`}
									variant={`outline`}
									onClick={() => router.push(`rent-requests/1`)}
								>
									View
								</Button>
							</Flex>
						</GridItem>
					))}
				</Grid>
			</Container>
		</>
	)
}

RentRequests.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'Rent Requests', isCurrentPage: true },
]
RentRequests.PageLayout = CustomerLayout
RentRequests.authLayout = AuthLayout
export default RentRequests
