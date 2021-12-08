import React, { ReactNode } from 'react'
import Link from 'next/link'
import { Flex, Text, Icon, MenuItem, useColorModeValue } from '@chakra-ui/react'

type Props = {
  icon: any
  title: string
  active: boolean
  route: string
}

export default function NavItem(props: Props) {
  const { icon, title, active, route } = props
  const bg = useColorModeValue('gray.50', 'gray.700')
  return (
    <Link href={route} passHref>
      <MenuItem
        p={4}
        bg={active ? 'green.600' : bg}
        color={active ? 'white' : 'gray.500'}
        _hover={{
          background: 'green.600',
          color: 'white',
        }}
      >
        <Flex>
          <Icon as={icon} fontSize="xl" />
          <Text ml={5} display={'flex'}>
            {title}
          </Text>
        </Flex>
      </MenuItem>
    </Link>
  )
}
