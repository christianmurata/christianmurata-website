import { Box, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const Card = ({ title, desc, period }) => {
  return (
    <Box
      px={4}
      py={5}
      w={'full'}
      borderWidth='1px'
      rounded='md'
      bg={useColorModeValue('#ffffff', '#323232')}
    >
      <Flex justifyContent='space-between'>
        <Flex maxW={['100%', '100%', '80%', '80%']}>
          <Stack spacing={2} align='left'>
            <Heading
              align='left'
              fontSize='xl'
            >
              {title}
            </Heading>
            <Heading
              align='justify'
              fontSize='sm'
            >
              {desc}
            </Heading>
          </Stack>
        </Flex>
        <Flex>
          <Stack display={['none', 'none', 'inline', 'inline']}>
            <Text fontSize={14}>
              {period}
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Card;