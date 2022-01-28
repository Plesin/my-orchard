import React from 'react'
import { Badge, Box, AspectRatio, Image, Text, Stack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { WiThermometer } from 'react-icons/wi'
import { FiMapPin } from 'react-icons/fi'
import type { CardType } from '../../types'

function Card(props: CardType) {
  const { name, desc, count } = props

  return (
    <Box maxW="lg" borderWidth="2px" borderRadius="lg" overflow="hidden">
      <Image
        src="https://picsum.photos/id/216/600/400"
        alt="Orchard trees"
        borderRadius={'12px 12px 0 0'}
      />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>

        <Box>
          {desc}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>
        <Box display="flex" alignItems="baseline" mt={'2rem'}>
          <Badge px="2" colorScheme="teal" borderRadius={8}>
            trees | {count}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            flexGrow={1}
          >
            <Icon as={WiThermometer} /> 5 <span>&#8451;</span>
          </Box>
          <Box>
            <Icon as={FiMapPin} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
