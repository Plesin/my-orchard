import { useRouter } from 'next/router'
import React, { useState, useEffect, ReactNode } from 'react'
import { SimpleGrid, Box, Text } from '@chakra-ui/react'
import Layout from 'components/Layout/Layout'
import H2 from 'components/H2'

import classes from './index.module.css'

import { AppState } from 'redux/store'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { loadTree, selectStatus, resetState } from 'redux/treesSlice'
import { Tree } from 'types'
import Spinner from 'components/Spinner'

const getTreeById = (treeId: string) => (store: AppState) => {
  return store.trees.items.filter((item: Tree) => item._id === treeId)[0]
}

function Tree() {
  const router = useRouter()
  const { treeId } = router.query
  const dispatch = useAppDispatch()
  const tree = useAppSelector(getTreeById(treeId as string))
  const status = useAppSelector(selectStatus)

  useEffect(() => {
    if (treeId) {
      dispatch(loadTree(treeId as string))
    }
    return () => {
      dispatch(resetState())
    }
  }, [dispatch, treeId])

  if (!tree) {
    return <Spinner />
  }

  const { name, type, subtype, datePlanted } = tree

  return (
    <Layout>
      <main className={classes.grid}>
        <main className={classes.grid}>
          <H2>Tree Detail</H2>
          <SimpleGrid columns={2} spacing={10}>
            <Box height="80px">
              <Text fontSize="xl">Name: {name}</Text>
            </Box>
            <Box height="80px">
              <Text fontSize="xl">Type: {type}</Text>
            </Box>
            <Box height="80px">
              <Text fontSize="xl">Subtype: {subtype}</Text>
            </Box>
            <Box height="80px">
              <Text fontSize="xl">Date Planted: {datePlanted}</Text>
            </Box>
          </SimpleGrid>
        </main>
      </main>
    </Layout>
  )
}

export default Tree
