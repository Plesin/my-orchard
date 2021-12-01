import React, { ReactChild, ReactChildren } from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Menu from '../../components/Menu/Menu'

function Layout({ children }: { children: ReactChild | ReactChildren }) {
  return (
    <>
      <Head>
        <title>My Orchard</title>
        <meta name="description" content="application to manage your orchard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Menu />
        {children}
      </ChakraProvider>
    </>
  )
}

export default Layout
