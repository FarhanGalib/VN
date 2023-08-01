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
	IconButton,
} from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import AuthLayout from 'components/layout/AuthLayout'
import CustomerLayout from 'components/layout/CustomerLayout'

const RentRequestDetails = () => {
	return (
		<>
			<Container
				maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
			>
				<Stack mb={8} display={{ base: 'none', md: 'block' }}>
					<Heading size="sm">Booking ID #636e13b180c86</Heading>
					<Text fontSize="md">
						Booking Date:{' '}
						<Text display={`inline-block`}>November 11, 2022</Text>
					</Text>
				</Stack>

				<TableContainer
					border={`1px solid #D8D8D8`}
					display={{ base: 'none', md: 'block' }}
				>
					<Flex justify={`space-between`} p={5}>
						<Stack pb={8}>
							<Heading fontSize={`md`} color={`#000000`}>
								CUSTOMER
							</Heading>
							<Text fontSize={`md`} color={`#000000`} fontWeight={500}>
								+880152123456
							</Text>
						</Stack>
						<Stack pb={8}>
							<Heading fontSize={`md`} color={`#000000`}>
								SHIPPING ADDRESS
							</Heading>
							<Text fontSize={`md`} color={`#000000`} fontWeight={500}>
								New York City, NY, 12345, USA
							</Text>
						</Stack>
						<Stack pb={8}>
							<Heading fontSize={`md`} color={`#000000`}>
								BILLING ADDRESS
							</Heading>
							<Text fontSize={`md`} color={`#000000`} fontWeight={500}>
								New York City, NY, 12345, USA
							</Text>
						</Stack>
					</Flex>
					<Table variant="simple" w={'100%'}>
						<Thead>
							<Tr>
								<Th>
									<Text
										fontSize={`sm`}
										color={`#000000`}
										textTransform={`capitalize`}
									>
										Item
									</Text>
								</Th>
								<Th textAlign={`right`} w={`10%`}>
									<Text
										fontSize={`sm`}
										color={`#000000`}
										textTransform={`capitalize`}
									>
										Status
									</Text>
								</Th>

								<Th>
									<Text
										fontSize={`sm`}
										color={`#000000`}
										textTransform={`capitalize`}
									>
										Total Price
									</Text>
								</Th>
								<Th textAlign="start">
									<Text
										fontSize={`sm`}
										color={`#000000`}
										textTransform={`capitalize`}
									>
										Payment Status
									</Text>
								</Th>
							</Tr>
						</Thead>
						<Tbody color={`#323232`}>
							<Tr>
								<Td>
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
								<Td textAlign={`right`}>
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
									<Heading size={`xs`} color={`black`}>
										&#2547; 9000
									</Heading>
								</Td>
								<Td
									textAlign={`start
                  `}
								>
									<Heading
										size={`xs`}
										color={`green`}
										display={`inline-block`}
										mr={`3`}
									>
										Paid
									</Heading>
									<Button
										variant={`outline`}
										colorScheme="primary"
										size="xs"
										display={`inline-block`}
										rightIcon={<FiEdit />}
									>
										Change Status
									</Button>
								</Td>
							</Tr>
							<Tr>
								<Td colSpan={2} textAlign={`right`}>
									Discount
								</Td>
								<Td>
									<Heading size={`xs`} color={`black`}>
										&#2547; 9000
									</Heading>
								</Td>
							</Tr>

							<Tr>
								<Td colSpan={2} textAlign={`right`}>
									Delivery Fee
								</Td>
								<Td>
									<Heading size={`xs`} color={`black`}>
										&#2547; 0
									</Heading>
								</Td>
							</Tr>
							<Tr>
								<Td colSpan={2} textAlign={`right`}>
									Total
								</Td>
								<Td>
									<Heading size={`xs`} color={`black`}>
										&#2547; 9000
									</Heading>
								</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>

				{/* Mobile view */}
				<Box
					display={{ base: 'flex', md: 'none' }}
					borderColor={`rgb(232, 3, 136)`}
					borderWidth={`1px`}
					p={3}
				>
					<Flex direction={`column`} gap={3} w={`100%`}>
						<Flex direction={`column`}>
							<Text size="sm" fontWeight={`bold`}>
								BOOKING ID: #6412D3DAC6B89
							</Text>
							<Text fontSize="xs">March 16, 2023</Text>
						</Flex>
						<Flex direction={`column`}>
							<Text size="sm" fontWeight={`bold`}>
								Shipping Address
							</Text>
							<Text fontSize="xs">New York City, NY, 12345, USA</Text>
						</Flex>
						<Flex direction={`column`}>
							<Text size="sm" fontWeight={`bold`}>
								Billing Address
							</Text>
							<Text fontSize="xs">New York City, NY, 12345, USA</Text>
						</Flex>
						<Flex align={`center`} justify={`space-between`} w={`100%`} gap={2}>
							<Box>
								<Text fontSize={`xs`} color={`#000000`} fontWeight={`bold`}>
									CUSTOMER NAME: FARHAN GALIB 
								</Text>
								<Text fontSize={`xs`} color={`#000000`} fontWeight={`bold`}>
									+8801231213132
								</Text>
							</Box>
							
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
							<Flex justify={`space-between`} align={`center`} gap={2}>
								<Text
									color={`status.cancelled`}
									fontSize={`xs`}
									fontWeight={`bolder`}
								>
									Unpaid
								</Text>
								<IconButton
									variant={`outline`}
									colorScheme="primary"
									size="xs"
									icon={<FiEdit />}
								>
									
								</IconButton>
							</Flex>
						</Flex>

						<Flex>
							<Box w={`50%`}></Box>
							<Flex w={`50%`} gap={3} direction={`column`}>
								<Flex justify={`space-between`} align={`center`}>
									<Box></Box>
									<Text fontSize={`xs`} fontWeight={`bold`}>
										Total Price
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
									Delivery Fee
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
								
							</Flex>
						</Flex>
					</Flex>
				</Box>
			</Container>
		</>
	)
}
RentRequestDetails.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'Rent Request Details', isCurrentPage: true },
]
RentRequestDetails.PageLayout = CustomerLayout
RentRequestDetails.authLayout = AuthLayout
export default RentRequestDetails
