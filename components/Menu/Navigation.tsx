import { useRouter } from 'next/router'
import React from 'react'
import { Flex, Menu } from '@chakra-ui/react'
import { HamburgerIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons'
import NavItem from './NavItem'

const items = [
  { name: 'Dashboard', route: '/', icon: HamburgerIcon },
  { name: 'Orchards', route: '/orchard', icon: SunIcon },
  { name: 'Settings', route: '/settings', icon: SettingsIcon },
]

export default function Navigation() {
  const router = useRouter()

  return (
    <Flex
      pos="sticky"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={'200px'}
      flexDir="column"
      justifyContent="space-between"
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
