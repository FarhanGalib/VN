import homeStyles from 'styles/home.module.css'
import {
	Container,
	Text,
	Box,
	Flex,
	Grid,
	Button,
	GridItem,
	Image,
} from '@chakra-ui/react'
import { HiOutlineArrowRight } from 'react-icons/hi'
// import Image from 'next/image'
import { router } from 'next/router'

export default function CategorySection() {
	return (
		<>
			<Box mt={10}>
				<Container
					maxW={{
						base: 'container.md',
						md: 'container.lg',
						lg: 'container.xl',
					}}
				>
					<Text textStyle="lg" as="h2" align={'center'}>
						Browse by Category
					</Text>
					<Box mt={8}>
						{/* <Grid onClick={()=>{router.push('/search')}}  templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)' }} className={homeStyles.categoryMain} gap={0}>
                    <Grid w='100%' p={5} className={homeStyles.categoryBoxTop} cursor='pointer' _hover={{ backgroundColor: '#ffe8f5'}}>
                        <Flex gap={3}>
                            <Grid w='70%'>
                                <Text as="p" textStyle="sm">Soft chairs</Text>
                                <Text as="p" textStyle="xs" mt={3} color="#8B96A5">From <br/>BDT 119 / day</Text>
                            </Grid>
                            <Grid w='30%'>
                                <Image src='/images/chair.png' alt='Chairs' width={100} height={100}/>
                            </Grid>
                        </Flex>
                    </Grid>
                    <Grid w='100%' p={5} className={homeStyles.categoryBoxTop} cursor='pointer' _hover={{ backgroundColor: '#ffe8f5'}}>
                        <Flex gap={3}>
                            <Grid w='70%'>
                                <Text as="p" textStyle="sm">Soft chair</Text>
                                <Text as="p" textStyle="xs" mt={3} color="#8B96A5">From <br/>BDT 119 / day</Text>
                            </Grid>
                            <Grid w='30%'>
                                <Image src='/images/sofa.png' alt='Sofa' width={100} height={100} />
                            </Grid>
                        </Flex>
                    </Grid>
                    <Grid w='100%' p={5} className={homeStyles.categoryBoxTop} cursor='pointer' _hover={{ backgroundColor: '#ffe8f5'}}>
                        <Flex gap={3}>
                            <Grid w='70%'>
                                <Text as="p" textStyle="sm">Kitchen dishes</Text>
                                <Text as="p" textStyle="xs" mt={3} color="#8B96A5">From <br/>BDT 119 / day</Text>
                            </Grid>
                            <Grid w='30%'>
                                <Image src='/images/chair2.png' alt='Chairs' width={100} height={100} />
                            </Grid>
                        </Flex>
                    </Grid>
                    <Grid w='100%' p={5} className={homeStyles.categoryBoxTop} cursor='pointer' _hover={{ backgroundColor: '#ffe8f5'}}>
                        <Flex gap={3}>
                            <Grid w='70%'>
                                <Text as="p" textStyle="sm">Pots and Pans</Text>
                                <Text as="p" textStyle="xs" mt={3} color="#8B96A5">From <br/>BDT 119 / day</Text>
                            </Grid>
                            <Grid w='30%'>
                                <Image src='/images/pot.png' alt='Pot' width={100} height={100} />
                            </Grid>
                        </Flex>
                    </Grid>
                    <Grid w='100%' p={5} className={homeStyles.categoryBoxBottom} cursor='pointer' _hover={{ backgroundColor: '#ffe8f5'}}>
                        <Flex gap={3}>
                            <Grid w='70%'>
                                <Text as="p" textStyle="sm">Kitchen mixer</Text>
                                <Text as="p" textStyle="xs" mt={3} color="#8B96A5">From <br/>BDT 119 / day</Text>
                            </Grid>
                            <Grid w='30%'>
                                <Image src='/images/kitchen-mixer.png' alt='kitchen-mixer' width={100} height={100} />
                            </Grid>
                        </Flex>
                    </Grid>
                    <Grid w='100%' p={5} className={homeStyles.categoryBoxBottom} cursor='pointer' _hover={{ backgroundColor: '#ffe8f5'}}>
                        <Flex gap={3}>
                            <Grid w='70%'>
                                <Text as="p" textStyle="sm">Blenders</Text>
                                <Text as="p" textStyle="xs" mt={3} color="#8B96A5">From <br/>BDT 119 / day</Text>
                            </Grid>
                            <Grid w='30%'>
                                <Image src='/images/blender.png' alt='blender' width={100} height={100} />
                            </Grid>
                        </Flex>
                    </Grid>
                    <Grid w='100%' p={5} className={homeStyles.categoryBoxBottom} cursor='pointer' _hover={{ backgroundColor: '#ffe8f5'}}>
                        <Flex gap={3}>
                            <Grid w='70%'>
                                <Text as="p" textStyle="sm">Home appliance</Text>
                                <Text as="p" textStyle="xs" mt={3} color="#8B96A5">From <br/>BDT 119 / day</Text>
                            </Grid>
                            <Grid w='30%'>
                                <Image src='/images/hanger.png' alt='hanger' width={100} height={100} />
                            </Grid>
                        </Flex>
                    </Grid>
                    <Grid w='100%' p={5} className={homeStyles.categoryBoxBottom} cursor='pointer' _hover={{ backgroundColor: '#ffe8f5'}}>
                        <Flex gap={3}>
                            <Grid w='70%'>
                                <Text as="p" textStyle="sm">Coffee maker</Text>
                                <Text as="p" textStyle="xs" mt={3} color="#8B96A5">From <br/>BDT 119 / day</Text>
                            </Grid>
                            <Grid w='30%'>
                                <Image src='/images/flower.png' alt='flower' width={100} height={100} />
                            </Grid>
                        </Flex>
                    </Grid>
                </Grid> */}

						<Grid
							templateColumns={{
								base: 'repeat(1, 1fr)',
								sm: 'repeat(2, 1fr)',
								md: 'repeat(3, 1fr)',
								lg: 'repeat(4, 1fr)',
								xl: 'repeat(4, 1fr)',
							}}
							borderTop={`1px solid #E0E0E0`}
							borderLeft={`1px solid #E0E0E0`}
							gap={0}
						>
							<GridItem
								w="100%"
								p={5}
								borderBottom={`1px solid #E0E0E0`}
								borderRight={`1px solid #E0E0E0`}
								style={{ cursor: 'pointer' }}
								_hover={{ backgroundColor: '#ffe8f5' }}
                                onClick={() => {
                                    router.push('/category')
                                }}
							>
								<Flex gap={3}>
									<GridItem w="70%">
										<Text as="p" textStyle="sm">
											Soft chairs
										</Text>
										<Text as="p" textStyle="xs" mt={3} color="#8B96A5">
											1 items available
										</Text>
									</GridItem>
									<GridItem w="30%">
										<Image src="images/chair.png" alt="Chairs" />
									</GridItem>
								</Flex>
							</GridItem>
							<GridItem
								w="100%"
								p={5}
								borderBottom={`1px solid #E0E0E0`}
								borderRight={`1px solid #E0E0E0`}
								style={{ cursor: 'pointer' }}
								_hover={{ backgroundColor: '#ffe8f5' }}
                                onClick={() => {
                                    router.push('/category')
                                }}
							>
								<Flex gap={3}>
									<GridItem w="70%">
										<Text as="p" textStyle="sm">
											Soft chair
										</Text>
										<Text as="p" textStyle="xs" mt={3} color="#8B96A5">
											1 items available
										</Text>
									</GridItem>
									<GridItem w="30%">
										<Image src="images/sofa.png" alt="Sofa" />
									</GridItem>
								</Flex>
							</GridItem>
							<GridItem
								w="100%"
								p={5}
								borderBottom={`1px solid #E0E0E0`}
								borderRight={`1px solid #E0E0E0`}
								style={{ cursor: 'pointer' }}
								_hover={{ backgroundColor: '#ffe8f5' }}
                                onClick={() => {
                                    router.push('/category')
                                }}
							>
								<Flex gap={3}>
									<GridItem w="70%">
										<Text as="p" textStyle="sm">
											Kitchen dishes
										</Text>
										<Text as="p" textStyle="xs" mt={3} color="#8B96A5">
											1 items available
										</Text>
									</GridItem>
									<GridItem w="30%">
										<Image src="images/chair2.png" alt="Chairs" />
									</GridItem>
								</Flex>
							</GridItem>
							<GridItem
								w="100%"
								p={5}
								borderBottom={`1px solid #E0E0E0`}
								borderRight={`1px solid #E0E0E0`}
								style={{ cursor: 'pointer' }}
								_hover={{ backgroundColor: '#ffe8f5' }}
                                onClick={() => {
                                    router.push('/category')
                                }}
							>
								<Flex gap={3}>
									<GridItem w="70%">
										<Text as="p" textStyle="sm">
											Pots and Pans
										</Text>
										<Text as="p" textStyle="xs" mt={3} color="#8B96A5">
											1 items available
										</Text>
									</GridItem>
									<GridItem w="30%">
										<Image src="images/pot.png" alt="Pot" />
									</GridItem>
								</Flex>
							</GridItem>
							<GridItem
								w="100%"
								p={5}
								borderBottom={`1px solid #E0E0E0`}
								borderRight={`1px solid #E0E0E0`}
								style={{ cursor: 'pointer' }}
								_hover={{ backgroundColor: '#ffe8f5' }}
                                onClick={() => {
                                    router.push('/category')
                                }}
							>
								<Flex gap={3}>
									<GridItem w="70%">
										<Text as="p" textStyle="sm">
											Kitchen mixer
										</Text>
										<Text as="p" textStyle="xs" mt={3} color="#8B96A5">
											1 items available
										</Text>
									</GridItem>
									<GridItem w="30%">
										<Image src="images/kitchen-mixer.png" alt="kitchen-mixer" />
									</GridItem>
								</Flex>
							</GridItem>
							<GridItem
								w="100%"
								p={5}
								borderBottom={`1px solid #E0E0E0`}
								borderRight={`1px solid #E0E0E0`}
								style={{ cursor: 'pointer' }}
								_hover={{ backgroundColor: '#ffe8f5' }}
                                onClick={() => {
                                    router.push('/category')
                                }}
							>
								<Flex gap={3}>
									<GridItem w="70%">
										<Text as="p" textStyle="sm">
											Blenders
										</Text>
										<Text as="p" textStyle="xs" mt={3} color="#8B96A5">
											1 items available
										</Text>
									</GridItem>
									<GridItem w="30%">
										<Image src="images/blender.png" alt="blender" />
									</GridItem>
								</Flex>
							</GridItem>
							<GridItem
								w="100%"
								p={5}
								borderBottom={`1px solid #E0E0E0`}
								borderRight={`1px solid #E0E0E0`}
								style={{ cursor: 'pointer' }}
								_hover={{ backgroundColor: '#ffe8f5' }}
                                onClick={() => {
                                    router.push('/category')
                                }}
							>
								<Flex gap={3}>
									<GridItem w="70%">
										<Text as="p" textStyle="sm">
											Home appliance
										</Text>
										<Text as="p" textStyle="xs" mt={3} color="#8B96A5">
											1 items available
										</Text>
									</GridItem>
									<GridItem w="30%">
										<Image src="images/hanger.png" alt="hanger" />
									</GridItem>
								</Flex>
							</GridItem>
							<GridItem
								w="100%"
								p={5}
								borderBottom={`1px solid #E0E0E0`}
								borderRight={`1px solid #E0E0E0`}
								style={{ cursor: 'pointer' }}
								_hover={{ backgroundColor: '#ffe8f5' }}
                                onClick={() => {
                                    router.push('/category')
                                }}
							>
								<Flex gap={3}>
									<GridItem w="70%">
										<Text as="p" textStyle="sm">
											Coffee maker
										</Text>
										<Text as="p" textStyle="xs" mt={3} color="#8B96A5">
											1 items available
										</Text>
									</GridItem>
									<GridItem w="30%">
										<Image src="images/flower.png" alt="flower" />
									</GridItem>
								</Flex>
							</GridItem>
						</Grid>

						<Box align={'center'}>
							<Button
								onClick={() => {
									router.push('/category')
								}}
								mt={8}
								rightIcon={<HiOutlineArrowRight />}
								size="sm"
								colorScheme="primary"
								variant="outline"
							>
								View all Categories
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	)
}
