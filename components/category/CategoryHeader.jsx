import {
	Collapse,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
} from '@chakra-ui/react'
import { VscSearch } from 'react-icons/vsc'
import { useState } from 'react'

const CategoryHeader = () => {
	const [showSearch, setShowSearch] = useState(false)
	return (
		<>
			<Stack
				direction={`row`}
				align={`center`}
				justify={`space-between`}
				mt={3}
			>
				<Heading size={`sm`}>All Category</Heading>

				<InputGroup
					size="sm"
					maxW={`300px`}
					display={[`none`, `none`, `inline-block`]}
				>
					<InputLeftElement
						h={`35px`}
						pointerEvents="none"
						children={<VscSearch color="#7B7B7B" size={`15px`} />}
					/>
					<Input
						borderRadius="md"
						type="string"
						h={`35px`}
						placeholder="Search categories by name"
						_placeholder={{
							fontWeight: 200,
							fontSize: `16px`,
							color: `#7B7B7B`,
						}}
					/>
				</InputGroup>
				<IconButton
					size="sm"
					variant={`ghost`}
					aria-label="Search database"
					icon={<VscSearch />}
					onClick={() => setShowSearch((val) => !val)}
					display={[`flex`, `flex`, `none`]}
				/>
			</Stack>
			<Collapse in={showSearch} animateOpacity>
				<Stack direction="row" justify="flex-end">
					<InputGroup
						size="sm"
						mt={3}
						display={[`flex`, `flex`, `none`]}
						maxW={['100%', '300px']}
						align="right"
					>
						<InputLeftElement
							h={`35px`}
							pointerEvents="none"
							children={<VscSearch color="#7B7B7B" size={`15px`} />}
						/>
						<Input
							borderRadius="md"
							type="string"
							h={`35px`}
							placeholder="Search categories by name"
							_placeholder={{
								fontWeight: 200,
								fontSize: `16px`,
								color: `#7B7B7B`,
							}}
						/>
					</InputGroup>
				</Stack>
			</Collapse>
		</>
	)
}

export default CategoryHeader
