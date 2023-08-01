import { 
  Box, 
  Text,
  Flex, 
  Button,
  Grid,
  GridItem,
  Progress,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from '@chakra-ui/react'
import { MdStar } from "react-icons/md";

export default function ProductDetailReviews() {
  return (
        <>
            <Box mt={10}>
                <Flex gap={10} direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }} w="100%">
                    <Grid w={{ base: '100%', sm: '100%', md: '80%', lg: '40%' }}>
                        <Text textStyle="md" as="p" mb={1}>Owner Review</Text>
                        <Box mt={2}>
                            <Flex gap={5} mb={4}>
                                <GridItem w='38%'>
                                    <Text textStyle="xl" as="span">5.0 <Text textStyle="lg" color={'#D9D9D9'} as="span">/5.0</Text></Text>
                                    
                                    <Box mt={3}>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '26px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '26px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '26px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '26px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '26px'}} />
                                        <Text textStyle="sm" marginTop={'-6px'}>3 Review</Text>
                                        <Button h='2rem' mt={2} size='sm' colorScheme='primary'>
                                            Add Review
                                        </Button>
                                    </Box>
                                </GridItem>
                                <GridItem w='25%' mt={2}>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                    </Box>
                                </GridItem>
                                <GridItem w='25%' mt={2}>
                                    <Box mt={1}>
                                        <Progress colorScheme={'primary'} value={80} mb={3} />
                                        <Progress colorScheme={'primary'} value={70} mb={3} />
                                        <Progress colorScheme={'primary'} value={50} mb={3} />
                                        <Progress colorScheme={'primary'} value={20} mb={3} />
                                        <Progress colorScheme={'primary'} value={10} />
                                    </Box>
                                </GridItem>
                            </Flex>
                        </Box>
                    </Grid>
                    <Grid w={{ base: '100%', sm: '100%', md: '80%', lg: '40%' }}>
                    <Text textStyle="md" as="p" mb={1}>Item Review</Text>
                        <Box mt={2}>
                        <Flex gap={5} mb={4}>
                                <GridItem w='38%'>
                                    <Text textStyle="xl" as="span">5.0 <Text textStyle="lg" color={'#D9D9D9'} as="span">/5.0</Text></Text>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '26px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '26px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '26px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '26px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '26px'}} />
                                        <Text textStyle="sm" marginTop='-6px'>3 Review</Text>
                                    </Box>
                                </GridItem>
                                <GridItem w='25%' mt={2}>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                    </Box>
                                </GridItem>
                                <GridItem w='25%' mt={2}>
                                    <Box mt={1}>
                                        <Progress colorScheme={'primary'} value={80} mb={3} />
                                        <Progress colorScheme={'primary'} value={70} mb={3} />
                                        <Progress colorScheme={'primary'} value={50} mb={3} />
                                        <Progress colorScheme={'primary'} value={20} mb={3} />
                                        <Progress colorScheme={'primary'} value={10} />
                                    </Box>
                                </GridItem>
                            </Flex>
                        </Box>
                    </Grid>
                </Flex>
                <Tabs colorScheme={'primary'}>
                    <TabList>
                        <Tab>Owner</Tab>
                        <Tab>Item</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel p={0}>
                            <Grid mt={5} templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(2, 1fr)' }} gap={8}>
                                <GridItem w={{ base: '100%', sm: '100%', md: '150%', lg: '150%' }}>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Text textStyle="sm" fontWeight={'bold'} as="span">USER 001</Text>
                                    <Text textStyle="xs" as="span" ml={2}>06 NOV 2023</Text>
                                    <Text textStyle="sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </Text>
                                    <hr style={{ marginTop: 10, marginBottom: 10}} />
                                </GridItem>
                            </Grid>
                            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(2, 1fr)' }} gap={8}>
                                <GridItem w={{ base: '100%', sm: '100%', md: '150%', lg: '150%' }}>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Text position={'relative'} textStyle="sm" fontWeight={'bold'} as="span">USER 002</Text>
                                    <Text textStyle="xs" as="span" ml={2}>06 NOV 2023</Text>
                                    <hr style={{ marginTop: 10, marginBottom: 10}} />
                                </GridItem>
                            </Grid>
                            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(2, 1fr)' }} gap={8}>
                                <GridItem w={{ base: '100%', sm: '100%', md: '150%', lg: '150%' }}>
                                    <Box>
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', marginLeft: '-2px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                        <MdStar style={{color: '#ce0078', display: 'inline-block', position: 'relative', marginRight: '3px', fontSize: '16px'}} />
                                    </Box>
                                    <Text textStyle="sm" fontWeight={'bold'} as="span">USER 002</Text>
                                    <Text textStyle="xs" as="span" ml={2}>06 NOV 2023</Text>
                                    <Text textStyle="sm">I rented this item for the winter. It served me well. Gonna rent again next winter. The item was clean and had been washed thoroughly.</Text>
                                </GridItem>
                            </Grid>
                        </TabPanel>
                        <TabPanel p={0}>
                            Item Review Section
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
}
