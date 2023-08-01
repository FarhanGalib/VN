import { Box, Container } from '@chakra-ui/react'
import BreadCrumb from 'components/common/BreadCrumb'
import CategoryHeader from 'components/category/CategoryHeader'
import Categories from 'components/category/Categories'

const category = () => {
	const breadCrumb = [
		{ label: 'Home', isCurrentPage: false, link: '/' },
		{ label: 'All Category', isCurrentPage: true },
	]
	return (
		<Box mt={`8`}>
			<Container
				maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
			>
				<BreadCrumb items={breadCrumb} />
				<CategoryHeader />
				<Categories />
				<Categories />
			</Container>
		</Box>
	)
}

export default category
