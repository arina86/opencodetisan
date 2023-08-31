'use client'

import {
    IconButton,
    Avatar,
    Button,
    Box,
    CloseButton,
    Flex,
    HStack,
    Icon,
    useColorModeValue,
    useColorMode,
    useBreakpointValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import {
    MoonIcon, SunIcon
} from '@chakra-ui/icons'
import {
    FiHome,
    FiInbox,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi'
import {
    SiGithub,
    SiTwitter,
    SiFacebook
} from 'react-icons/si'
import { IconType } from 'react-icons'

interface LinkItemProps {
    name: string
    icon: IconType
}

interface NavItemProps extends FlexProps {
    icon: IconType
    children: React.ReactNode
}

interface MobileProps extends FlexProps {
    onOpen: () => void
}

interface SidebarProps extends BoxProps {
    onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: FiHome },
    { name: 'Inbox', icon: FiInbox },
    { name: 'Contacts', icon: FiStar },
    { name: 'Explore', icon: FiCompass },
    
]


const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 256 222"><path d="m128 0l128 221.705H0z" /></svg>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        fontWeight={'bold'}
                        color={useColorModeValue('gray.800', 'white')}>
                        Vercel
                    </Text>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                    </Flex>
                </Flex>
                <Menu>
                    <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                        <HStack>
                            <Avatar
                                size={'sm'}
                                src={
                                    'https://unsplash.com/photos/a-bunch-of-flowers-that-are-next-to-each-other-lO4D6Isdtrk'
                                }
                            />
                            <Box display={{ base: 'none', md: 'flex' }}>
                                <FiChevronDown />
                            </Box>
                        </HStack>
                    </MenuButton>
                    <MenuList
                        bg={useColorModeValue('white', 'gray.900')}
                        borderColor={useColorModeValue('gray.200', 'gray.700')}>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Changelog</MenuItem>
                        <MenuItem>Help</MenuItem>
                        <MenuDivider />
                        <MenuItem>Log out</MenuItem>
                    </MenuList>
                </Menu>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>

            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Box
            as="a"
            href="#"
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 2, md: 2 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <HStack spacing={{ base: '0', md: '1' }}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
                <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<SiGithub />} />
                <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<SiTwitter />} />
                <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<SiFacebook />} />

            </HStack>
        </Flex>
    )
}

const SidebarWithHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minH="1vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} >
                {/* Content */}
            </Box>
        </Box>
    )
}

export default SidebarWithHeader