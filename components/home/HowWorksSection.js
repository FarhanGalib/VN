import homeStyles from 'styles/home.module.css';
import { 
  Container, 
  Text, 
  Box, 
  Grid,
  GridItem,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from '@chakra-ui/react'
import Image from 'next/image'

export default function SearchSuggestionSection() {
  return (
    <>
      <Box mt={12}>
        <Container maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}>
            <Text textStyle="lg" align={'center'} as="h3" mb={6}>How Varanin Works</Text>

            <Tabs colorScheme={'primary'}>
              <TabList>
                <Tab>Owner</Tab>
                <Tab>Renter</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0}>
                  <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)' }} gap={8}>
                      <GridItem w='100%'>
                          <Box mt={{ base: 4, sm: 4, md: 6, lg: 10, xl: 10 }}>
                              <Box className={homeStyles.howWorksVector}>
                                  <Image src='/images/sign-up-vector.svg' alt='sign-up' width={40} height={40} />
                              </Box>
                              <Text textStyle="2md" as="p" mt={3} color={'#323232'}>Sign up</Text>
                              <Text textStyle="sm" as="p" mt={3} color={'#323232'}>Signing up and getting verified on Varanin takes less than a couple minutes. You will be up and running in no time.</Text>
                          </Box>
                      </GridItem>
                      <GridItem w='100%'>
                          <Box mt={{ base: 4, sm: 4, md: 6, lg: 10, xl: 10 }}>
                              <Box className={homeStyles.howWorksVector}>
                                  <Image src='/images/list-vector.svg' alt='list' width={40} height={40} />
                              </Box>
                              <Text textStyle="2md" as="p" mt={3} color={'#323232'}>List your stuff</Text>
                              <Text textStyle="sm" as="p" mt={3} color={'#323232'}>Snap a pic, set a price, and write a couple lines! Set a deposit if you fancy and remember to read our Lender Protection Guarantee and get covered upto S$1,000 for any damages.</Text>
                              <Text textStyle="sm" as="p" mt={3} color={'#323232'}>Varanin does not charge any fee to list or to rent out items.</Text>
                          </Box>
                      </GridItem>
                      <GridItem w='100%'>
                          <Box mt={{ base: 4, sm: 4, md: 6, lg: 10, xl: 10 }}>
                              <Box className={homeStyles.howWorksVector}>
                                  <Image src='/images/accept-offer-vector.svg' alt='accept-offer' width={40} height={40} />
                              </Box>
                              <Text textStyle="2md" as="p" mt={3} color={'#323232'}>Accept offer</Text>
                              <Text textStyle="sm" as="p" mt={3} color={'#323232'}>Accept rental offers if they work for you. Make sure to be courteous in your messages to keep your borrowers coming back for more.</Text>
                          </Box>
                      </GridItem>
                      <GridItem w='100%'>
                          <Box mt={{ base: 4, sm: 4, md: 6, lg: 10, xl: 10 }}>
                              <Box className={homeStyles.howWorksVector}>
                                  <Image src='/images/paid-vector.svg' alt='paid' width={40} height={40} />
                              </Box>
                              <Text textStyle="2md" as="p" mt={3} color={'#323232'}>Lend and get paid</Text>
                              <Text textStyle="sm" as="p" mt={3} color={'#323232'}>Scheduled a time that’s mutually convenient to lend and to re-collect your items. Rental payment will be in your bank account right after the rental ends.</Text>
                          </Box>
                      </GridItem>
                  </Grid>
                </TabPanel>
                <TabPanel p={0}>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)' }} gap={8}>
                      <GridItem w='100%'>
                          <Box mt={{ base: 4, sm: 4, md: 6, lg: 10, xl: 10 }}>
                              <Box className={homeStyles.howWorksVector}>
                                  <Image src='/images/sign-up-vector.svg' alt='sign-up' width={40} height={40} />
                              </Box>
                              <Text textStyle="2md" as="p" mt={3} color={'#323232'}>Sign up RENTER</Text>
                              <Text textStyle="sm" as="p" mt={3} color={'#323232'}>Signing up and getting verified on Varanin takes less than a couple minutes. You will be up and running in no time.</Text>
                          </Box>
                      </GridItem>
                      <GridItem w='100%'>
                          <Box mt={{ base: 4, sm: 4, md: 6, lg: 10, xl: 10 }}>
                              <Box className={homeStyles.howWorksVector}>
                                  <Image src='/images/list-vector.svg' alt='list' width={40} height={40} />
                              </Box>
                              <Text textStyle="2md" as="p" mt={3} color={'#323232'}>List your stuff</Text>
                              <Text textStyle="sm" as="p" mt={3} color={'#323232'}>Snap a pic, set a price, and write a couple lines! Set a deposit if you fancy and remember to read our Lender Protection Guarantee and get covered upto S$1,000 for any damages.</Text>
                              <Text textStyle="sm" as="p" mt={3} color={'#323232'}>Varanin does not charge any fee to list or to rent out items.</Text>
                          </Box>
                      </GridItem>
                      <GridItem w='100%'>
                          <Box mt={{ base: 4, sm: 4, md: 6, lg: 10, xl: 10 }}>
                              <Box className={homeStyles.howWorksVector}>
                                  <Image src='/images/accept-offer-vector.svg' alt='accept-offer' width={40} height={40} />
                              </Box>
                              <Text textStyle="2md" as="p" mt={3} color={'#323232'}>Accept offer</Text>
                              <Text textStyle="sm" as="p" mt={3} color={'#323232'}>Accept rental offers if they work for you. Make sure to be courteous in your messages to keep your borrowers coming back for more.</Text>
                          </Box>
                      </GridItem>
                      <GridItem w='100%'>
                          <Box mt={{ base: 4, sm: 4, md: 6, lg: 10, xl: 10 }}>
                              <Box className={homeStyles.howWorksVector}>
                                  <Image src='/images/paid-vector.svg' alt='paid' width={40} height={40} />
                              </Box>
                              <Text textStyle="2md" as="p" mt={3} color={'#323232'}>Lend and get paid</Text>
                              <Text textStyle="sm" as="p" mt={3} color={'#323232'}>Scheduled a time that’s mutually convenient to lend and to re-collect your items. Rental payment will be in your bank account right after the rental ends.</Text>
                          </Box>
                      </GridItem>
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
        </Container>
      </Box>
    </>
  );
}
