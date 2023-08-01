import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
const SortBy = () => {
	const [showMore, setShowMore] = useState(false)
	const [sortBy] = useState(['Newest', 'Oldest'])

	return (
		<>
			<Flex direction={`column`} gap={'2'} transition={`height 2s ease`} display={{base: 'flex', md: 'none'}}>
				<Heading size={`sm`}>Sort By</Heading>
				{sortBy.map((item) => (
					<Text key={item} cursor={`pointer`} fontSize={`sm`} color={`brand.500`}>
						{item}
					</Text>
				))}
			</Flex>
		</>
	)
}

export default SortBy
