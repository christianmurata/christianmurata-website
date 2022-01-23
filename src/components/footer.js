import { Box, Flex, IconButton, Link, Stack, Text } from "@chakra-ui/react"

import { socials } from "../data/socials";

const Footer = () => {
  return (
    <Stack
      as='footer'
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent='space-between'
      alignItems='center'
      w='100%'
      maxW={'container.md'}
      mx='auto'
    >
      <Flex
        flexDirection={['column', 'column', 'row']}
        flexFlow={['column-reverse', 'column-reverse']}
        justifyContent={['center', 'space-between']}
        alignItems='center'
        w='100%'
      >
        <Text fontSize='sm' textAlign='center'>
          © {new Date().getFullYear()} Christian Murata
        </Text>

        <Box textAlign='center'>
          {socials.map((social, index) => (
            <IconButton
              key={index}
              as={Link}
              href={social.url}
              aria-label={social.label}
              colorScheme={social.type}
              icon={social.icon}
              size='lg'
              variant='ghost'
              isExternal
            />
          ))}
        </Box>
      </Flex >
    </Stack >
  )
}

export default Footer;