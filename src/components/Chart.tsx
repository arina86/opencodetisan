'use client'

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { BsGraphUp } from 'react-icons/bs'
import React from 'react';



interface StatsCardProps {
  title: string
  stat: string
  icon: ReactNode
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props
  return (
    <Stat
      px={{ base: 2, md: 4}}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
          >
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

export default function BasicStatistics() {
    
  return (
    <Box maxW="4xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 7 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Revenue'} stat={'$5,000'} icon={<BsGraphUp size={'3em'} />} />
        <StatsCard title={'New Customers'} stat={'1,000'} icon={<BsGraphUp size={'3em'} />} />
        <StatsCard title={'Active Users'} stat={'1762'} icon={<BsGraphUp size={'3em'} />} />
      </SimpleGrid>
    </Box>

  
  
  )
}

