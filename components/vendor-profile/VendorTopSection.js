import vendorProfileStyles from 'styles/vendorProfile.module.css';
import { 
    Box, 
    Flex, 
    Grid,
    Text,
    Button
  } from '@chakra-ui/react'
  import Image from 'next/image'
  import { HiCheckCircle } from "react-icons/hi";
  import { BsChatRight, BsFlagFill } from "react-icons/bs";
  
  
  export default function ProductDetailTopSection() {
    return (
      <>
        <hr style={{ marginTop: 10 }} />
        <Box mt={5}>
            <Box width="100%" height={{ base: '100px', sm: '150px', md: '300px', lg: '300px' }} position="relative">
                <Image src='/images/banner-profile.jpg' alt='barbecue' layout='fill' objectFit='contain' />
            </Box>
            <Box ml={{ base: 0, sm: 5, md: 5, lg: 12, xl: 12 }} position="relative">
                <Flex gap={8} direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' }} w="100%">
                    <Grid w={{ base: '100%', sm: '30%', md: '20%', lg: '15%', xl: '12%' }}>
                        <Box className={vendorProfileStyles.imageBox}>
                            <Image style={{borderRadius: 8}} src='/images/profile-image.jpg' alt='barbecue' width="150" height="120" />
                        </Box>
                    </Grid>
                    <Grid w={{ base: '100%', sm: '70%', md: '80%', lg: '85%', xl: '88%' }}>
                        <Flex gap={4} direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' }} w="100%">
                            <Grid>
                                <Text mt={{ base: 10, sm: 0, md: 2, lg: 3 }} textAlign={{ base: "center", sm: "left", md: "left", lg: "left" }} textStyle={{ base: 'md', sm: 'md', md: 'md', lg: 'lg' }} fontWeight='bold' as="h1">Xyz Store</Text>
                                <Text textStyle='xs' textAlign={{ base: "center", sm: "left", md: "left", lg: "left" }}><HiCheckCircle style={{color: '#ce0078', marginTop: 5, display: 'inline-block', position: 'relative', marginLeft: '-2px', top: 4, fontSize:"16"}} /> Verified User</Text>
                            </Grid>
                            <Grid mt={{ base: 0, sm: 0, md: 2, lg: 4 }}>
                                <Button rightIcon={<BsChatRight style={{ display: 'inline-block', position: 'relative', top: 0}} />} size='xs' colorScheme='primary' variant='outline'>Chat Now</Button>
                            </Grid>
                            <Grid mt={{ base: 0, sm: 0, md: 2, lg: 4 }}>
                                <Button rightIcon={<BsFlagFill style={{ display: 'inline-block', position: 'relative', top: 0}} />} size='xs' colorScheme='primary' variant='outline'>Report</Button>
                            </Grid>
                        </Flex>
                    </Grid>
                </Flex>
            </Box>
        </Box>

      </>
    );
  }
  