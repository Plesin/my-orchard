import { Box } from '@chakra-ui/react'
import type { OrchardType } from '../../types'
import Card from '../Card/Card'

export default function Dashboard({ orchards }: { orchards: [OrchardType] }) {
  return (
    <Box w="100%" p={4} color="white">
      <h1>Dashboard</h1>
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
  )
}
