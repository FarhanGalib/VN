import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Divider,
} from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';

const BreadCrumb = () => {
	return (
		<>
			<Breadcrumb
				spacing="8px"
				separator={<HiChevronRight color="#2D3748" />}
				fontSize={`xs`}
			>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href="#">Search Result</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Divider borderColor={`#979797`} my={`15px`} />
		</>
	);
};

export default BreadCrumb;
