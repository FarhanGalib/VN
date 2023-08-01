import { Box } from '@chakra-ui/react'
import React from 'react'

const SimpleCard = (props) => {
    return (
		<Box
			border={`1px solid`}
			borderColor={`primary.500`}
			borderRadius={`6px`}
			p={3}
			{...props}
		>
		</Box>
	)
}

export default SimpleCard
