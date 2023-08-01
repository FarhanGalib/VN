import ProductDetailTopSection from 'components/product-detail/ProductDetailTopSection'
import ProductDetailReviews from 'components/product-detail/ProductDetailReviews'
import RelatedItems from 'components/product-detail/RelatedItems'
import { 
    Container
} from '@chakra-ui/react'
import BreadCrumb from 'components/common/BreadCrumb';

export default function ProductDetail() {
  const breadCrumb = [
		{ label: 'Home', isCurrentPage: false, link: '/' },
		{ label: 'Search Results', isCurrentPage: true, link: '/search' },
		{ label: 'Laptop', isCurrentPage: true },
	];

  return (
    <>
        <Container mt={10} maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}>
            <BreadCrumb items={breadCrumb}/>
            <ProductDetailTopSection />
            <ProductDetailReviews />
            <RelatedItems />
        </Container>
    </>
  );
}
