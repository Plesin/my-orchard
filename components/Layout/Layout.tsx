import React, { ReactChild, ReactChildren } from 'react'
import Head from 'next/head'
import { Grid, GridItem } from '@chakra-ui/react'
import Menu from '../Menu/Navigation'

function Layout({ children }: { children: ReactChild | ReactChildren }) {
  return (
    <>
      <Head>
        <title>My Orchard</title>
        <meta name="description" content="application to manage your orchard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Menu />
        </GridItem>
        <GridItem colSpan={10}>{children}</GridItem>
      </Grid>
    </>
  )
}

export default Layout
