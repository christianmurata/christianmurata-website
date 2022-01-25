import { AddIcon } from '@chakra-ui/icons';
import { Badge, Box, Container, Flex, Heading, Image, Text, VStack, useColorModeValue } from '@chakra-ui/react';

import Card from '../components/card';
import Page from '../components/page';
import Section from '../components/section';
import { educations, badges, experiences } from '../data/infos';

const Home = () => {
  return (
    <Page>
      <Container>
        <Section>
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

                  {badges.map((badge, index) => (
                    <Badge key={index} colorScheme={badge.color} ml='1' p='1'>
                      {badge.desc}
                    </Badge>
                  ))}

                  <Badge ml='1' p='1'>
                    <AddIcon />
                  </Badge>
                </Text>
              </Box>
            </Flex>
          </Box>
        </Section>

        <Section delay='0.2'>
          <Box p='3'>
            <Heading variant='section-title'>Sobre Mim</Heading>

            <Text align='justify'>
              Hey! Eu sou um desenvolvedor freelance atualmente estudando engenharia
              de computação e morando em Cornélio Procópio, no Paraná 🇧🇷. Sou um
              grande apreciador de cubos mágicos, futebol, Fifa e esportes americanos.
            </Text>
          </Box>
        </Section>

        <Section delay='0.3'>
          <Box p='3'>
            <Heading variant='section-title'>Experiência</Heading>

            <VStack spacing='2'>
              {educations.map((education, index) => (
                <Card
                  key={index}
                  title={education.title}
                  desc={education.desc}
                  period={education.period}
                />
              ))}
            </VStack>

          </Box>

          <Box p='3'>
            <Heading variant='section-title'>Formação</Heading>

            <VStack spacing='2'>
              {experiences.map((experience, index) => (
                <Card
                  key={index}
                  title={experience.title}
                  desc={experience.desc}
                  period={experience.period}
                />
              ))}
            </VStack>

          </Box>
        </Section>
      </Container>
    </Page>
  );
}

export default Home;