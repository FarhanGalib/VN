import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Input,
	useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFilterOpen } from 'store/slices/searchSideFilterMobileSlice'
import SideFilters from './SideFilters'

const SideFilterMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isSideFilterOpen } = useSelector((state) => state.showFilter)
    const dispatch = useDispatch()
	// const btnRef = React.useRef()

	return (
		
			<Drawer
				display={{base:'none', md:'none'}}
				size="xs"
				isOpen={isSideFilterOpen}
				placement="left"
				onClose={()=>dispatch(toggleFilterOpen())}
			>
				<DrawerOverlay />
				<DrawerContent bg={`white`}>
					<DrawerCloseButton />

					<DrawerBody>
						<SideFilters />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		
	)
}

export default SideFilterMobile
