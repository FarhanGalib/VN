import { 
  Box, 
  Flex, 
  Grid,
  GridItem
} from '@chakra-ui/react'
import ProductDetailRight from 'components/product-detail/ProductDetailRight';
import ProductDetailLeft from 'components/product-detail/ProductDetailLeft';

export default function ProductDetailTopSection() {
  return (
    <>
      <Box mt={5}>
        <Flex gap={8} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} w="100%">
            <Grid w={{ base: '100%', sm: '100%', md: '45%', lg: '45%' }}>
                <ProductDetailLeft />
            </Grid>
            <Grid w={{ base: '100%', sm: '100%', md: '55%', lg: '55%' }}>
                <ProductDetailRight />
            </Grid>
        </Flex>
      </Box>
    </>
  );
}
