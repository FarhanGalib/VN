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

export default function CartTotals() {
  return (
        <>
            <Box>
              <Box width={'100%'} p={4} mt={4} className={checkoutStyles.actionBox}>
                <Grid templateColumns={'repeat(2, 1fr)'} gap={8}>
                  <Grid w='150%'>
                      <Box>
                          <Text textStyle="sm" fontWeight={'bold'} as="p" mt={3} color={'#323232'}>SUBTOTAL</Text>
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
                <Grid templateColumns={'repeat(2, 1fr)'} gap={8} mt={4}>
                  <Grid w='150%'>
                      <Box>
                          <Text textStyle="sm" fontWeight={'bold'} as="p" color={'#323232'}>TAX</Text>
                      </Box>
                  </Grid>
                  <Grid w='100%'>
                      <Box align="right">
                        <Text textStyle="sm" as="p" fontWeight="bold" color={'#323232'}>BDT 30.00</Text>
                      </Box>
                  </Grid>
                </Grid>
                
                <hr style={{ border: '0.5px solid #ce0078', marginTop: 16}} />
                <Grid templateColumns={'repeat(2, 1fr)'} gap={8} mt={2}>
                  <Grid w='150%'>
                      <Box>
                          <Text textStyle="sm" fontWeight={'bold'} as="p" color={'#323232'}>TOTAL</Text>
                      </Box>
                  </Grid>
                  <Grid w='100%'>
                      <Box align="right">
                        <Text textStyle="sm" as="p" fontWeight="bold" color={'#323232'}>BDT 5130.00</Text>
                      </Box>
                  </Grid>
                </Grid>
                

                <hr style={{ border: '0.5px solid #ce0078', marginTop: 12}} />

                <Button size='md' mt={4} width={'100%'} colorScheme='primary'>
                    Proceed to Checkout
                </Button>

              </Box>
            </Box>
        </>
    );
}
