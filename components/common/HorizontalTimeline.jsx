import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { Flex, Heading, Button, Box, LoremIpsum } from '@chakra-ui/react'

const content = <Flex py={4}></Flex>
const steps = [
	{ label: '1' },
	{ label: '2' },
	{ label: '3' },
	{ label: '4' },
	{ label: '5' },
]

export const HorizontalTimeline = () => {
	const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
		initialStep: 1,
	})
	return (
		<Flex flexDir="row" width="100%" align="center" className="B">
			<Steps
				className='C'
				size={`sm`}
				alignItems={`center`}
				activeStep={activeStep}
				colorScheme={`primary`}
				// orientation={'horizontal' }
				responsive={true}
			>
				{steps.map(({ label }) => (
					<Step key={label}></Step>
				))}
			</Steps>
			{/* {activeStep === steps.length ? (
				<Flex p={4}>
					<Button mx="auto" size="sm" onClick={reset}>
						Reset
					</Button>
				</Flex>
			) : (
				<Flex width="100%" justify="flex-end">
					<Button
						isDisabled={activeStep === 0}
						mr={4}
						onClick={prevStep}
						size="sm"
						variant="ghost"
					>
						Prev
					</Button>
					<Button size="sm" onClick={nextStep}>
						{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
					</Button>
				</Flex>
			)} */}
		</Flex>
	)
}

export default HorizontalTimeline
