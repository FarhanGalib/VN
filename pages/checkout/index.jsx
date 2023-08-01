import CheckoutBillingForm from 'components/checkout/CheckoutBillingForm'
import CheckoutInfoWithPayment from 'components/checkout/CheckoutInfoWithPayment'
import { 
    Container,
    Box,
    Flex,
    Grid
} from '@chakra-ui/react'
import AuthLayout from 'components/layout/AuthLayout'


export default function Checkout() {
  return (
    <AuthLayout>
        <Container mt={10} maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}>
            <Box mt={5}>
                <Flex gap={8} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} w="100%">
                    <Grid w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}>
                        <CheckoutBillingForm />
                    </Grid>
                    <Grid w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}>
                        <CheckoutInfoWithPayment />
                    </Grid>
                </Flex>
            </Box>
        </Container>
    </AuthLayout>
  );
}
