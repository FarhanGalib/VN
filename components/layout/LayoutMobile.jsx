import {
	Avatar,
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import {
	AiOutlineMessage,
	AiOutlinePlusCircle,
} from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiHomeAlt2 } from 'react-icons/bi'
import { router } from 'next/router'

const LayoutMobile = () => {
	return (
		<Flex
			display={{ base: 'flex', md: 'none' }}
			justify={`space-around`}
			align={`center`}
			bg={`#FFF9F9`}
			pos={'sticky'}
			bottom={0}
			height={`60px`}
			borderRadius={`20px 20px 0px 0px`}
			boxShadow={`0px -1px 10px #bcbcbc`}
		>
			<IconButton
				icon={<BiHomeAlt2 color="#e80388" />}
				bg={`transparent`}
				_hover={{ backgroundColor: 'transparent', borderRadius: '16px' }}
				onClick={() => router.push(`/`)}
			/>
			<IconButton
				icon={<AiOutlineMessage color="#e80388" />}
				bg={`transparent`}
				_hover={{ backgroundColor: 'transparent', borderRadius: '16px' }}
				onClick={() => router.push(`/`)}
			/>
			<IconButton
				icon={<AiOutlinePlusCircle color="#e80388" size={`35px`} />}
				bg={`transparent`}
				_hover={{ backgroundColor: 'transparent', borderRadius: '16px' }}
				onClick={() => router.push(`/add-item`)}
			/>
			<IconButton
				icon={<HiOutlineShoppingBag color="#e80388" />}
				bg={`transparent`}
				_hover={{ backgroundColor: 'transparent', borderRadius: '16px' }}
				onClick={() => router.push(`/cart`)}
			/>
			<Menu>
				<MenuButton
					as={IconButton}
					icon={<Avatar size="xs" name="Farhan Galib" />}
					bg={`transparent`}
					_hover={{ backgroundColor: 'transparent', borderRadius: '16px' }}
				/>
				<MenuList display="none">
					<MenuItem onClick={() => router.push('/dashboard')}>
						Dashboard
					</MenuItem>
					<MenuItem>Sign In</MenuItem>
					<MenuItem>Sign Out</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	)
}

export default LayoutMobile
