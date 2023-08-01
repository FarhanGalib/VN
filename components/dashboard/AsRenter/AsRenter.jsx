import {
	Box,
	Grid,
	GridItem,
	Heading,
	Input,
	Select,
	Stack,
	Text,
	Flex,
	InputGroup,
	InputRightElement,
	Button,
	Image,
	Tag,
	TagLabel,
	AspectRatio,
	Divider,
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Td,
	Tbody,
	Icon,
} from '@chakra-ui/react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { GoPrimitiveDot } from 'react-icons/go';
import { BiFilter } from 'react-icons/bi';
import SimpleCard from '../SimpleCard';

const AsRenter = () => {
	return (
		<Box>
			<Text fontSize={`sm`} color={`brand.500`} fontWeight="bold" mb={2}>
				Filter
			</Text>
			<Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={2}>
				<Flex direction={`column`}>
					<Text fontSize={`sm`} color={`brand.500`} >
						Start Date{' '}
					</Text>
					<Input
						placeholder="Select Date and Time"
						size="sm"
						type="date"
						borderRadius="6px"
					/>
				</Flex>
				<Flex direction={`column`}>
					<Text fontSize={`sm`} color={`brand.500`}>
						End Date{' '}
					</Text>
					<Input
						placeholder="Select Date and Time"
						size="sm"
						type="date"
						borderRadius="6px"
					/>
				</Flex>

				<GridItem alignSelf="end">
					<Select
						borderRadius="6px"
						variant="outline"
						// maxW="200px"
						w="100%"
						borderColor={`gray.300`}
						placeholder="Select item"
						_placeholder={{
							color: `gray.300`,
						}}
						size="sm"
						icon={<RiArrowDownSFill />}
					/>
				</GridItem>
				<GridItem alignSelf="end">
					<Select
						borderRadius="6px"
						variant="outline"
						// maxW="200px"
						w="100%"
						borderColor={`gray.300`}
						placeholder="Select Category"
						_placeholder={{
							color: `gray.300`,
						}}
						size="sm"
						icon={<RiArrowDownSFill />}
					/>
				</GridItem>
			</Grid>

			<Grid
				templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
				gap={6}
				my={5}
			>
				<GridItem w="100%">
					<SimpleCard
						h={`185px`}
						as={Flex}
						direction={`column`}
						justify={`space-between`}
					>
						<Heading size={'sm'}>Total Spent</Heading>
						<Heading size={'md'} align={`center`}>
							BDT 25,565
						</Heading>
					</SimpleCard>
				</GridItem>
				<GridItem w="100%">
					<SimpleCard
						h={`185px`}
						as={Flex}
						direction={`column`}
						justify={`space-between`}
					>
						<Heading size={'sm'}>Total Deposit Owed </Heading>
						<Heading size={'md'} align={`center`}>
							BDT 25,565
						</Heading>
					</SimpleCard>
				</GridItem>
				<GridItem w="100%">
					<SimpleCard
						h={`185px`}
						as={Flex}
						direction={`column`}
						justify={`space-between`}
					>
						<Heading size={'sm'}>Rent in Progress</Heading>
						<Heading size={'md'} align={`center`}>
							BDT 25,565
						</Heading>
					</SimpleCard>
				</GridItem>
			</Grid>

			<Grid mt={5}>
				<SimpleCard w={'100%'} overflow={`auto`} maxH={`855px`}>
					<Stack
						direction={`row`}
						justify={`space-between`}
						align={`center`}
						mb={2}
					>
						<Heading size={`sm`}>Recently Rented</Heading>
						<Button
							variant={`solid`}
							colorScheme={`primary`}
							rightIcon={<BiFilter />}
							fontWeight={`300`}
						>
							Filter
						</Button>
					</Stack>
					<TableContainer>
						<Table variant="simple">
							<Thead>
								<Tr>
									<Th style={{ color: '#7C7C7C', fontStyle: 'capitalize' }}>
										No
									</Th>
									<Th>Id Customer</Th>
									<Th>Customer Name</Th>
									<Th>Rent Start</Th>
									<Th>Rent End</Th>
									<Th>Status</Th>
									<Th>Amount</Th>
								</Tr>
							</Thead>
							<Tbody>
								{[1, 2, 3, 4, 5, 6].map((row, index) => (
									<Tr key={index}>
										<Td>{index}</Td>
										<Td>#1234</Td>
										<Td>Galib</Td>
										<Td>
											<Stack direction={`column`}>
												<Text>
													{new Date().toLocaleString('en-US', {
														day: 'numeric',
														month: 'short',
														year: 'numeric',
													})}
												</Text>
												<Text>{`12:50 am`}</Text>
											</Stack>
										</Td>
										<Td>
											<Stack direction={`column`}>
												<Text>
													{new Date().toLocaleString('en-US', {
														day: 'numeric',
														month: 'short',
														year: 'numeric',
													})}
												</Text>
												<Text>{`12:50 am`}</Text>
											</Stack>
										</Td>
										<Td>
											<Stack direction={`row`} align={`center`}>
												{' '}
												<GoPrimitiveDot color={`#F0D411`} as={Icon} />
												<Text>{`pending`}</Text>
											</Stack>
										</Td>
										<Td>&#2547; 500</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</TableContainer>
				</SimpleCard>
			</Grid>
		</Box>
	)
};

export default AsRenter;
