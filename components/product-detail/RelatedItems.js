import { 
  Text, 
  Box, 
  Grid
} from '@chakra-ui/react'
import CardComponent from 'components/home/CardComponent'

export default function RelatedItems() {
  return (
    <>
      <Box mt={12}>
            <Grid templateColumns='repeat(1, 1fr)' gap={6}>
                <Grid w='100%'>
                    <Text textStyle={{ base: 'md', sm: 'md', md: 'md', lg: 'lg', xl: 'lg' }} as="h3">Related Items</Text>
                </Grid>
            </Grid>
            
            <Box mt={4}>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)' }} gap={4}>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </Grid>
            </Box>
      </Box>
    </>
  );
}
