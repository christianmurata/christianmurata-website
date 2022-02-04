import { Icon } from '@chakra-ui/icons';
import { AspectRatio, Box, Flex, HStack, Image, Link, Tag, Text, Tooltip, useColorModeValue, VStack } from '@chakra-ui/react';
import { AiOutlineStar } from 'react-icons/ai';

const getColor = tech => ({
  'php': 'blue',
  'react': 'blue',
  'js': 'yellow',
  'html': 'orange',
  'css': 'blue',
  'laravel': 'red',
  'vue': 'green',
  'bootstrap': 'purple',
  'chakra-ui': 'teal',
})[tech];

const ProjectCard = ({ title, desc, cover, icon, link, techs, stars }) => {
  return (
    <Box>
      <VStack
        rounded='md'
        bg={useColorModeValue('#ffffff', '#323232')}
        overflow='hidden'
        spacing={0}
        borderWidth='1px'
        w='100%'
        align='start'
      >
        <Box position='relative' w='100%'>
          <AspectRatio
            ratio={1.85}
            borderBottomWidth='1px'
          >
            <Image
              src={cover}
              objectFit='cover'
            />
          </AspectRatio>
        </Box>

        <VStack py={2} px={[2, 4]} spacing={1} align='start' w='100%'>
          <Flex justifyContent={'space-between'} width='100%'>
            <Tooltip hasArrow label='Link do projeto' placement='bottom'>
              <HStack align='center'>
                <Icon as={icon} boxSize='1em' />
                <Link
                  href={link}
                  _hover={{ textDecoration: 'none' }}
                  _focus={{ outline: 'none', border: 'none' }}
                  _active={{ outline: 'none', border: 'none' }}
                  isExternal
                >
                  <Text
                    fontSize='sm'
                    fontWeight='600'
                    align='left'
                  >
                    {title}
                  </Text>
                </Link>
              </HStack>
            </Tooltip>
            {stars && <Flex>
              <Icon as={AiOutlineStar} boxSize='0.9em' mt={'1px'} />
              <Box as='span' ml='1' fontSize='sm'>
                {stars}
              </Box>
            </Flex>}
          </Flex>
          <Flex justifyContent={'space-between'} width='100%'>
            <Box>
              <HStack spacing='1'>
                {techs.map(tech => (
                  <Tag size='sm' colorScheme={getColor(tech)}>
                    <Text fontSize={['0.55rem', 'inherit', 'inherit']}>
                      {tech}
                    </Text>
                  </Tag>
                ))}
              </HStack>
            </Box>
          </Flex>
          <Flex justifyContent={'space-between'} width='100%'>
            <Box>
              <Text fontSize='sm' align='left' mt={1}>
                {desc}
              </Text>
            </Box>
          </Flex>
        </VStack>
      </VStack >
    </Box>
  );
}

export default ProjectCard;