'use client'
import { ReactElement } from 'react'
import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { SiAdobe, SiLoom, SiZapier, SiTailwindcss } from 'react-icons/si'


interface FeatureProps {
  icon: ReactElement
  title: string
}
// Replace test data with your own
const Feature = ({ icon, title }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'black'}
        rounded={'full'}
        textColor={'black'}
        mb={1}>
        {icon}

      </Flex>
    </Stack>
  )
}


export default function Features() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Text color={'gray.600'} fontSize={'12px'} fontFamily={'Arial, sans-serif'} letterSpacing={'3px'} fontWeight={'bold'}>
          TRUSTED BY THE BEST FRONTEND TEAMS
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Feature
            icon={<Icon as={SiAdobe} w={10} h={10} />}
            title={'Adobe'}

          />
          <Feature
            icon={<Icon as={SiLoom} w={10} h={10} />}
            title={'Loom'}
          />
          <Feature
            icon={<Icon as={SiZapier} w={10} h={10} />}
            title={'Zapier'}
          />
          <Feature
            icon={<Icon as={SiTailwindcss} w={10} h={10} />}
            title={'tailwindcss'}
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
}