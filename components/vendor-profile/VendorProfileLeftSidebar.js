import vendorProfileStyles from 'styles/vendorProfile.module.css';
import { 
  Box,
  Text,
  Button
} from '@chakra-ui/react'
import { HiPhone, HiOutlineChevronUp, HiOutlineChevronDown, HiMail } from "react-icons/hi";
import VendorProfileReviews from 'components/vendor-profile/VendorProfileReviews';
import Image from 'next/image'
import React, { useState } from 'react';

export default function VendorProfileLeftSidebar() {

  const defaultHeight = 150;
  const [descriptionHeight, setDescriptionHeight] = useState(defaultHeight);
  const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);

  const collapseButton = () => {
    setDescriptionCollapsed(!descriptionCollapsed);
    setDescriptionHeight(descriptionCollapsed ? defaultHeight : 'auto')
  };

  return (
        <>
            <Box mt={4}>
                <Text textStyle='md' mb={1} fontWeight='bold' as="p"><HiPhone style={{ color: '#ce0078', display: 'inline-flex', top: 2, position: 'relative'}} /> 01982XXXXXX</Text>
                <Text textStyle='md' fontWeight='bold' as="p"><HiMail style={{ color: '#ce0078', display: 'inline-flex', top: 6, position: 'relative', fontSize: 24}} /> Send Mail</Text>
                <Box mt={6}>
                    <Text textStyle='md' mb={1} fontWeight='bold' as="p">Address</Text>
                    <Text textStyle='sm' as="p">humayun road, block # c, mohammadpur, Dhaka, 1207</Text>
                    <Box width="100%" height="180px" position="relative">
                        <Image src='/images/map.jpg' alt='barbecue' layout='fill' objectFit='contain' />
                    </Box>
                </Box>

                <Box mt={6}>
                    <Text textStyle='md' mt={6} mb={2} fontWeight='bold' as="p">About</Text>
                    <Text className={descriptionCollapsed ? vendorProfileStyles.descriptionCollapsed : vendorProfileStyles.descriptionOpen} textStyle="sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <Box mt={2} align="center">
                    <Button align="center" onClick={collapseButton} className={descriptionCollapsed ? vendorProfileStyles.descriptionButtonCollapsed : vendorProfileStyles.descriptionButtonOpen} rightIcon={descriptionCollapsed ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />} size='sm' colorScheme='primary' variant='outline'>
                        {descriptionCollapsed ? 'See more' : 'See less'}
                    </Button>
                    </Box>
                </Box>
                <Box mt={4}>
                    <VendorProfileReviews/>
                </Box>
            </Box>
        </>
    );
}
