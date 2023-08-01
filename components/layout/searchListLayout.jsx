import Products from 'components/search/Products';
import React from 'react';

export default function searchListLayout() {
	return (
		<Flex direction={'row'} w={`100%`}>
			<Box w={`250px`}>Chategory</Box>
			<Box flexGrow={`1`}>
				<Products/>
			</Box>
		</Flex>
	);
}
