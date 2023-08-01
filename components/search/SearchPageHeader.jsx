import {
	Stack,
	Heading,
	Select,
	Input,
	InputGroup,
	InputLeftElement,
	HStack,
	IconButton,
	Collapse,
	Box,
} from '@chakra-ui/react'
import { VscSearch } from 'react-icons/vsc'
import { GrLocation } from 'react-icons/gr'
import { FaFilter } from 'react-icons/fa'
import { RiArrowDownSFill } from 'react-icons/ri'
import { useState } from 'react'
import SideFilterMobile from './SideFilterMobile'
import { toggleFilterOpen } from 'store/slices/searchSideFilterMobileSlice'
import { useDispatch } from 'react-redux'

const SearchPageHeader = () => {
	const [showLocationField, setShowLocationField] = useState(false)
	const dispatch = useDispatch()
	return (
		<Stack direction={`column`} gap={{base: '0', sm:'3', md: '5'}}>
			<SideFilterMobile />
			<Stack direction={'row'} justify={`space-between`}>
				<Heading size={`sm`} color={`brand.500`} overflow="inline-block">
					23,345 items found for "Camera"
				</Heading>
				<Stack
					direction={'row'}
					onClick={() => setShowLocationField((val) => !val)}
				>
					<IconButton
						size="sm"
						icon={<GrLocation color="base.500" />}
						display={{ base: 'flex', sm: 'none' }}
					/>
					<IconButton
						display={{ base: 'flex', md: 'none' }}
						size="sm"
						icon={<FaFilter color="base.500" />}
						onClick={() => {
							dispatch(toggleFilterOpen())
						}}
					/>
				</Stack>
			</Stack>
			<Collapse
				in={showLocationField}
				animateOpacity
				display={{ base: 'flex', sm: 'none' }}
			>
				{/* <Stack direction="row" justify="flex-end"> */}
				<Select
					display={{ base: 'flex', sm: 'none' }}
					borderRadius="6px"
					variant="outline"
					// maxW="200px"
					w="100%"
					borderColor={`gray.300`}
					placeholder="Select Location"
					_placeholder={{
						color: `gray.300`,
					}}
					size="sm"
					icon={<RiArrowDownSFill />}
				/>
				{/* </Stack> */}
			</Collapse>
			<HStack justify={`space-between`}>
				<HStack grow="1" w="100%">
					<Select
						display={{ base: 'none', sm: 'flex' }}
						borderRadius="6px"
						variant="outline"
						maxW="200px"
						// w="100%"
						borderColor={`gray.300`}
						placeholder="Select Location"
						_placeholder={{
							color: `gray.300`,
						}}
						size="sm"
						icon={<RiArrowDownSFill />}
					/>
					{/* <Select
						borderRadius="6px"
						variant="outline"
						w="150px"
						borderColor={`gray.300`}
						placeholder="Select Category"
						_placeholder={{
							color: `gray.300`,
						}}
						size="sm"
						icon={<RiArrowDownSFill />}
					/> */}
					<Select
						display={{ base: 'none', md: 'flex' }}
						borderRadius="6px"
						variant="outline"
						maxW="200px"
						// w="100%"
						borderColor={`gray.300`}
						placeholder="Sort By"
						_placeholder={{
							color: `gray.300`,
						}}
						size="sm"
						icon={<RiArrowDownSFill />}
					/>
				</HStack>

				<InputGroup
					display={{ base: 'none', sm: 'flex' }}
					ml={0}
					borderColor={`gray.300`}
					size={`sm`}
					// grow={`1`}
					maxW={'200px'}
					w="100%"
				>
					<InputLeftElement
						pointerEvents="none"
						children={<VscSearch />}
						borderColor={`#7B7B7B`}
						ml={0}
					/>
					<Input type="string" placeholder="Search" borderRadius="6px" ml={0} />
				</InputGroup>
			</HStack>
			<InputGroup
				ml={0}
				borderColor={`gray.300`}
				size={`sm`}
				grow={`1`}
				display={{ base: '100%', sm: 'none' }}
			>
				<InputLeftElement
					pointerEvents="none"
					children={<VscSearch />}
					borderColor={`#7B7B7B`}
					ml={0}
				/>
				<Input type="string" placeholder="Search" borderRadius="6px" ml={0} />
			</InputGroup>
		</Stack>
	)
}

export default SearchPageHeader
