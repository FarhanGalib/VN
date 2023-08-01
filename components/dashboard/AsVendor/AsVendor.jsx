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
import { VscSearch } from 'react-icons/vsc';
import { GoPrimitiveDot } from 'react-icons/go';
import { BiBox, BiFilter } from 'react-icons/bi';
import SimpleCard from '../SimpleCard';

const AsVendor = () => {
	return (
		<Box>
			<Text fontSize={`sm`} fontWeight={`bold`} color={`brand.500`} mb={2}>
				Filter
			</Text>
			<Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={2}>
				<Input placeholder="Select Date and Time" size="sm" type="date" />
				<Input placeholder="Select Date and Time" size="sm" type="date" />
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
						<Heading size={'sm'}>Total Revenue</Heading>
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
							5 Items
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
						<Heading size={'sm'}>Items in stock</Heading>
						<Heading size={'md'} align={`center`}>
							15 Items
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
						<Heading size={'sm'}>Total Items</Heading>
						<Heading size={'md'} align={`center`}>
							20 Items
						</Heading>
					</SimpleCard>
				</GridItem>
			</Grid>

			<Grid
				templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
				gap={6}
				my={5}
			>
				<GridItem w="100%">
					<SimpleCard
						maxH={`555px`}
						overflow={`auto`}
						css={{
							'&::-webkit-scrollbar': {
								width: '4px',
							},
							'&::-webkit-scrollbar-track': {
								width: '6px',
							},
							'&::-webkit-scrollbar-thumb': {
								background: '#ce0078',
								borderRadius: '24px',
							},
						}}
					>
						<Heading size={`sm`} mb={3}>
							Top Items by Frequency
						</Heading>
						<InputGroup size="md" mb={5}>
							<Input type={'text'} fontSize={'sm'} placeholder="Search" />
							<InputRightElement width="6.1rem" pointerEvents="none">
								<Button
									leftIcon={
										<VscSearch style={{ color: '#ffffff', fontSize: 14 }} />
									}
									size="sm"
									colorScheme="primary"
								>
									Search
								</Button>
							</InputRightElement>
						</InputGroup>
						{[1, 2, 3, 4, 5, 6, 4, 5, 6, 4, 5, 6].map((item, index) => (
							<Grid
								key={index}
								templateRows="repeat(2, 1fr)"
								templateColumns="repeat(5, 1fr)"
								gap={1}
							>
								<GridItem rowSpan={2} colSpan={1}>
									<AspectRatio ratio={1}>
										<Image src="/images/shoe.png" alt="" />
									</AspectRatio>
								</GridItem>
								<GridItem colSpan={4}>
									<Text fontSize="sm" color={`black`}>
										{' '}
										vsc Speed Force : Knit{' '}
									</Text>
								</GridItem>
								<GridItem colSpan={2} alignSelf={`center`}>
									<Text fontSize="sm" color={`gray.500`}>
										{' '}
										Wemen{' '}
									</Text>
								</GridItem>
								<GridItem colSpan={2} alignSelf={`center`}>
									<Tag
										size={`sm`}
										variant={index !== 0 ? `solid` : `outline`}
										colorScheme={index !== 0 ? `` : `primary`}
										bg={index !== 0 ? `#A9FFA7` : ``}
										color={index !== 0 ? `#037400` : ``}
										w={`100%`}
									>
										<TagLabel w={`100%`} align={`center`} p={2}>
											32 Times
										</TagLabel>
									</Tag>{' '}
								</GridItem>
								<GridItem colSpan={5} mt={2}>
									<Divider />
								</GridItem>
							</Grid>
						))}
					</SimpleCard>
				</GridItem>
				<GridItem w="100%">
					<SimpleCard
						maxH={`555px`}
						overflow={`auto`}
						css={{
							'&::-webkit-scrollbar': {
								width: '4px',
							},
							'&::-webkit-scrollbar-track': {
								width: '6px',
							},
							'&::-webkit-scrollbar-thumb': {
								background: '#ce0078',
								borderRadius: '24px',
							},
						}}
					>
						<Heading size={`sm`} mb={3}>
							Top Items by Revenue
						</Heading>
						<InputGroup size="md" mb={5}>
							<Input type={'text'} fontSize={'sm'} placeholder="Search" />
							<InputRightElement width="6.1rem" pointerEvents="none">
								<Button
									leftIcon={
										<VscSearch style={{ color: '#ffffff', fontSize: 14 }} />
									}
									size="sm"
									colorScheme="primary"
								>
									Search
								</Button>
							</InputRightElement>
						</InputGroup>
						{[1, 2, 3, 4, 5, 6, 4, 5, 6, 4, 5, 6].map((item, index) => (
							<Grid
								key={index}
								templateRows="repeat(2, 1fr)"
								templateColumns="repeat(5, 1fr)"
								gap={1}
								p={1}
							>
								<GridItem rowSpan={2} colSpan={1}>
									<AspectRatio ratio={1}>
										<Image src="/images/shoe.png" alt="" />
									</AspectRatio>
								</GridItem>
								<GridItem colSpan={4}>
									<Text fontSize="sm" color={`black`}>
										{' '}
										Speed Force : Knit{' '}
									</Text>
								</GridItem>
								<GridItem colSpan={2} alignSelf={`center`}>
									<Text fontSize="sm" color={`gray.500`}>
										{' '}
										Wemen{' '}
									</Text>
								</GridItem>
								<GridItem colSpan={2} alignSelf={`center`}>
									<Tag
										size={`sm`}
										variant={index !== 0 ? `solid` : `outline`}
										colorScheme={index !== 0 ? `gost` : `primary`}
										bg={index !== 0 ? `#A9FFA7` : `gost`}
										color={index !== 0 ? `#037400` : `gost`}
										w={`100%`}
									>
										<TagLabel w={`100%`} align={`center`} p={2}>
											32 Times
										</TagLabel>
									</Tag>{' '}
								</GridItem>
								<GridItem colSpan={5} mt={2}>
									<Divider />
								</GridItem>
							</Grid>
						))}
					</SimpleCard>
				</GridItem>
			</Grid>

			<Grid>
				<SimpleCard>
					<Heading size={`sm`}>Revenue</Heading>
				</SimpleCard>
			</Grid>

			<Grid mt={5}>
				<SimpleCard w={'100%'} overflow={`auto`} maxH={`855px`}>
					<Stack
						direction={`row`}
						justify={`space-between`}
						align={`center`}
						mb={2}
					>
						<Heading size={`sm`}>Recent Invoice</Heading>
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

export default AsVendor;
