import { Link as NavLink, useLocation } from 'react-router-dom';
import { Box, Button, Container, Flex, Image, Link, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const LinkHome = () => {
  return (
    <Link
      as={NavLink}
      to='/'
      mr='3'
      _hover={{ textDecoration: 'none' }}
      _focus={{ outline: 'none', border: 'none' }}
      _active={{ outline: 'none', border: 'none' }}
    >
      <Flex alignItems={'center'} justifyContent={'start'}>
        <Image
          src='/images/rubiks.png'
          alt='logo'
          href='/'
          width={5}
          height={5}
          transition={'300ms ease'}
          _hover={{ transform: 'rotate(20deg)' }}
        />
        <Text fontWeight='bold' ml='1'>
          Christian Murata
        </Text>
      </Flex>
    </Link>
  )
};

const LinkItem = ({ to, path, children }) => {
  return (
    <Link
      as={NavLink}
      to={to}
      ml='2'
      variant={(to === path) ? 'link-item-active' : 'link-item'}
      _focus={{ border: 'none' }}
      _active={{ border: 'none' }}
      _activeLink={{ borderColor: 'blue' }}
    >
      {children}
    </Link >
  )
}

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position='relative'
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
              <LinkHome />

              <LinkItem to='/stack' path={path}>Stack</LinkItem>

              <LinkItem to='/portfolio' path={path}>Portfólio</LinkItem>
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
      </Container >
    </Box >
  );
};

export default Navbar;
