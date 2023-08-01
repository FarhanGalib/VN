import checkoutStyles from 'styles/checkout.module.css';
import { 
  Box, 
  Text,
  Flex, 
  Input,
  Button,
  useNumberInput,
  Grid,
  RadioGroup,
  Radio,
  Stack,
  Checkbox
} from '@chakra-ui/react'
import React, { useState } from 'react';
import InputMask from "react-input-mask";

export default function ProductDescriptionRight() {
  return (
        <>
            <Box>
              <Box width={'100%'} p={4} mt={4} className={checkoutStyles.actionBox}>
                <Text textStyle="2sm" fontWeight="bold" mb={6}>YOUR BOOKING SUMMARY</Text>
                
                <Grid templateColumns={'repeat(2, 1fr)'} gap={8}>
                  <Grid w='100%'>
                      <Box>
                        <Text textStyle="sm" fontWeight="bold" mb={3}>ITEMS</Text>
                      </Box>
                  </Grid>
                  <Grid w='100%'>
                      <Box align="right">
                        <Text textStyle="sm" fontWeight="bold" mb={3}>SUBTOTAL</Text>
                      </Box>
                  </Grid>
                </Grid>
                <Grid templateColumns={'repeat(2, 1fr)'} gap={8}>
                  <Grid w='150%'>
                      <Box>
                          <Text textStyle="sm" fontWeight={'bold'} as="p" mt={3} color={'#323232'}>HP Laptop - Pavilion x360  x  1</Text>
                          <Text textStyle="xs" as="p" color={'#323232'}>BOOKED: 01 OCT 2023 08:00 PM - 02 OCT 2023 08:00 PM</Text>
                      </Box>
                  </Grid>
                  <Grid w='100%'>
                      <Box align="right">
                        <Text textStyle="sm" as="p" fontWeight="bold" mt={3} color={'#323232'}>BDT 500.00</Text>
                      </Box>
                  </Grid>
                </Grid>
                <Grid templateColumns={'repeat(2, 1fr)'} gap={8}>
                  <Grid w='150%'>
                      <Box>
                          <Text textStyle="sm" fontWeight={'bold'} as="p" mt={3} color={'#323232'}>HP Laptop - Pavilion x360  x  1</Text>
                          <Text textStyle="xs" as="p" color={'#323232'}>BOOKED: 01 OCT 2023 08:00 PM - 02 OCT 2023 08:00 PM</Text>
                      </Box>
                  </Grid>
                  <Grid w='100%'>
                      <Box align="right">
                        <Text textStyle="sm" as="p" fontWeight="bold" mt={3} color={'#323232'}>BDT 500.00</Text>
                      </Box>
                  </Grid>
                </Grid>
                <Grid templateColumns={'repeat(2, 1fr)'} gap={8} mt={4}>
                  <Grid w='150%'>
                      <Box>
                          <Text textStyle="sm" fontWeight={'bold'} as="p" mt={3} color={'#323232'}>DEPOSIT SUBTOTAL</Text>
                      </Box>
                  </Grid>
                  <Grid w='100%'>
                      <Box align="right">
                        <Text textStyle="sm" as="p" fontWeight="bold" mt={3} color={'#323232'}>BDT 5000.00</Text>
                      </Box>
                  </Grid>
                </Grid>
                <Grid templateColumns={'repeat(2, 1fr)'} gap={8} mt={4}>
                  <Grid w='150%'>
                      <Box>
                          <Text textStyle="sm" fontWeight={'bold'} as="p" color={'#323232'}>SHIPPING FEE</Text>
                      </Box>
                  </Grid>
                  <Grid w='100%'>
                      <Box align="right">
                        <Text textStyle="sm" as="p" fontWeight="bold" color={'#323232'}>BDT 100.00</Text>
                      </Box>
                  </Grid>
                </Grid>
                
                <hr style={{ border: '0.5px solid #ce0078', marginTop: 16}} />
                <Grid templateColumns={'repeat(2, 1fr)'} gap={8} mt={2}>
                  <Grid w='150%'>
                      <Box>
                          <Text textStyle="sm" fontWeight={'bold'} as="p" color={'#323232'}>GRAND TOTAL</Text>
                      </Box>
                  </Grid>
                  <Grid w='100%'>
                      <Box align="right">
                        <Text textStyle="sm" as="p" fontWeight="bold" color={'#323232'}>BDT 5600.00</Text>
                      </Box>
                  </Grid>
                </Grid>
                

                <hr style={{ border: '0.5px solid #ce0078', marginTop: 12}} />
                <hr style={{ border: '0.5px solid #ce0078', marginTop: 8}} />

                <RadioGroup defaultValue='1' colorScheme='primary' mt={4}>
                    <Stack>
                        <Radio value='1'>
                            Card
                        </Radio>
                        <Box>
                            <Flex templateColumns={'repeat(3, 1fr)'} direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }} gap={2} mb={2}>
                                <Grid w={{ base: '100%', sm: '100%', md: '100%', lg: '60%', xl: '60%' }}>
                                    <Box>
                                        <Input type='text' as={InputMask} mask="9999 9999 9999 9999" maskChar={null} placeholder='Card Number' />
                                    </Box>
                                </Grid>
                                <Grid w={{ base: '100%', sm: '100%', md: '100%', lg: '60%', xl: '60%' }}>
                                    <Box>
                                        <Input type='text' as={InputMask} mask="99/9999" maskChar={null} placeholder='MM/YYYY' />
                                    </Box>
                                </Grid>
                                <Grid w={{ base: '100%', sm: '100%', md: '100%', lg: '60%', xl: '60%' }}>
                                    <Box>
                                        <Input type='password' placeholder='CVC' />
                                    </Box>
                                </Grid>
                            </Flex>
                        </Box>
                        <Radio value='2'>PayPal</Radio>
                        <Box>
                            <Input type='text' value={''} placeholder='PayPal address' />
                        </Box>
                    </Stack>
                </RadioGroup>
                <Checkbox colorScheme='primary' mt={2} defaultChecked>
                  Save Payment Method for future transaction
                </Checkbox>

                <Button size='md' mt={4} width={'100%'} colorScheme='primary'>
                    Place Order
                </Button>

              </Box>
            </Box>
        </>
    );
}
