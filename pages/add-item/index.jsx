import addItemStyles from 'styles/addItem.module.css'
import {
	Box,
	Text,
	Flex,
	Grid,
	Input,
	Button,
	Textarea,
	Select,
	FormControl,
	FormLabel,
	isError,
	input,
	handleInputChange,
	Switch,
} from '@chakra-ui/react'
import CustomerLayout from 'components/layout/CustomerLayout'
import useFileUpload from 'react-use-file-upload'
import React, { useRef, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import {
	AiFillSave,
	AiOutlinePlusCircle,
	AiOutlineMinusCircle,
} from 'react-icons/ai'
import AuthLayout from 'components/layout/AuthLayout'
import ItemImageSection from 'components/addItem/ItemImageSection'

const AddItem = () => {
	const [value, setValue] = useState('')
	const emptyPricingPackage = {
		time: 0,
		minimumDuration: 12,
		price: 120,
		additionalTime: null,
		AdditionalCharges: null,
	}
	const [pricingBlocks, setPricingBlocks] = useState([emptyPricingPackage])
	const [itemImages, setItemImages] = useState([])

	const {
		files,
		fileNames,
		fileTypes,
		totalSize,
		totalSizeInBytes,
		handleDragDropEvent,
		clearAllFiles,
		createFormData,
		setFiles,
		removeFile,
	} = useFileUpload()

	const inputRef = useRef()

	const addPricingPackage = (index) => {
		const newPricingBlock = [...pricingBlocks, emptyPricingPackage]
		setPricingBlocks(newPricingBlock)
	}

	const removePricingPackage = (index) => {
		let newPricingBlock = [...pricingBlocks]
		newPricingBlock.splice(index, 1)
		setPricingBlocks(newPricingBlock)
	}

	return (
		<Box
			pl={{ base: 4, sm: 2, md: 0, lg: 0 }}
			pr={{ base: 4, sm: 2, md: 0, lg: 0 }}
		>
			<Text textStyle="2md" fontWeight="bold" as="h3" mb={1}>
				Add Item Details
			</Text>
			<Text textStyle="sm" fontWeight="500" as="h3" mb={6}>
				Item details will be shown in the market place. Make sure the details
				are accurate and reliable for other users.
			</Text>
			<ItemImageSection imageData={{itemImages, setItemImages}} />
			<Flex
				gap={6}
				direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
			>
				<Grid
					w={{ base: '100%', sm: '100%', md: '70%', lg: '70%' }}
					mt={5}
					gap={4}
				>
					<FormControl isRequired isInvalid={isError} mt={3}>
						<Flex>
							<Grid w={'50%'}>
								<FormLabel fontSize={'16'} mb={1}>
									Item Name
								</FormLabel>
							</Grid>
							<Grid w={'50%'} align={'right'}>
								<Text textStyle={'sm'}>
									Publish{' '}
									<Switch colorScheme={'primary'} mb={2} ml={2} float="right" />
								</Text>
							</Grid>
						</Flex>
						<Input type="email" value={input} onChange={handleInputChange} />
					</FormControl>
					<FormControl isRequired isInvalid={isError} mt={3}>
						<FormLabel fontSize={'16'} mb={1}>
							Item Details
						</FormLabel>
						<Textarea
							value={value}
							onChange={handleInputChange}
							placeholder=""
							size="sm"
						/>
					</FormControl>
				</Grid>
			</Flex>
			<Flex
				w={{ base: '100%', sm: '100%', md: '70%', lg: '70%' }}
				direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
				gap={6}
				mt={3}
			>
				<Grid w={{ base: '100%', sm: '100%', md: '80%', lg: '80%' }} gap={4}>
					<FormControl isRequired isInvalid={isError}>
						<FormLabel fontSize={'16'} mb={1}>
							Item Serial Number
						</FormLabel>
						<Input type="number" value={input} onChange={handleInputChange} />
					</FormControl>
				</Grid>
				<Grid w={{ base: '100%', sm: '100%', md: '80%', lg: '80%' }} gap={4}>
					<FormControl isRequired isInvalid={isError}>
						<FormLabel fontSize={'16'} mb={1}>
							SKU Name
						</FormLabel>
						<Input type="text" value={input} onChange={handleInputChange} />
					</FormControl>
				</Grid>
				<Grid w={{ base: '100%', sm: '100%', md: '80%', lg: '80%' }} gap={4}>
					<FormControl isRequired isInvalid={isError}>
						<FormLabel fontSize={'16'} mb={1}>
							Barcode Name
						</FormLabel>
						<Input type="text" value={input} onChange={handleInputChange} />
					</FormControl>
				</Grid>
			</Flex>
			<Flex
				w={{ base: '100%', sm: '100%', md: '80%', lg: '80%' }}
				direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
				gap={6}
				mt={3}
			>
				<Grid
					w={{ base: '100%', sm: '100%', md: '31.5%', lg: '31.5%' }}
					gap={4}
				>
					<FormControl isRequired isInvalid={isError}>
						<FormLabel fontSize={'16'} mb={1}>
							Category
						</FormLabel>
						<Select placeholder="Select Category">
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
						</Select>
					</FormControl>
				</Grid>
				<Grid
					w={{ base: '100%', sm: '100%', md: '31.5%', lg: '31.5%' }}
					gap={4}
				>
					<FormControl isRequired isInvalid={isError}>
						<FormLabel fontSize={'16'} mb={1}>
							Stock
						</FormLabel>
						<Input type="text" value={input} onChange={handleInputChange} />
					</FormControl>
				</Grid>
			</Flex>

			<Text mt={10} mb={2} textStyle="md" fontWeight="bold" as="h3">
				Pricing Package
			</Text>

			{pricingBlocks.map((pricingBlock, index) => (
				<Flex
					key={index}
					w={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
					p={3}
					className={addItemStyles.pricingBox}
					direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
					gap={6}
					mt={4}
					mb={12}
				>
					<Grid
						w={{ base: '100%', sm: '100%', md: '19.2%', lg: '19.2%' }}
						gap={3}
					>
						<FormControl>
							<FormLabel fontSize={'16'} mb={1}>
								Time
							</FormLabel>
							<Select
								placeholder="Select Time"
								value={`option1`}
								onChange={(e) => {
									pricingBlock.time = e.target.value
								}}
							>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
							</Select>
						</FormControl>
					</Grid>
					<Grid
						w={{ base: '100%', sm: '100%', md: '19.2%', lg: '19.2%' }}
						gap={4}
					>
						<FormControl>
							<FormLabel fontSize={'16'} mb={1}>
								Minimum Duration
							</FormLabel>
							<Input type="text" value={input} />
						</FormControl>
					</Grid>
					<Grid
						w={{ base: '100%', sm: '100%', md: '19.2%', lg: '19.2%' }}
						gap={4}
					>
						<FormControl isRequired isInvalid={isError}>
							<FormLabel fontSize={'16'} mb={1}>
								Price
							</FormLabel>
							<Input type="number" value={input} onChange={handleInputChange} />
						</FormControl>
					</Grid>
					<Grid
						w={{ base: '100%', sm: '100%', md: '19.2%', lg: '19.2%' }}
						gap={4}
					>
						<FormControl>
							<FormLabel fontSize={'16'} mb={1}>
								Additional Time
							</FormLabel>
							<Select placeholder="Select Time">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
							</Select>
						</FormControl>
					</Grid>
					<Grid
						w={{ base: '100%', sm: '100%', md: '19.2%', lg: '19.2%' }}
						gap={4}
					>
						<FormControl>
							<FormLabel fontSize={'16'} mb={1}>
								Additional Charges
							</FormLabel>
							<Input type="text" value={input} />
						</FormControl>
					</Grid>
					{index === 0 && (
						<Grid w={{ base: '100%', sm: '100%', md: '4%', lg: '4%' }} mt={6}>
							<Button
								onClick={() => addPricingPackage(index)}
								colorScheme="primary"
								variant="link"
							>
								<AiOutlinePlusCircle
									style={{ color: '#ce0078', fontSize: '40' }}
								/>
							</Button>
						</Grid>
					)}
					{index !== 0 && (
						<Grid w={{ base: '100%', sm: '100%', md: '4%', lg: '4%' }} mt={6}>
							<Button
								className={index}
								onClick={() => removePricingPackage(index)}
								colorScheme="primary"
								variant="link"
							>
								<AiOutlineMinusCircle
									style={{ color: '#ce0078', fontSize: '40' }}
								/>
							</Button>
						</Grid>
					)}
				</Flex>
			))}

			<Flex
				w={{ base: '100%', sm: '100%', md: '70%', lg: '70%' }}
				direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
				gap={6}
				mt={3}
			>
				<Grid w={{ base: '100%', sm: '100%', md: '80%', lg: '80%' }} gap={4}>
					<FormControl isRequired isInvalid={isError}>
						<FormLabel fontSize={'16'} mb={1}>
							Location
						</FormLabel>
						<Input type="text" value={input} onChange={handleInputChange} />
					</FormControl>
				</Grid>
				<Grid w={{ base: '100%', sm: '100%', md: '80%', lg: '80%' }} gap={4}>
					<FormControl isRequired isInvalid={isError}>
						<FormLabel fontSize={'16'} mb={1}>
							Town/City
						</FormLabel>
						<Input type="text" value={input} onChange={handleInputChange} />
					</FormControl>
				</Grid>
				<Grid w={{ base: '100%', sm: '100%', md: '80%', lg: '80%' }} gap={4}>
					<FormControl isRequired isInvalid={isError}>
						<FormLabel fontSize={'16'} mb={1}>
							District
						</FormLabel>
						<Input type="text" value={input} onChange={handleInputChange} />
					</FormControl>
				</Grid>
			</Flex>

			<Flex
				w={{ base: '100%', sm: '100%', md: '70%', lg: '70%' }}
				direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
				gap={6}
				mt={3}
			>
				<Grid
					w={{ base: '100%', sm: '100%', md: '67.5%', lg: '67.5%' }}
					gap={4}
				>
					<FormControl isRequired isInvalid={isError}>
						<FormLabel fontSize={'16'} mb={1}>
							Street Address
						</FormLabel>
						<Input type="text" value={input} onChange={handleInputChange} />
					</FormControl>
				</Grid>
				<Grid
					w={{ base: '100%', sm: '100%', md: '31.5%', lg: '31.5%' }}
					gap={4}
				>
					<FormControl isRequired isInvalid={isError}>
						<FormLabel fontSize={'16'} mb={1}>
							Postal Code
						</FormLabel>
						<Input type="text" value={input} onChange={handleInputChange} />
					</FormControl>
				</Grid>
			</Flex>

			<Grid w={{ base: '100%', sm: '100%', md: '70%', lg: '70%' }}>
				<Flex mt={8}>
					<Grid w={'80%'}>
						<Text mb={2} textStyle="sm" fontWeight="bold" as="h3">
							Do you support delivery and return?
						</Text>
					</Grid>
					<Grid w={'20%'} align={'right'}>
						<Switch colorScheme={'primary'} mb={2} ml={2} float="right" />
					</Grid>
				</Flex>
				<Text textStyle="sm" fontWeight="500" as="h3">
					Item details will be shown in the market place. Make sure the details
					are accurate and reliable for other users.
				</Text>
			</Grid>

			<Box
				align={'right'}
				w={{ base: '100%', sm: '100%', md: '70%', lg: '70%' }}
				mt={2}
			>
				<Button
					rightIcon={<MdArrowBackIos />}
					colorScheme="primary"
					size={{ base: 'xs', sm: 'xs', md: 'sm', lg: 'sm' }}
					variant="outline"
				>
					Cancel
				</Button>
				<Button
					rightIcon={<AiFillSave />}
					ml={4}
					colorScheme="primary"
					size={{ base: 'xs', sm: 'xs', md: 'sm', lg: 'sm' }}
					variant="solid"
				>
					Save
				</Button>
			</Box>
		</Box>
	)
}

AddItem.breadCrumb = [
	{ label: 'Home', isCurrentPage: false, link: '/' },
	{ label: 'My Account', isCurrentPage: false, link: '/dashboard' },
	{ label: 'Profile', isCurrentPage: true },
]
AddItem.PageLayout = CustomerLayout
AddItem.authLayout = AuthLayout

export default AddItem
