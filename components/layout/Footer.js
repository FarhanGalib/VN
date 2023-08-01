import React from 'react'
import {
	Container,
	Box,
	Grid,
	GridItem,
	Text,
	Stack,
	Link,
	Divider,
} from '@chakra-ui/react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const Footer = () => {
	return (
		<Box w={`100%`} bg={`#131619`} color={`white`} mt={`30px`} pt={`50px`}>
			<Container maxW={`container.xl`} fontSize="sm" w={`100%`}>
				<Text
					fontSize="sm"
					fontWeight={`100`}
					display={{ base: 'block', md: 'none' }}
					mb={5}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum
					inventore, voluptates nulla sapiente optio labore eum tempora
					quibusdam exercitationem dolore itaque harum impedit incidunt dolor
					excepturi sed, assumenda nobis!
				</Text>
				<Grid
					templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
					// wrap
					gap={6}
					w={`100%`}
					color={`gray.200`}
				>
					<GridItem color={`white`} display={{ base: 'none', md: 'block' }}>
						<Text fontSize="sm" fontWeight={`100`}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
							laborum inventore, voluptates nulla sapiente optio labore eum
							tempora quibusdam exercitationem dolore itaque harum impedit
							incidunt dolor excepturi sed, assumenda nobis!
						</Text>
					</GridItem>
					<GridItem>
						<Text fontSize={`17px`} as={`b`} color={`white`}>
							Company
						</Text>
						<Stack direction={`column`} mt={`15px`} fontSize={`14px`}>
							<Stack direction={`row`} align={`center`}>
								<HiOutlineArrowNarrowRight />
								<Link>About</Link>
							</Stack>
							<Stack direction={`row`} align={`center`}>
								<HiOutlineArrowNarrowRight />
								<Link>Blog</Link>
							</Stack>
						</Stack>
					</GridItem>

					<GridItem>
						<Text fontSize={`17px`} as={`b`} color={`white`}>
							Terms
						</Text>
						<Stack direction={`column`} mt={`15px`} fontSize={`14px`}>
							<Stack direction={`row`} align={`center`}>
								<HiOutlineArrowNarrowRight />
								<Link>Terms & Condition</Link>
							</Stack>
							<Stack direction={`row`} align={`center`}>
								<HiOutlineArrowNarrowRight />
								<Link>Legal</Link>
							</Stack>
							<Stack direction={`row`} align={`center`}>
								<HiOutlineArrowNarrowRight />
								<Link>Privacy Policy</Link>
							</Stack>
							<Stack direction={`row`} align={`center`}>
								<HiOutlineArrowNarrowRight />
								<Link>Refund Policy</Link>
							</Stack>
						</Stack>
					</GridItem>
					<GridItem>
						<Text fontSize={`17px`} as={`b`} color={`white`}>
							Supports
						</Text>
						<Stack direction={`column`} mt={`15px`} fontSize={`14px`}>
							<Stack direction={`row`} align={`center`}>
								<HiOutlineArrowNarrowRight fontWeight={`100`} />
								<Link>FAQ</Link>
							</Stack>
							<Stack direction={`row`} align={`center`}>
								<HiOutlineArrowNarrowRight />
								<Link>Contact Us</Link>
							</Stack>
						</Stack>
					</GridItem>
				</Grid>
			</Container>
			<Container maxW={`100%`}>
				<Divider mt={`25px`} />
				<Text fontSize={`sm`} py={`15px`} align={`center`} color={`gray.300`}>
					{' '}
					<Text as={`b`} fontWeight={`900`}>
						Varanin
					</Text>{' '}
					© 2021. All right reserved.
				</Text>
			</Container>
		</Box>
	)
}

export default Footer
