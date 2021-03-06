import { useRouter } from 'next/router'
import React from 'react'
import { Flex, Menu, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons'
import { SiGumtree } from 'react-icons/si'
import NavItem from './NavItem'

const items = [
  { name: 'Dashboard', route: '/', icon: HamburgerIcon },
  { name: 'Orchards', route: '/orchard', icon: SunIcon },
  { name: 'Trees', route: '/trees', icon: SiGumtree },
  { name: 'Settings', route: '/settings', icon: SettingsIcon },
]

export default function Navigation() {
  const router = useRouter()
  const bg = useColorModeValue('gray.50', 'gray.700')

  return (
    <Flex
      pos="sticky"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      flexDir="column"
      justifyContent="space-between"
      bg={bg}
    >
      <Flex flexDir="column" w="100%" alignItems={'flex-start'} as="nav">
        <Menu>
          {items.map((item, index) => (
            <NavItem
              key={item.route}
              active={router.route === item.route}
              icon={item.icon}
              title={item.name}
              route={item.route}
            />
          ))}
        </Menu>
      </Flex>
    </Flex>
  )
}
