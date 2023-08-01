import {
	Container,
	Flex,
	Heading,
	Stack,
	Image,
	Table,
	TableContainer,
	Tag,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	Button,
	AspectRatio,
	Box,
	Badge,
} from '@chakra-ui/react'
import styles from 'styles/myItems.module.css'
import AuthLayout from 'components/layout/AuthLayout'
import CustomerLayout from 'components/layout/CustomerLayout'

export default function BookingDetails() {
	return (
		<>
			<Container
				maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
			>
				<Flex
					align={`center`}
					justify={`space-between`}
					mb={8}
					display={{ base: 'none', md: 'flex' }}
				>
					<Stack>
						<Heading size="sm">Booking Date</Heading>
						<Text fontSize="md">March 16, 2023</Text>
					</Stack>
					<Stack>
						<Heading size="sm">Address</Heading>
						<Text fontSize="md">New York City, NY, 12345, USA</Text>
					</Stack>
				</Flex>
				<TableContainer
					border={`1px solid #D8D8D8`}
					display={{ base: 'none', md: 'block' }}
				>
					<Table variant="simple">
						<Thead>
							<Tr>
								<Th>
									<Stack>
										<Text fontSize={`sm`} color={`#000000`}>
											BOOKING ID: #6412D3DAC6B89
										</Text>
										<Text fontSize={`sm`} color={`#000000`}>
											VENDOR NAME: TAUHIDUL ISLAM NAHID
										</Text>
									</Stack>
								</Th>
								<Th>
									<Text fontSize={`sm`} color={`#000000`}>
										Status
									</Text>
								</Th>

								<Th>
									{' '}
									<Text fontSize={`sm`} color={`#000000`} textAlign={`end`}>
										Payment Status
									</Text>{' '}
								</Th>
								<Th textAlign="end">
									<Button colorScheme="primary">Make Payment</Button>
								</Th>
							</Tr>
						</Thead>
						<Tbody color={`#323232`}>
							<Tr>
								<Td borderBottom={`1px dotted #D8D8D8`}>
									<Flex align={`center`} gap={2}>
										<AspectRatio w="50px" ratio={1}>
											<Image src="/images/laptop.png" alt="" />
										</AspectRatio>
										<Stack>
											<Heading size={`xs`}>Leather Handbag</Heading>
											<Text fontSize={`xs`}>
												Price:{' '}
												<Text as={'span'} fontWeight={`bold`}>
													&#2547; 1000
												</Text>{' '}
												Quantity:{' '}
												<Text as={'span'} fontWeight={`bold`}>
													1
												</Text>{' '}
												Booked for:{' '}
												<Text as={'span'} fontWeight={`bold`}>
													2 Days
												</Text>
											</Text>
											<Text as={'span'} fontSize={`xs`}>
												From Date:{' '}
												<Text as={'span'} fontWeight={`bold`}>
													March 16, 2023
												</Text>{' '}
												To Date:{' '}
												<Text as={'span'} fontWeight={`bold`}>
													March 17, 2023
												</Text>
											</Text>
										</Stack>
									</Flex>
								</Td>
								<Td borderBottom={`1px dotted #D8D8D8`}>
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

								<Td
									borderBottom={`1px dotted #D8D8D8`}
									textAlign={`end
                  `}
								>
									<Heading size={`xs`} color={`green`}>
										Paid
									</Heading>
								</Td>

								<Td
									borderBottom={`1px dotted #D8D8D8`}
									textAlign={`end
                  `}
								>
									<Heading size={`xs`}>&#2547; 9000</Heading>
								</Td>
							</Tr>
							<Tr>
								<Td
									colSpan={3}
									textAlign={`right`}
									borderBottom={`1px dotted #D8D8D8`}
								>
									<Text fontSize={`sm`}>Subtotal</Text>
								</Td>
								<Td textAlign={`right`} borderBottom={`1px dotted #D8D8D8`}>
									<Heading size={`xs`}>&#2547; 9000</Heading>
								</Td>
							</Tr>
							<Tr>
								<Td
									colSpan={3}
									textAlign={`right`}
									borderBottom={`1px dotted #D8D8D8`}
								>
									<Text fontSize={`sm`}>Discount</Text>
								</Td>
								<Td textAlign={`right`} borderBottom={`1px dotted #D8D8D8`}>
									<Heading size={`xs`}>&#2547; 0</Heading>
								</Td>
							</Tr>
							<Tr>
								<Td
									colSpan={3}
									textAlign={`right`}
									borderBottom={`1px dotted #D8D8D8`}
								>
									<Text fontSize={`sm`}>Total</Text>
								</Td>
								<Td textAlign={`right`} borderBottom={`1px dotted #D8D8D8`}>
									<Heading size={`xs`}>&#2547; 9000</Heading>
								</Td>
							</Tr>
							<Tr>
								<Td colSpan={3} textAlign={`right`}>
									<Text fontSize={`sm`}>Payble</Text>
								</Td>
								<Td textAlign={`right`}>
									<Heading size={`xs`}>&#2547; 9000</Heading>
								</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
				<Box
					display={{ base: 'flex', md: 'none' }}
					borderColor={`rgb(232, 3, 136)`}
					borderWidth={`1px`}
					p={3}
				>
					<Flex direction={`column`} gap={3} w={`100%`}>
						<Flex direction={`column`}>
							<Text size="sm" fontWeight={`bold`}>
								Booking Date
							</Text>
							<Text fontSize="xs">March 16, 2023</Text>
						</Flex>
						<Flex direction={`column`}>
							<Text size="sm" fontWeight={`bold`}>
								Address
							</Text>
							<Text fontSize="xs">New York City, NY, 12345, USA</Text>
						</Flex>
						<Flex align={`center`} justify={`space-between`} w={`100%`} gap={2}>
							<Box>
								<Text fontSize={`xs`} color={`#000000`} fontWeight={`bold`}>
									BOOKING ID: #6412D3DAC6B89
								</Text>
								<Text fontSize={`xs`} color={`#000000`} fontWeight={`bold`}>
									VENDOR NAME: TAUHIDUL ISLAM NAHID
								</Text>
							</Box>
							<Button size={`xs`} colorScheme="primary" fontSize={`xs`}>
								Make Payment
							</Button>
						</Flex>
						<Flex align={`center`} gap={2}>
							<AspectRatio w="50px" ratio={1}>
								<Image src="/images/laptop.png" alt="" />
							</AspectRatio>
							<Flex direction="column">
								<Text fontSize={`sm`} fontWeight={`bold`}>
									Leather Handbag
								</Text>
								<Text fontSize={`xs`}>
									Price:{' '}
									<Text as={'span'} fontWeight={`bold`}>
										&#2547; 1000
									</Text>{' '}
									Quantity:{' '}
									<Text as={'span'} fontWeight={`bold`}>
										1
									</Text>{' '}
									Booked for:{' '}
									<Text as={'span'} fontWeight={`bold`}>
										2 Days
									</Text>
								</Text>
								<Text as={'span'} fontSize={`xs`}>
									From Date:{' '}
									<Text as={'span'} fontWeight={`bold`}>
										March 16, 2023
									</Text>{' '}
									To Date:{' '}
									<Text as={'span'} fontWeight={`bold`}>
										March 17, 2023
									</Text>
								</Text>
							</Flex>
						</Flex>
						<Flex justify={`space-between`} align={`center`}>
							<Text fontSize={`xs`} fontWeight={`bold`}>
								Status
							</Text>
							<Badge
								colorScheme="primary"
								bg={`status.pending`}
								px={3}
								borderRadius={4}
								fontSize={`xs`}
								color={`whiteAlpha.900`}
							>
								Pending
							</Badge>
						</Flex>
						<Flex justify={`space-between`} align={`center`}>
							<Text fontSize={`xs`} fontWeight={`bold`}>
								Payment Status
							</Text>
							<Text
								color={`status.cancelled`}
								fontSize={`xs`}
								fontWeight={`bolder`}
							>
								Unpaid
							</Text>
						</Flex>

						<Flex >
              <Box w={`50%`}></Box>
							<Flex  w={`50%`} gap={3} direction={`column`}>
								<Flex justify={`space-between`} align={`center`}>
									<Box></Box>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										Amount
									</Text>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										&#2547; 9000
									</Text>
								</Flex>
								<Flex justify={`space-between`} align={`center`}>
									<Box></Box>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										Subtotal
									</Text>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										&#2547; 9000
									</Text>
								</Flex>
								<Flex justify={`space-between`} align={`center`}>
									<Box></Box>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										Discount
									</Text>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										&#2547; 9000
									</Text>
								</Flex>
								<Flex justify={`space-between`} align={`center`}>
									<Box></Box>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										Total
									</Text>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										&#2547; 9000
									</Text>
								</Flex>
								<Flex justify={`space-between`} align={`center`}>
									<Box></Box>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										Payable
									</Text>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										&#2547; 9000
									</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Box>
			</Container>
		</>
	)
}
BookingDetails.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'My Bookings', isCurrentPage: true },
]
BookingDetails.PageLayout = CustomerLayout
BookingDetails.authLayout = AuthLayout
