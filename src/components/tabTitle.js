import { HStack, Icon, Tab, Text, useColorModeValue } from '@chakra-ui/react';


const TabTitle = ({ text, icon }) => {
  return (
    <Tab
      bg={useColorModeValue('#ffffff', '#323232')}
      _selected={{
        bg: useColorModeValue('#C06014', '#14FFEC'),
        color: useColorModeValue('#fff', '#000')
      }}
      borderRadius='lg'
      mr={2}
      mt={2}
    >
      <HStack spacing={1}>
        <Icon as={icon} weight='fill' />
        <Text>{text}</Text>
      </HStack>
    </Tab>
  );
}

export default TabTitle;