import { Box, Button, Container, Flex, Image, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = (props) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
      position='fixed'
      as='nav'
      w='100%'
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      bg={useColorModeValue('#ffffff80', '#32323280')}
    >
      <Container align={'center'} maxW={'container.md'}>
        <Box px={4}>
          <Flex
            h={16}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            
            <Flex
              alignItems={'center'}
              justifyContent={'start'}
            >
              <Image 
                src='/images/rubiks.png' 
                alt='logo'
                width={5} 
                height={5}
              />
              <Text fontWeight='bold' ml='1'>
                Christian Murata
              </Text>
            </Flex>

            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Container>
		</Box>
	);
};

export default Navbar;
