import {
	Flex,
	Heading,
	Slider,
	SliderMark,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
} from '@chakra-ui/react';
import { useState } from 'react';

const PriceRange = () => {
	const [sliderValue, setSliderValue] = useState(50);

	const labelStyles = {
		mt: '-6',
		// ml: '-2.5',
		fontSize: 'sm',
	};
	const labelStylesL = {
		ml: '-6',
	};
	const labelStylesSL = {
		ml: '-2',
	};

	return (
		<Flex direction={`column`} gap={8}  >
			<Heading size={`sm`}>Price Range</Heading>
			<Slider
				aria-label="slider-ex-6"
				onChange={(val) => setSliderValue(val)}
				w={`85%`}
        colorScheme={`primary`}
			>
				<SliderMark value={0} {...labelStyles}>
					All
				</SliderMark>
				<SliderMark value={33} {...labelStyles}>
					$
				</SliderMark>
				<SliderMark value={66} {...labelStyles} {...labelStylesSL}>
					$$
				</SliderMark>
				<SliderMark value={100} {...labelStyles} {...labelStylesL}>
					$$$
				</SliderMark>

				<SliderTrack>
					<SliderFilledTrack />
				</SliderTrack>
				<SliderThumb />
			</Slider>
		</Flex>
	);
};

export default PriceRange;
