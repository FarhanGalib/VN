import {
	Text,
	Box,
	Flex,
	Grid,
	GridItem,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import {router} from 'next/router';
const Categories = () => {
	return (
		<Box mt={8} >
			<Grid onClick={()=>{router.push('/search')}} 
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
		</Box>
	)
}

export default Categories
