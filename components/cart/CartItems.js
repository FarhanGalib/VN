import { 
    Box, 
    Text,
    Flex,
    Grid,
    Input,
    FormControl,
    FormLabel,
    HStack,
    Button,
    useNumberInput
} from '@chakra-ui/react';
import Image from 'next/image'

const CheckoutBillingForm = () => {

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
                <Text mt={8} mb={2} textStyle='lg' fontWeight='bold' as="h3">Your Cart (2 Items)</Text>

                <Box width={'100%'} mt={4}>
                    <Grid templateColumns={'repeat(2, 1fr)'} gap={8} mt={2}>
                        <Grid w='150%'>
                            <Box>
                                <Text textStyle="sm" fontWeight={'bold'} as="p" color={'#323232'}>Product</Text>
                            </Box>
                        </Grid>
                        <Grid w='100%'>
                            <Box align="right">
                                <Text textStyle="sm" as="p" fontWeight="bold" color={'#323232'}>Total</Text>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    <hr style={{ border: '0.5px solid #ce0078', marginTop: 5}} />
                    
                    <Grid templateColumns={'repeat(2, 1fr)'} gap={8} mt={2}>
                        <Grid w='150%'>
                            <Flex width={'100%'}>
                                <Grid>
                                    <Image src='/images/laptop.png' alt='trending-now' width={80} height={100} />
                                </Grid>
                                <Grid ml={6}>
                                    <Text textStyle="sm" fontWeight={'bold'} as="p" color={'#323232'}><a href={'#'}>HP Laptop - Pavilion x360</a></Text>
                                    <Text textStyle="xs" as="p" color={'#323232'}>BOOKED: 01 OCT 2023 08:00 PM - 02 OCT 2023 08:00 PM</Text>
                                    <HStack maxW="100%" gap="0" mt={2}>
                                        <Button size="xs" colorScheme={'primary'} borderRadius="0" {...dec}>
                                            -
                                        </Button>
                                        <Input
                                            size="xs"
                                            borderRadius="0"
                                            marginInlineStart="0"
                                            textAlign="center"
                                            w={`50px`}
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
                                    </HStack>
                                    <Text mt={2} textStyle="xs" as="p" color={'#E53E3E'}><a href={"#"}>Remove Item</a></Text>
                                </Grid>
                            </Flex>
                        </Grid>
                        <Grid w='100%'>
                            <Box align="right">
                                <Text textStyle="sm" as="p" fontWeight="bold" color={'#323232'}>BDT 50.00</Text>
                            </Box>
                        </Grid>
                    </Grid>

                    <hr style={{ border: '0.5px solid #8B96A5', marginTop: 10}} />

                    <Grid templateColumns={'repeat(2, 1fr)'} gap={8} mt={2}>
                        <Grid w='150%'>
                            <Flex width={'100%'}>
                                <Grid>
                                    <Image src='/images/laptop.png' alt='trending-now' width={80} height={100} />
                                </Grid>
                                <Grid ml={6}>
                                    <Text textStyle="sm" fontWeight={'bold'} as="p" color={'#323232'}><a href={'#'}>Canon 5D Camera</a></Text>
                                    <Text textStyle="xs" as="p" color={'#323232'}>BOOKED: 01 OCT 2023 08:00 PM - 02 OCT 2023 08:00 PM</Text>
                                    <HStack maxW="100%" gap="0" mt={2}>
                                        <Button size="xs" colorScheme={'primary'} borderRadius="0" {...dec}>
                                            -
                                        </Button>
                                        <Input
                                            size="xs"
                                            borderRadius="0"
                                            marginInlineStart="0"
                                            textAlign="center"
                                            w={`50px`}
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
                                    </HStack>
                                    <Text mt={2} textStyle="xs" as="p" color={'#E53E3E'}><a href={"#"}>Remove Item</a></Text>
                                </Grid>
                            </Flex>
                        </Grid>
                        <Grid w='100%'>
                            <Box align="right">
                                <Text textStyle="sm" as="p" fontWeight="bold" color={'#323232'}>BDT 100.00</Text>
                            </Box>
                        </Grid>
                    </Grid>

                    <hr style={{ border: '0.5px solid #8B96A5', marginTop: 10}} />
                </Box>
            </Box>
		</>
	);
};

export default CheckoutBillingForm;
