import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
  HStack,  
  VStack,  
  Button,
	Heading,
	Text,
} from '@chakra-ui/react';
import {router} from 'next/router';

const AuthAlertComponent = () => {

	return (
		<Box h={`65vh`}>
			<Box h={`100%`}>
				{/* <AlertIcon /> */}
        <HStack w={`100%`} h={`100%`} justify={`center`} align={`center`}>
          <VStack h={`100%`} align={`center`} justify={`center`} gap={2}>
          <Heading size={`md`} align='center' color={`brand.500`}>You are not authorized to access this page!</Heading>
          <Text fontSize={`md`} align='center' color={`brand.500`} mb={3}>Please sign in first.</Text>
          <Button variant={`solid`} colorScheme={`primary`} onClick={()=>router.push(`/`)} >Home</Button>
          </VStack>
        </HStack>
				{/* <AlertDescription>
					Your Chakra experience may be degraded.
				</AlertDescription> */}
			</Box>
		</Box>
	);
};

export default AuthAlertComponent;
