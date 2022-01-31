import { Container, HStack, Icon, Tabs, Tab, TabList, Text, useColorModeValue, TabPanels, TabPanel, SimpleGrid } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';

import Page from '../components/page';
import SkillCard from '../components/skillCard';
import { skills } from '../data/skills';

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

const GridItem = ({ children, reference }) => {
  return (
    <SimpleGrid
      as={motion.div}
      ref={reference}
      pos='relative'
      initial='hidden'
      animate='visible'
      exit='exit'
      columns={[1, 2]}
      spacing={4}
      mt={8}
    >
      {children}
    </SimpleGrid>
  );
}

const Stack = () => {
  return (
    <Page>
      <Container>
        <Tabs variant='unstyled' isLazy={true}>
          <TabList display='flex' flexWrap='wrap' justifyContent='center'>
            <TabTitle text='All' icon={AiTwotoneThunderbolt} filter={''} />
            <TabTitle text='Frontend' icon={BiDesktop} filter={'frontend'} />
            <TabTitle text='Backend' icon={GiSpiderWeb} filter={'backend'} />
            <TabTitle text='Devops' icon={AiOutlineCloudServer} filter={'devops'} />
          </TabList>

          <TabPanels>
            <TabPanel>
              <GridItem>
                {skills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    skill={skill.skill}
                    desc={skill.desc}
                    color={skill.color}
                    image={skill.image}
                  />
                ))}
              </GridItem>
            </TabPanel>

            <TabPanel>
              <GridItem>
                {skills
                  .filter(skill => skill.filter === 'frontend')
                  .map((skill, index) => (
                    <SkillCard
                      key={index}
                      skill={skill.skill}
                      desc={skill.desc}
                      color={skill.color}
                      image={skill.image}
                    />
                  ))}
              </GridItem>
            </TabPanel>

            <TabPanel>
              <GridItem>
                {skills
                  .filter(skill => skill.filter === 'backend')
                  .map((skill, index) => (
                    <SkillCard
                      key={index}
                      skill={skill.skill}
                      desc={skill.desc}
                      color={skill.color}
                      image={skill.image}
                    />
                  ))}
              </GridItem>
            </TabPanel>

            <TabPanel>
              <GridItem>
                {skills
                  .filter(skill => skill.filter === 'devops')
                  .map((skill, index) => (
                    <SkillCard
                      key={index}
                      skill={skill.skill}
                      desc={skill.desc}
                      color={skill.color}
                      image={skill.image}
                    />
                  ))}
              </GridItem>
            </TabPanel>
          </TabPanels>

        </Tabs>
      </Container>
    </Page >
  );
}

export default Stack;