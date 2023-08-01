import { Flex } from '@chakra-ui/react'
import React from 'react'
import Category from './Category'
import PriceRange from './PriceRange'
import Brands from './Brands'
import Offers from './Offers'
import RentalPeriod from './RentalPeriod'
import Rating from './Rating'
import SortBy from './SortBy'

const SideFilters = () => {
	return (
		<Flex direction={`column`} gap={`6`}>
			<SortBy />
			<Category />
			<PriceRange />
			<Brands />
			<Offers />
			<RentalPeriod />
			<Rating />
		</Flex>
	)
}

export default SideFilters
