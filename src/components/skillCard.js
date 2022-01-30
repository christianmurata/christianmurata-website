import { Box, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';

const capitalize = desc => desc[0].toUpperCase() + desc.slice(1);

const SkillCard = ({ skill, desc, color, image }) => {

  return (
    <Box>
      <HStack
        p={4}
        bg={useColorModeValue('#ffffff', '#323232')}
        spacing={4}
        w='100%'
        textAlign='left'
        align='start'
        borderWidth='1px'
        rounded='md'
      >
        <Box
          p={2}
          position='relative'
          overflow='hidden'
          lineHeight={0}
        >
          <Box
            bg={color}
            position='absolute'
            rounded='md'
            top={0}
            bottom={0}
            left={0}
            right={0}
            opacity={0.2}
          ></Box>

          <Image
            src={image}
            height={26}
            width={26}
            layout='fixed'
          />
        </Box>
        <VStack
          align='start'
          justify='flex-start'
          spacing={1}
          maxW='lg'
          h='100%'
        >
          <VStack spacing={0} align='start' flexGrow='1'>
            <Text fontWeight='bold' fontSize='md' noOfLines={2}>{skill}</Text>
            <Text fontSize='sm'>{capitalize(desc)}</Text>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  )
}

export default SkillCard;