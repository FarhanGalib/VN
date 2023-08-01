import productDetailStyles from 'styles/productDetail.module.css';
import { 
  Box,
  Text,
  Button
} from '@chakra-ui/react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import "node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import React, { useState } from 'react';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

export default function ProductDetailLeft() {

  const defaultHeight = 220;
  const [descriptionHeight, setDescriptionHeight] = useState(defaultHeight);
  const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);

  const collapseButton = () => {
    setDescriptionCollapsed(!descriptionCollapsed);
    setDescriptionHeight(descriptionCollapsed ? defaultHeight : 'auto')
  };

  return (
        <>
            <Box>
                <ImageGallery items={images} showPlayButton={false} infinite={true} showBullets={false} showNav={false} />
                <Text mt={10} textStyle='2sm' fontWeight='bold' as="h3">Product Description</Text>
                <hr style={{ border: '0.5px solid #EFEFEF', marginTop: 6, marginBottom: 6}} />
                <Text className={descriptionCollapsed ? productDetailStyles.descriptionCollapsed : productDetailStyles.descriptionOpen} textStyle="sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Box mt={2} align="center">
                  <Button align="center" onClick={collapseButton} className={descriptionCollapsed ? productDetailStyles.descriptionButtonCollapsed : productDetailStyles.descriptionButtonOpen} rightIcon={descriptionCollapsed ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />} size='sm' colorScheme='primary' variant='outline'>
                    {descriptionCollapsed ? 'View More' : 'View Less'}
                  </Button>
                </Box>
            </Box>
        </>
    );
}
