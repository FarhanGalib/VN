import homeStyles from 'styles/home.module.css';
import { 
  Container, 
  Text, 
  Box, 
  Flex, 
  Input,
  GridItem,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  IconButton
} from '@chakra-ui/react'
import { MdLocationOn } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import {router} from 'next/router';




export default function HeroSection() {
  return (
    <>
      <Box className={homeStyles.banner}>
        <Container maxW={{ base: 'container.md', md: 'container.md', lg: 'container.md' }}>
          <Text textStyle="xl" as="h1" align={'center'} color="white">If you own it, you can rent it!</Text>
          <Text textStyle="sm" as="p" mt={3} align={'center'} color="white" className={homeStyles.metaText}>Offer your extra cameras, bikes, camping equipments on Varanin. Don’t work for stuffs. Make your stuffs work for you.</Text>
          <Box className={homeStyles.searchBox} mt={8}>
            <Flex gap={3} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} w="100%">
              <GridItem w={{ base: '100%', sm: '100%', md: '30%', lg: '30%' }}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<MdLocationOn style={{color: '#D9D9D9'}} />}
                  />
                  <Input type='text' placeholder='Location' fontSize={'sm'} />
                </InputGroup>
              </GridItem>
              <GridItem w={{ base: '100%', sm: '100%', md: '70%', lg: '70%' }}>
                <InputGroup size='md'>
                  <Input
                    pr={{base: '3rem', md: '6.2rem'}}
                    type={'text'}
                    fontSize={'sm'}
                    placeholder='Search for camera, drones, equipments, etc.'
                  />
                  <InputRightElement width='6.1rem' display={{base: "none", md: 'flex'}}>
                    <Button onClick={()=>{router.push('/search')}} leftIcon={<VscSearch style={{color: '#ffffff', fontSize: 16}} />} h='2rem' size='sm' colorScheme='primary'>
                      Search
                    </Button>
                  </InputRightElement>
                  <InputRightElement display={{base: "flex", md: 'none'}}>
                    <IconButton onClick={()=>{router.push('/search')}} icon={<VscSearch style={{color: '#ffffff', fontSize: 16}} />} h='2rem' size='sm' colorScheme='primary'/>
                  </InputRightElement>
                </InputGroup>
               
              </GridItem>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}
