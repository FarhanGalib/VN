import CartItems from 'components/cart/CartItems';
import CartTotals from 'components/cart/CartTotals'
import { 
    Container,
    Box,
    Flex,
    Grid
} from '@chakra-ui/react'
import AuthLayout from 'components/layout/AuthLayout'


export default function Cart() {
  return (
    <AuthLayout>
        <Container mt={10} maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}>
            <Box mt={5}>
                <Flex gap={8} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} w="100%">
                    <Grid w={{ base: '100%', sm: '100%', md: '70%', lg: '70%' }}>
                        <CartItems />
                    </Grid>
                    <Grid w={{ base: '100%', sm: '100%', md: '30%', lg: '30%' }}>
                        <CartTotals />
                    </Grid>
                </Flex>
            </Box>
        </Container>
    </AuthLayout>
  );
}
