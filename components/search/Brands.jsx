import { Flex, Heading, Text, Stack, Checkbox, CheckboxGroup } from '@chakra-ui/react';


const Brands = () => {
  return (
    <Flex direction={`column`} gap={`2`}>
      <Heading size={`sm`}>Brands</Heading>
      <CheckboxGroup colorScheme='primary' defaultValue={['Nikon', 'Vivo']} size={`sm`}>
        <Stack direction={['column']} >
          <Checkbox value='Nikon' fontSize={`12px`}>Nikon</Checkbox>
          <Checkbox value='Sony'>Sony</Checkbox>
          <Checkbox value='Vivo'>Vivo</Checkbox>
        </Stack>
      </CheckboxGroup>
      <Text fontSize={`sm`} color={`primary.500`}>View More</Text>
      
    </Flex>
  );
};

export default Brands;