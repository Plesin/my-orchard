import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Layout from 'components/Layout/Layout'
import SettingsForm from 'components/SettingsForm'

export default function SettingsPage() {
  return (
    <Layout>
      <Box p={'2rem 0'}>
        <Heading as="h1">Settings Page</Heading>
        <SettingsForm />
      </Box>
    </Layout>
  )
}
