import { Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const Category = () => {
	const [showMore, setShowMore] = useState(false);
	const [categories, setCategories] = useState([
		'IP Security Cameras',
		'Action Camera',
		'Camera case & Covers',
		'Mobile Phone Cases',
		'Action Camera',
		'Mobile Phone Cases',
		'IP Security Cameras',
		'Mobile Phone Cases',
		'Camera case & Covers',
	]);

	const withMoreData = () => {
		if (showMore) return ;
		return 4;
	};
	return (
		<Flex direction={`column`} gap={'2'} transition={`height 2s ease`}>
			<Heading size={`sm`}>Category</Heading>
			{categories.slice(null, withMoreData()).map((cat) => (
				<Text key={cat} cursor={`pointer`} fontSize={`sm`} color={`brand.500`}>
					{cat}
				</Text>
			))}

			<Text
				cursor={`pointer`}
				fontSize={`sm`}
				color={`primary.500`}
				onClick={() => setShowMore((prev) => !prev)}
			>
				View {showMore ? 'Less' : 'More'}
			</Text>
		</Flex>
	);
};

export default Category;
