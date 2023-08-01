import { Box, Grid, GridItem, Image } from '@chakra-ui/react';
import CardComponent from 'components/home/CardComponent';
import React from 'react';
import homeStyles from 'styles/home.module.css';


const Products = () => {
	return (
		<Box mt={4}>
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					sm: 'repeat(2, 1fr)',
					md: 'repeat(3, 1fr)',
					lg: 'repeat(4, 1fr)',
					xl: 'repeat(4, 1fr)',
				}}
				// templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
				gap={4}
			>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
					<CardComponent key={index} />
				))}
			</Grid>
		</Box>
	)
};

export default Products;
