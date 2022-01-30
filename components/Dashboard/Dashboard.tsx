import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import type { OrchardType } from '../../types'
import H2 from '../H2'
import Card from '../Card/Card'

export default function Dashboard({ orchards }: { orchards: [OrchardType] }) {
  return (
    <>
      <H2>My Orchards</H2>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 2 }} spacing={4}>
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
      </SimpleGrid>
      <H2>Comming Up</H2>
      <Box w="100%" p={2}>
        <Box m={'2rem 0'}>
          <Text>
            No maintenance planned now. Its winter time and trees are resting.
          </Text>
        </Box>
      </Box>
      <H2>Weather</H2>
      <Box w="100%" p={2}>
        <Box m={'2rem 0'}>
          <Text>Current weather in your Orchard.</Text>
        </Box>
      </Box>
    </>
  )
}
