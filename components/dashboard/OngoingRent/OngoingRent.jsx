import React from 'react';
import {
	Flex,
	Heading,
	Box,
	Container,
	AspectRatio,
	Grid,
	Image,
	Text,
	Divider,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Collapse,
	IconButton,
} from '@chakra-ui/react';
import { HorizontalTimeline } from '../../common/HorizontalTimeline';
import { MdLocationOn, MdStar } from 'react-icons/md';
import { VscSearch } from 'react-icons/vsc';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';

const OngoingRent = ( props ) => {
	const [isOpenSearch, setOpenSearch] = useState(false);
	return (
		<Box {...props}>
			<Container maxW={{ base: '100%' }}>
				<Stack
					direction={`row`}
					justify={`space-between`}
					align={`center`}
					mb={3}
					mt={4}
				>
					<Heading color="brand.500" size="sm">
						{props.title}
					</Heading>

					<InputGroup
						borderColor={`gray.300`}
						size={`sm`}
						maxW={{ base: `195px`, md: `300px` }}
						display={{ base: 'none', sm: 'flex' }}
					>
						<InputLeftElement
							pointerEvents="none"
							children={<VscSearch />}
							borderColor={`#7B7B7B`}
						/>
						<Input type="string" placeholder="Search" borderRadius="6px" />
					</InputGroup>
					<IconButton
						display={{ base: 'flex', sm: 'none' }}
						icon={<MdSearch />}
						onClick={() => setOpenSearch((val) => !val)}
					/>
				</Stack>
				<Collapse in={isOpenSearch} animateOpacity>
					<InputGroup
						borderColor={`gray.300`}
						size={`sm`}
						my={`2`}
						display={{ base: 'flex', sm: 'none' }}
					>
						<InputLeftElement
							pointerEvents="none"
							children={<VscSearch />}
							borderColor={`#7B7B7B`}
						/>
						<Input type="string" placeholder="Search" borderRadius="6px" />
					</InputGroup>
				</Collapse>
				<Box>
					<Grid
						w="100%"
						border={`1px solid lightGray`}
						maxH={`700px`}
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
						{[1, 2, 3, 4, 5, 6].map((item, index) => (
							<Box key={index}>
								<Flex gap={3} p="3">
									<Box mr={2} display={{ base: 'none', md: 'flex' }}>
										<AspectRatio w="200px" ratio={1}>
											<Image
												src="/images/laptop.png"
												width={200}
												height={200}
												alt="trending-now"
												objectFit="cover"
											/>
										</AspectRatio>
									</Box>
									<Flex
										direction={`column`}
										gap={3}
										w="100%"
										grow={1}
										align={{ base: 'center', md: 'flex-start' }}
									>
										<Flex direction={`row`} mr={2}>
											<Box mr={2}>
												<Image
													src="/images/profile.png"
													alt="profile"
													width={50}
													height={50}
												/>
											</Box>
											<Box width={'100%'} mt={-1}>
												<Text textStyle="sm" fontWeight={'bold'}>
													XYZ Store
												</Text>
												<Text textStyle="xs">
													<MdLocationOn
														style={{
															color: '#ce0078',
															float: 'left',
															top: '2px',
															left: '-2px',
															position: 'relative',
															marginRight: '2px',
														}}
													/>{' '}
													Near Niketon
												</Text>
											</Box>
										</Flex>
										<Box mr={2} display={{ base: 'flex', md: 'none' }}>
											<AspectRatio w="200px" ratio={1}>
												<Image
													src="/images/laptop.png"
													width={200}
													height={200}
													alt="trending-now"
													objectFit="cover"
												/>
											</AspectRatio>
										</Box>
										<Text fontSize={'sm'} fontWeight="800">
											HP Laptop - Pavilion x360
										</Text>
										<Box w={`100%`} className="A">
											<HorizontalTimeline />
										</Box>
									</Flex>
								</Flex>
								<Divider />
							</Box>
						))}
					</Grid>

					{/* <Grid w="20%" align={'right'} mt={2}>
							<Text textStyle="2xs">
								4.0{' '}
								<MdStar
									style={{
										color: '#ce0078',
										float: 'right',
										position: 'relative',
										top: '-2px',
										marginLeft: '3px',
										fontSize: '20px',
									}}
								/>
							</Text>
						</Grid> */}
				</Box>
			</Container>
		</Box>
	)
};

export default OngoingRent;
