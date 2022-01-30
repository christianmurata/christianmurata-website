import { Container, HStack, Icon, Tabs, Tab, TabList, Text, useColorModeValue, TabPanels, TabPanel, SimpleGrid } from '@chakra-ui/react';
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';

import Page from '../components/page';
import Section from '../components/section';
import SkillCard from '../components/skillCard';
import { skills } from '../data/skills';

const TabTitle = ({ text, icon, filter }) => {
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
      onClick={() => filterSkills(filter)}
    >
      <HStack spacing={1}>
        <Icon as={icon} weight='fill' />
        <Text>{text}</Text>
      </HStack>
    </Tab>
  );
}

const Stack = () => {
  return (
    <Page>
      <Container>
        <Section>
          <Tabs variant='unstyled'>
            <TabList display='flex' flexWrap='wrap' justifyContent='center'>
              <TabTitle text='All' icon={AiTwotoneThunderbolt} filter={''} />
              <TabTitle text='Frontend' icon={BiDesktop} filter={'frontend'} />
              <TabTitle text='Backend' icon={GiSpiderWeb} filter={'backend'} />
              <TabTitle text='Devops' icon={AiOutlineCloudServer} filter={'devops'} />
            </TabList>

            <TabPanels>
              <TabPanel>
                <Section>
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skills.map(skill => (
                      <SkillCard
                        skill={skill.skill}
                        desc={skill.desc}
                        color={skill.color}
                        image={skill.image}
                      />
                    ))}
                  </SimpleGrid>
                </Section>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
      </Container>
    </Page >
  );
}

export default Stack;