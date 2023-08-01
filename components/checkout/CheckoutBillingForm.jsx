import { 
    Box, 
    Text,
    Flex,
    Grid,
    Input,
    FormControl,
    FormLabel
} from '@chakra-ui/react';
const CheckoutBillingForm = () => {

    return (
		<>
			<Box>
                <Text mt={8} mb={2} textStyle='md' fontWeight='bold' as="h3">Billing Details</Text>
                <Flex gap={6} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
                    <Grid w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }} mt={5}>
                        <Box>
                            <FormControl isRequired>
                                <FormLabel fontSize={'16'} mb={1}>First Name</FormLabel>
                                <Input type='text' value={''} />
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }} mt={{ base: 0, sm: 0, md: 5, lg: 5 }}>
                        <Box>
                            <FormControl isRequired>
                                <FormLabel fontSize={'16'} mb={1}>Last Name</FormLabel>
                                <Input type='text' value={''} />
                            </FormControl>
                        </Box>
                    </Grid>
                </Flex>

                <Flex gap={6}>
                    <Grid w='100%' mt={5}>
                        <Box>
                            <Text mb={0} textStyle='sm' as="p">Country/ Region*</Text>
                            <Text fontWeight={'bold'} textStyle='sm' as="p">Bangladesh</Text>
                        </Box>
                    </Grid>
                </Flex>
                
                <Flex gap={6}>
                    <Grid w='100%'>
                        <Box mt={5}>
                            <FormControl isRequired>
                                <FormLabel fontSize={'16'} mb={1}>Street Address</FormLabel>
                                <Input type='text' value={''} />
                            </FormControl>
                        </Box>
                        <Box mt={5}>
                            <FormControl isRequired>
                                <FormLabel fontSize={'16'} mb={1}>Town/City</FormLabel>
                                <Input type='text' value={''} />
                            </FormControl>
                        </Box>
                        <Box mt={5}>
                            <FormControl isRequired>
                                <FormLabel fontSize={'16'} mb={1}>District</FormLabel>
                                <Input type='text' value={''} />
                            </FormControl>
                        </Box>
                        <Box mt={5}>
                            <FormControl isRequired>
                                <FormLabel fontSize={'16'} mb={1}>Postal Code</FormLabel>
                                <Input type='text' value={''} />
                            </FormControl>
                        </Box>
                        <Box mt={5}>
                            <FormControl isRequired>
                                <FormLabel fontSize={'16'} mb={1}>Billing Mobile Number</FormLabel>
                                <Input type='text' value={''} />
                            </FormControl>
                        </Box>
                        <Box mt={5}>
                            <FormControl>
                                <FormLabel fontSize={'16'} mb={1}>Mobile Number (Secondary)</FormLabel>
                                <Input type='text' value={''} />
                            </FormControl>
                        </Box>
                        <Box mt={5}>
                            <FormControl isRequired>
                                <FormLabel fontSize={'16'} mb={1}>Billing Email</FormLabel>
                                <Input type='text' value={''} />
                            </FormControl>
                        </Box>
                    </Grid>
                </Flex>
            </Box>
		</>
	);
};

export default CheckoutBillingForm;
