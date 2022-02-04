import { Container, SimpleGrid, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { VscRocket } from 'react-icons/vsc';


import Page from '../components/page';
import ProjectCard from '../components/projectCard';
import Section from '../components/section';
import TabTitle from '../components/tabTitle';

import { projects } from '../data/projects';

const Portfolio = () => {
  return (
    <Page>
      <Container>
        <Section>
          <Tabs variant='unstyled' w='100%' isLazy={true}>
            <TabList display='flex' flexWrap='wrap' justifyContent='center'>
              <TabTitle text='All' icon={AiTwotoneThunderbolt} filter={''} />
              <TabTitle text='Professional' icon={VscRocket} filter={'frontend'} />
              <TabTitle text='Github' icon={FiGithub} filter={'backend'} />
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid
                  pos='relative'
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  columns={[1, 2]}
                  spacing={4}
                  mt={8}
                >
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      desc={project.desc}
                      cover={project.cover}
                      icon={project.icon}
                      link={project.link}
                      techs={project.techs}
                      stars={project.stars}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid
                  pos='relative'
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  columns={[1, 2]}
                  spacing={4}
                  mt={8}
                >
                  {projects
                    .filter(project => project.filter === 'pro')
                    .map((project, index) => (
                      <ProjectCard
                        key={index}
                        title={project.title}
                        desc={project.desc}
                        cover={project.cover}
                        icon={project.icon}
                        link={project.link}
                        techs={project.techs}
                        stars={project.stars}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid
                  pos='relative'
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  columns={[1, 2]}
                  spacing={4}
                  mt={8}
                >
                  {projects
                    .filter(project => project.filter === 'git')
                    .map((project, index) => (
                      <ProjectCard
                        key={index}
                        title={project.title}
                        desc={project.desc}
                        cover={project.cover}
                        icon={project.icon}
                        link={project.link}
                        techs={project.techs}
                        stars={project.stars}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
      </Container>
    </Page >
  );
}

export default Portfolio;