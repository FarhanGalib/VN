import VendorTopSection from 'components/vendor-profile/VendorTopSection'
import VendorProfileLeftSidebar from 'components/vendor-profile/VendorProfileLeftSidebar'
import VendorListedItems from 'components/vendor-profile/VendorListedItems'
import { 
    Container,
    Box, 
    Flex, 
    Grid
} from '@chakra-ui/react'
import BreadCrumb from 'components/common/BreadCrumb';

export default function Home() {
  const breadCrumb = [
		{ label: 'Home', isCurrentPage: false, link: '/' },
		{ label: 'Profile', isCurrentPage: false, link: '/profile' },
		{ label: 'Xyz Store', isCurrentPage: true },
	];

  return (
    <>
        <Container mt={10} maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}>
            <BreadCrumb items={breadCrumb}/>
            <VendorTopSection />
            <Box mt={5}>
                <Flex gap={8} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} w="100%">
                    <Grid w={{ base: '100%', sm: '100%', md: '30%', lg: '30%' }}>
                        <VendorProfileLeftSidebar />
                    </Grid>
                    <Grid w={{ base: '100%', sm: '100%', md: '70%', lg: '70%' }}>
                        <VendorListedItems />
                    </Grid>
                </Flex>
            </Box>
        </Container>
    </>
  );
}
