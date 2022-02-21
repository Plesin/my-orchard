import { Spinner as ChakraSpinner, Stack } from '@chakra-ui/react'

export default function Spinner() {
  return (
    <Stack direction="row" spacing={4} justifyContent="center">
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        emptyColor="teal.700"
        color="green.600"
        size="xl"
      />
    </Stack>
  )
}
