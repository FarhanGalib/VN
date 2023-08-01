import { 
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { MdStar } from "react-icons/md";

export default function VendorProfileReviews() {
  return (
        <>
            <Tabs colorScheme={'primary'}>
                <TabList>
                    <Tab>As a Vendor</Tab>
                    <Tab>As a Renter</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel p={0}>
                        <Grid mt={5} gap={8}>
                            <GridItem>
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
                        <Grid>
                            <GridItem>
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
                        <Grid>
                            <GridItem>
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
                        Renter Review Section
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}
