import { Link as NavLink, useLocation } from 'react-router-dom';
import { Box, Button, Container, Flex, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';

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
      display={{ base: 'none', md: 'flex' }}
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
              <Stack direction={'row'} spacing={1} display={{ base: 'none', md: 'flex' }}>
                <Link
                  href='https://github.com/christianmurata/christianmurata-website'
                  isExternal
                >
                  <IconButton icon={<FaGithub />} bg='transparent' />
                </Link>
              </Stack>

              <Stack direction={'row'} spacing={1} ml={1}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>

              <Stack
                direction={'row'}
                spacing={1}
                ml={1}
                display={{ base: 'block', md: 'none' }}
              >
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                  />
                  <MenuList bg={useColorModeValue('#ffffff', '#323232')}>
                    <Link as={NavLink} to='/stack'>
                      <MenuItem>
                        Stack
                      </MenuItem>
                    </Link>
                    <Link as={NavLink} to='/portfolio'>
                      <MenuItem>
                        Portfólio
                      </MenuItem>
                    </Link>
                    <Link
                      href='https://github.com/christianmurata/christianmurata-website'
                      isExternal
                    >
                      <MenuItem>
                        Código Fonte
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box >
  );
};

export default Navbar;
