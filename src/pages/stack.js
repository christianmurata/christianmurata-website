import { Container, Tabs, TabList, TabPanels, TabPanel, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiTwotoneThunderbolt, AiOutlineCloudServer } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';

import Page from '../components/page';
import Section from '../components/section';
import SkillCard from '../components/skillCard';
import TabTitle from '../components/tabTitle';

import { skills } from '../data/skills';

const GridItem = ({ children, reference }) => {
  return (
    <SimpleGrid
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
        <Section>
          <Tabs variant='unstyled' isLazy={true}>
            <TabList display='flex' flexWrap='wrap' justifyContent='center'>
              <TabTitle text='All' icon={AiTwotoneThunderbolt} filter={''} />
              <TabTitle text='Frontend' icon={BiDesktop} filter={'frontend'} />
              <TabTitle text='Backend' icon={GiSpiderWeb} filter={'backend'} />
              <TabTitle text='Devops' icon={AiOutlineCloudServer} filter={'devops'} />
            </TabList>

            <TabPanels>
              <TabPanel
                as={motion.div}>
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
        </Section>
      </Container>
    </Page >
  );
}

export default Stack;