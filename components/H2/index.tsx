import { ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h2" my={{ base: '1rem', md: '2rem', lg: '3rem' }}>
      {children}
    </Heading>
  )
}

export default H2
