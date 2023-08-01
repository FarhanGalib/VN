import productDetailStyles from 'styles/productDetail.module.css'
import {
	Box,
	Text,
	Flex,
	InputGroup,
	InputLeftElement,
	HStack,
	Input,
	Button,
	useNumberInput,
	Grid,
  Icon,
  AspectRatio,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react'
import { MdLocationOn, MdStar, MdOutlineDateRange } from 'react-icons/md'
import React, { useState } from 'react'
import Image from 'next/image'
import { SingleDatepicker } from 'chakra-dayzed-datepicker'
import { datePickerConfig } from 'utils/datePickerConfig'
import { router } from 'next/router'
import { BsChatRight } from 'react-icons/bs'

export default function ProductDescriptionRight() {
	const [startDate, setStartDate] = useState(new Date())
  const [selectedRate, setRate] = useState('1')

	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1,
			max: 6,
			precision: 0,
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	return (
		<>
			<Box>
				<Text textStyle="xl" as="h1">
					Laptop - HP Pavilion 1260
				</Text>
				<Text textStyle="xs" mt={2}>
					<MdLocationOn
						style={{
							color: '#ce0078',
							float: 'left',
							top: '2px',
							left: '-2px',
							position: 'relative',
							marginRight: '2px',
						}}
					/>{' '}
					Near Niketon
				</Text>
				<Flex mt={5}>
					<Box mr={2}>
						<Image
							src="/images/profile.png"
							alt="profile"
							width={40}
							height={40}
						/>
					</Box>

					<Box width={'100%'} mt={-1}>
						<Flex gap={2}>
							<Text
								cursor="pointer"
								onClick={() => {
									router.push('/vendor/1')
								}}
								textStyle="sm"
								fontWeight="bold"
							>
								XYZ Store
							</Text>
							<Button
								variant={`outline`}
								colorScheme="primary"
								size="xs"
								rightIcon={<BsChatRight />}
							>
								Chat Now
							</Button>
						</Flex>

						<Box textStyle="2xs">
							<Text as="span" display="inline-block">
								4.0
							</Text>{' '}
							<Text display="inline-block">
								<MdStar
									style={{
										color: '#ce0078',
										float: 'right',
										position: 'relative',
										top: '2px',
										fontSize: '16px',
									}}
								/>
							</Text>
						</Box>
					</Box>
				</Flex>
				<Text mt={4} fontSize="sm" color={`base.500`}>
					With an Intel Core i7 processor, this laptop delivers lightning-fast
					performance, enabling you to breeze through your daily tasks with
					ease.{' '}
				</Text>
				<Box
					width={'100%'}
					p={4}
					mt={4}
					className={productDetailStyles.actionBox}
				>
					<Flex gap={1}>
						<Text color={`primary.500`} fontSize={`sm`} mb={3}>
							Deposit: BDT 2000
						</Text>
					</Flex>
					<Text textStyle="md" mb={2}>
						Select Rate
					</Text>
					<RadioGroup onChange={setRate} value={selectedRate} colorScheme='primary' mb={3} size='sm'>
						<Stack direction="column">
							<Radio value="1">200/1 hour</Radio>
							<Radio value="2">500/1 Day</Radio>
							<Radio value="3">1000/1 Week</Radio>
							<Radio value="4">3000/1 Month</Radio>
						</Stack>
					</RadioGroup>
					<Text textStyle="md" mb={2}>
						Select Dates
					</Text>
					<Flex mb={4}>
						<Grid mr={2}>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									children={
										<MdOutlineDateRange
											style={{
												position: 'relative',
												top: '-6px',
												fontSize: '16px',
											}}
										/>
									}
								/>
								<SingleDatepicker
									name="start-date-input"
									date={startDate}
									placeholder={'start'}
									onDateChange={setStartDate}
									className={productDetailStyles.datePicker}
									propsConfigs={datePickerConfig}
								/>
							</InputGroup>
						</Grid>
						<Text as="span" marginTop={'4px'}>
							-
						</Text>
						<Grid ml={2}>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									children={
										<MdOutlineDateRange
											style={{
												position: 'relative',
												top: '-6px',
												fontSize: '16px',
											}}
										/>
									}
								/>
								<SingleDatepicker
									name="start-date-input"
									date={startDate}
									placeholder={'start'}
									onDateChange={setStartDate}
									className={productDetailStyles.datePicker}
									propsConfigs={datePickerConfig}
								/>
							</InputGroup>
						</Grid>
					</Flex>

					<Text textStyle="md" mb={2}>
						Select Quantity
					</Text>
					<HStack maxW="100%" gap="0">
						<Button size="xs" colorScheme={'primary'} borderRadius="0" {...dec}>
							-
						</Button>
						<Input
							size="xs"
							borderRadius="0"
							marginInlineStart="0"
							textAlign="center"
							w={`70px`}
							{...input}
						/>
						<Button
							size="xs"
							colorScheme={'primary'}
							borderRadius="0"
							marginInlineStart={'0'}
							{...inc}
						>
							+
						</Button>
						<Text textStyle="xs" width={'100%'}>
							Stock available: 2
						</Text>
					</HStack>

					<Button size="md" mt={5} width={'100%'} colorScheme="primary">
						Add to Cart
					</Button>
				</Box>
			</Box>
		</>
	)
}
