import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from '@chakra-ui/react'
import NextLink from 'next/link';
import { HiChevronRight } from 'react-icons/hi'

const BreadCrumb = ({ items }) => {
	return (
		<Breadcrumb
			spacing="8px"
			separator={<HiChevronRight color="#2D3748" />}
			fontSize={`2sm`}
		>
			{items.map((item, index) => (
				<BreadcrumbItem key={index} isCurrentPage={item?.isCurrentPage}>
					{!item?.isCurrentPage ? (
						<BreadcrumbLink
							as={NextLink}
							href={item?.link}
							_hover={{ textDecoration: 'none' }}
						>
							{item?.label}
						</BreadcrumbLink>
					) : (
						<BreadcrumbLink cursor={'auto'} _hover={{ textDecoration: 'none' }}>
							{item?.label}
						</BreadcrumbLink>
					)}
				</BreadcrumbItem>
			))}
		</Breadcrumb>
	)
}

export default BreadCrumb
