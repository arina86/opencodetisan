'use client'

import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    useColorModeValue,
    Icon,
    IconProps,
} from '@chakra-ui/react'



export default function Hero() {
    return (
        <Container maxW={'9xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 10, md: 20 }}>
                <Heading
                    fontFamily={'Tahoma, sans-serif'}
                    letterSpacing={'-3px'}
                    fontWeight={1000}
                    fontSize={{ base: '4xl', sm: '4xl', md: '8xl' }}
                    lineHeight={'80%'}>
                    Develop. Preview. Ship.{' '}
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'} fontSize={{ base: 'xl', sm: 'xl', md: '2xl' }}>
                    Vercel's frontend cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web.
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Button
                        px={6}
                        colorScheme={'orange'}
                        bg={useColorModeValue('#151f21', 'black.400')}
                        _hover={{ bg: 'black.500' }}>
                        Start Deploying
                    </Button>
                    <Button variant='outline' bg={useColorModeValue('#FFFFFF', 'white.400')} px={6}>
                        Get a Demo
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}