import React from 'react'
import {
  Box,
  Heading,
  Stack,
  Radio,
  RadioGroup,
  useColorMode,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import Layout from '../../components/Layout/Layout'

export default function SettingsPage() {
  const { colorMode, toggleColorMode } = useColorMode()
  const onChange = (value: string) => {
    console.log(colorMode, value)
    if (colorMode !== value) {
      toggleColorMode()
    }
  }
  return (
    <Layout>
      <Box p={'2rem 0'}>
        <Heading as="h1">Settings Page</Heading>
        <FormControl as="fieldset" m={'2rem 0'}>
          <FormLabel as="legend">Color Mode</FormLabel>
          <RadioGroup onChange={onChange} value={colorMode}>
            <Stack direction="row">
              <Radio value="light">Light</Radio>
              <Radio value="dark">Dark</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Box>
    </Layout>
  )
}
