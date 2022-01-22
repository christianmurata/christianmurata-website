import { Box, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

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
        <Flex>
          <Stack spacing={2} align='left'>
            <Heading
              align='left'
              fontSize='xl'
            >
              {title}
            </Heading>
            <Heading
              align='left'
              fontSize='sm'
            >
              {desc}
            </Heading>
          </Stack>
        </Flex>
        <Stack display={['none', 'none', 'flex', 'flex']}>
          <Text fontSize={14}>
            {period}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Card;