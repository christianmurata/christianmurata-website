import { AddIcon } from "@chakra-ui/icons";
import { Badge, Box, Container, Flex, Heading, Image, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";

import Card from "../components/card";
import Page from "../components/page";
import Rubiks from "../components/rubiks";
import { formacoes } from "../data/infos";

const Home = () => {
  return (
    <Page>
      <Container>
        <Box
          p='3'
          borderRadius='lg'
          textAlign='center'
          mb='6'
          bg={useColorModeValue('#ffffff', '#323232')}
        >
          <h1>Dev full-stack e um fanático por puzzles nas horas vagas!</h1>
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

        <Box p='3'>
          <Heading variant='section-title'>Sobre Mim</Heading>

          <Text align='justify'>
            Hey! Eu sou um desenvolvedor freelance atualmente estudando engenharia
            de computação e morando em Cornélio Procópio, no Paraná 🇧🇷. Sou um
            grande apreciador de Fifa, cubos mágicos, futebol e esportes americanos.
          </Text>
        </Box>

        <Box p='3'>
          <Heading variant='section-title'>Formação</Heading>

          <VStack spacing='2'>
            {formacoes.map(formacao => (
              <Card
                title={formacao.title}
                desc={formacao.desc}
                period={formacao.period}
              />
            ))}
          </VStack>

        </Box>
      </Container>
    </Page>
  );
}

export default Home;