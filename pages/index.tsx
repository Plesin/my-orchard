import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'

import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Box bg="tomato" w="100%" p={4} color="white">
          <h1>Dashboard - TBD</h1>
        </Box>
      </div>
    </Layout>
  )
}

export default Home
