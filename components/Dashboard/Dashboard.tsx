import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import type { OrchardType } from '../../types'
import Card from '../Card/Card'

export default function Dashboard({ orchards }: { orchards: [OrchardType] }) {
  return (
    <>
      <Heading as="h2">My Orchards</Heading>
      <Box w="100%" p={4} display="flex" alignItems="center">
        {orchards.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              desc={item.desc}
              count={item.count}
            />
          )
        })}
      </Box>
      <Heading as="h2">Comming Up</Heading>
      <Box w="100%" p={2}>
        <Box m={'2rem 0'}>
          <Text>
            No maintenance planned now. Its winter time and trees are resting.
          </Text>
        </Box>
      </Box>
      <Heading as="h2">Weather</Heading>
      <Box w="100%" p={2}>
        <Box m={'2rem 0'}>
          <Text>Current weather in your Orchard.</Text>
        </Box>
      </Box>
    </>
  )
}
