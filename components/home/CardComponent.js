import homeStyles from 'styles/home.module.css';
import { 
  Text, 
  Box, 
  Flex, 
  Grid
} from '@chakra-ui/react'
import { HiOutlineHeart } from "react-icons/hi";
import Image from 'next/image'
import { MdLocationOn, MdStar } from "react-icons/md";
import Link from 'next/link'
import { IoMdShareAlt } from "react-icons/io";

export default function CardComponent() {
  return (
    <>
        <Grid w='100%'>
            <Box className={homeStyles.cardBox} p={3} _hover={{ backgroundColor: '#ffe8f5'}}>
                <Flex gap={3} mb={4}>
                    <Grid w='80%'>
                        <Link href="/products/1">
                            <Flex>
                                <Box mr={2}>
                                    <Image src='/images/profile.png' alt='profile' width={50} height={50} />
                                </Box>
                                <Box width={'100%'} mt={-1}>
                                    <Text textStyle="sm" fontWeight={'bold'}>XYZ Store</Text>
                                    <Text textStyle="xs"><MdLocationOn style={{color: '#ce0078', float: 'left', top: '2px', left: '-2px', position: 'relative', marginRight: '2px'}} /> Near Niketon</Text>
                                </Box>
                            </Flex>
                        </Link>
                    </Grid>
                    <Grid w='20%' align={'right'} mt={2}>
                        <Text textStyle="2xs">4.0 <MdStar style={{color: '#ce0078', float: 'right', position: 'relative', top: '-2px', marginLeft: '3px', fontSize: '20px'}} /></Text>
                    </Grid>
                </Flex>
                <Link href="/products/1"><Image src='/images/laptop.png' width={300} height={300} alt='trending-now' /></Link>
                <Flex gap={3} mt={3}>
                    <Grid w='80%'>
                        <Link href="/products/1"><Text textStyle="2sm" fontWeight='bold'>HP Laptop - Pavilion</Text></Link>
                        <Text textStyle="xs">BDT 500/day</Text>
                    </Grid>
                    <Grid w='20%' align={'right'} mt={1}>
                        <Text textStyle="2xs">4.2 <MdStar style={{color: '#ce0078', float: 'right', position: 'relative', top: '-2px', marginLeft: '3px', fontSize: '20px'}} /></Text>
                    </Grid>
                </Flex>
                
                <Box mt={2}>
                    <Link href="/products/1">
                        <HiOutlineHeart style={{ float: 'left', left: '-2px', position: 'relative', marginRight: '2px', fontSize: 24}} />
                    </Link>
                    <Link href="/products/1">
                        <IoMdShareAlt style={{ fontSize: 26}} />
                    </Link>
                </Box>
            </Box>
        </Grid>
    </>
  );
}
