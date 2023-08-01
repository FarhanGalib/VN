import {
	Flex,
	Heading,
	Stack,
} from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

const Rating = () => {
	const pointer = { cursor: 'pointer' };
	return (
		<Flex direction={`column`} gap={2}>
			<Heading size={`sm`}>Rating</Heading>
			<Stack {...pointer} direction={`row`}>
				{new Array(5).fill(1).map((item, index) => (
					<AiFillStar key={index} color={`#ce0078`} />
				))}
			</Stack>
			<Stack {...pointer} direction={`row`}>
				{new Array(4).fill(1).map((item, index) => (
					<AiFillStar key={index} color={`#ce0078`} />
				))}
			</Stack>
			<Stack {...pointer} direction={`row`}>
				{new Array(3).fill(1).map((item, index) => (
					<AiFillStar key={index} color={`#ce0078`} />
				))}
			</Stack>
			<Stack {...pointer} direction={`row`}>
				{new Array(2).fill(1).map((item, index) => (
					<AiFillStar key={index} color={`#ce0078`} />
				))}
			</Stack>
			<Stack {...pointer} direction={`row`}>
				{new Array(1).fill(1).map((item, index) => (
					<AiFillStar key={index} color={`#ce0078`} />
				))}
			</Stack>
		</Flex>
	);
};

export default Rating;
