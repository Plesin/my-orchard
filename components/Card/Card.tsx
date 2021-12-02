import React from 'react'
import { Box, AspectRatio, Image, Text, Stack } from '@chakra-ui/react'
import type { CardType } from '../../types'

function Card(props: CardType) {
  const { name, desc, count } = props

  return (
    <Box
      p={4}
      display={{ md: 'flex' }}
      maxWidth="32rem"
      borderWidth={1}
      margin={2}
    >
      <AspectRatio ratio={1 / 1}>
        <Image
          maxWidth="200px"
          margin="auto"
          src="https://picsum.photos/id/237/250/250"
          alt="Woman paying for a purchase"
        />
      </AspectRatio>
      <Stack
        align={{ base: 'center', md: 'stretch' }}
        textAlign={{ base: 'center', md: 'left' }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
        >
          {name}
        </Text>
        <Text color="teal.600">{desc}</Text>
        <Text my={2} color="gray.500">
          {`trees: ${count}`}
        </Text>
      </Stack>
    </Box>
  )
}

export default Card
