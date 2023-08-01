import homeStyles from 'styles/home.module.css';
import { 
  Container, 
  Text, 
  Box, 
  Grid,
  GridItem,
  Button
} from '@chakra-ui/react'
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from 'next/image'
import CardComponent from 'components/home/CardComponent'
import {router} from 'next/router';

export default function SearchSuggestionSection() {
  return (
    <>
      <Box mt={12}>
        <Container maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='150%'>
                    <Text textStyle={{ base: 'md', sm: 'md', md: 'md', lg: 'lg', xl: 'lg' }} as="h3">Get your barbecue on!</Text>
                </GridItem>
                <GridItem w='100%' align='right'>
                    <Button onClick={()=>{router.push('/search')}}  rightIcon={<HiOutlineArrowRight />} size='sm' colorScheme='primary' variant='outline'>
                    View More
                    </Button>
                </GridItem>
            </Grid>
            
            <Box mt={4}>
                <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)' }} gap={6}>
                    <GridItem w='100%'>
                        <Box className={`${homeStyles.cardBox} ${homeStyles.cardBoxBarbecue}`} p={3} align={'center'}>
                            <Image src='/images/barbecue.png' alt='barbecue' width={410} height={300} />
                        </Box>
                    </GridItem>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </Grid>
            </Box>
        </Container>
      </Box>
    </>
  );
}
