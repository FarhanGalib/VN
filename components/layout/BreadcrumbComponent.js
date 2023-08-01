import homeStyles from 'styles/home.module.css';
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink
} from '@chakra-ui/react'
import { MdChevronRight } from "react-icons/md";

export default function BreadcrumbComponent() {
  return (
    <>
      <Breadcrumb spacing='8px' separator={<MdChevronRight color='gray.500' />}>
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Search Results</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Laptop</BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
    </>
  );
}
