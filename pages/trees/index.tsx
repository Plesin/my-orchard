import React, { useEffect, useState } from 'react'
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
import Layout from '../../components/Layout/Layout'
import H2 from '../../components/H2'
import type { Tree } from '../../types'

function Trees() {
  const [trees, setTrees] = useState([])
  useEffect(() => {
    fetch('/api/trees')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setTrees(json.trees)
      })
  }, [])

  return (
    <Layout>
      <main>
        <H2>All Trees</H2>
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
              <Tr key={tree.id}>
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
                      <MenuItem>Edit</MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </main>
    </Layout>
  )
}

export default Trees
