import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import Link from 'next/link'
import {
  loadTrees,
  selectTrees,
  selectStatus,
  resetState,
} from 'redux/treesSlice'
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Layout from 'components/Layout/Layout'
import H2 from 'components/H2'
import Spinner from 'components/Spinner'
import type { Tree } from 'types'

function Trees() {
  const dispatch = useAppDispatch()
  const trees = useAppSelector(selectTrees)
  const status = useAppSelector(selectStatus)

  useEffect(() => {
    dispatch(loadTrees())
    return () => {
      dispatch(resetState())
    }
  }, [dispatch])

  return (
    <Layout>
      <main>
        <H2>All Trees</H2>
        {status === 'loading' ? (
          <Spinner />
        ) : (
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Type</Th>
                <Th>Subtype</Th>
                <Th>Date Planted</Th>
                <Th>Orchard Id</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {trees.map((tree: Tree) => (
                <Tr key={tree._id}>
                  <Td>{tree.name}</Td>
                  <Td>{tree.type}</Td>
                  <Td>{tree.subtype}</Td>
                  <Td>{tree.datePlanted}</Td>
                  <Td>{tree.orchardId}</Td>
                  <Td>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      ></MenuButton>
                      <MenuList>
                        <Link href={`/trees/${tree._id}`} passHref>
                          <MenuItem>Show Detail</MenuItem>
                        </Link>
                        <MenuItem>Delete</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </main>
    </Layout>
  )
}

export default Trees
