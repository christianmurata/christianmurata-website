  import { AddIcon } from "@chakra-ui/icons";
import { Badge, Box, Container, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
  import Page from "../components/page"

  const Home = () => {
    return (
      <Page>
        <Container w='100%'>
          <Box
            p='3'
            borderRadius='lg'
            textAlign='center'
            mb='6'
            bg={useColorModeValue('#ffffff', '#323232')}
          >
            <h1>Desenvolvedor e um fanático por puzzles nas horas vagas!</h1>
          </Box>

          <Box display={{ md: 'flex' }}>
            <Box textAlign='center'>
              <Image
                borderRadius='full'
                maxWidth='100px'
                src='/images/murata.jpg'
                alt='Christian Murata'
                borderStyle='solid'
                borderWidth={3}
                display='inline-block'
                borderColor={useColorModeValue('#ffffff', '#323232')}
              />
            </Box>

            <Flex alignItems={'center'}>
              <Box ml='4'>
                <Heading fontWeight='bold'>
                  Christian Murata
                </Heading>

                <Text fontSize='sm' ml={1}>
                  Desenvolvedor

                  <Badge ml='1' colorScheme='blue'>
                    PHP
                  </Badge>
                  <Badge ml='1' colorScheme='red'>
                    LARAVEL
                  </Badge>
                  <Badge ml='1' colorScheme='yellow'>
                    JS
                  </Badge>
                  <Badge ml='1' colorScheme='green'>
                    Node
                  </Badge>
                  <Badge ml='1' colorScheme='orange'>
                    Java
                  </Badge>
                  <Badge ml='1'>
                    <AddIcon />
                  </Badge>
                </Text>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Page>
    );
  }

  export default Home;