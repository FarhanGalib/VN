import { Box, Container, Flex } from '@chakra-ui/react'
import VDivider from 'components/common/VDivider'
import Products from 'components/search/Products'
import SearchPageHeader from 'components/search/SearchPageHeader'
import SideFilters from 'components/search/SideFilters'
import BreadCrumb from '../../components/common/BreadCrumb'

const search = () => {
	const breadCrumb = [
		{ label: 'Home', isCurrentPage: false, link: '/' },
		{ label: 'Search Result', isCurrentPage: true },
	]
	return (
		<Box mt={`12`}>
			<Container
				maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
			>
				<BreadCrumb items={breadCrumb} />
				<VDivider />
				<Flex direction={'row'} w={`100%`}>
					<Box
						w={`300px`}
						display={{
							base: 'none',
							sm: 'none',
							md: 'block',
						}}
					>
						<SideFilters />
					</Box>
					<Flex flexGrow={`1`} direction={`column`} gap={8}>
						<SearchPageHeader />
						<Products />
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default search
