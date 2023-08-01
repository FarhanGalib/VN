import {
	Badge,
	Box,
	Container,
	Flex,
	Grid,
	GridItem,
	HStack,
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
import AuthLayout from 'components/layout/AuthLayout'
import CustomerLayout from 'components/layout/CustomerLayout'
import { router } from 'next/router'
import styles from 'styles/myItems.module.css'

export default function MyBookings() {
	return (
		<>
			<Container
				maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
			>
				<Heading fontSize={`md`} mb={8}>
					Booking Info
				</Heading>

				<TableContainer
				display={{base: "none", md:'block'}}
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
								<Th className={`${styles.tableHeader}`}></Th>
								<Th className={`${styles.tableHeader}`}>Invoice</Th>
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
										<HStack>
											<IconButton
												size={`sm`}
												icon={<Image src="/images/file1.png" />}
												colorScheme={`primary`}
												variant={`outline`}
											/>
											<IconButton
												size={`sm`}
												icon={<Image src="/images/file2.png" />}
												colorScheme={`primary`}
												variant={`outline`}
											/>
											<IconButton
												size={`sm`}
												icon={<Image src="/images/eyeIcon.png" />}
												colorScheme={`primary`}
												variant={`outline`}
												onClick={() => router.push(`my-bookings/1`)}
											/>
										</HStack>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
				<Grid
					display={{ base: 'grid', md: 'none' }}
					templateColumns={{ base: 'repeat(auto-fit, minmax(230px, 1fr))' }}
					gap="3"
				>
					{[1,2,3,4,5,6,7,8,9].map((item, index)=><GridItem key={item}>
						<Flex
							border={`1px solid lightgray`}
							borderRadius={`md`}
							p={2}
							direction="column"
							gap={2}
						>
							<Flex align={`center`}>
								<Text fontSize="14px" w={`40%`} fontWeight={700}>
									Invoice
								</Text>
								<Box pl={2}>
									<Heading size={`xs`}>6412d3dac5e82</Heading>
									<Text fontSize="2xs">Created Date: March 16, 2023</Text>
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
							<HStack gap={4}>
								<IconButton
									size={`sm`}
									icon={<Image src="/images/file1.png" />}
									colorScheme={`primary`}
									variant={`outline`}
								/>
								<IconButton
									size={`sm`}
									icon={<Image src="/images/file2.png" />}
									colorScheme={`primary`}
									variant={`outline`}
								/>
								<IconButton
									size={`sm`}
									icon={<Image src="/images/eyeIcon.png" />}
									colorScheme={`primary`}
									variant={`outline`}
									onClick={() => router.push(`my-bookings/1`)}
								/>
							</HStack>
						</Flex>
					</GridItem>)}

					
				</Grid>
			</Container>
		</>
	)
}

MyBookings.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'My Bookings', isCurrentPage: true },
]
MyBookings.PageLayout = CustomerLayout
MyBookings.authLayout = AuthLayout
