// @ts-nocheck
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout/Layout'
import Library from '../components/Library/Library'
import Canvas from '../components/Canvas/Canvas'
import type { PlantType } from '../../types'
import { v4 as uuidv4 } from 'uuid'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [plants, setPlants] = useState([])

  const addPlants = (newPlant: PlantType, monitor: any) => {
    const plantId: string = uuidv4()
    const plant = {
      ...newPlant,
      id: plantId,
    }
    setPlants((prevPlants) => [...prevPlants, plant])
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>My Orchard</title>
        <meta name="description" content="application to manage your orchard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout
        sidebar={<Library />}
        main={<Canvas plants={plants} dropHandler={addPlants} />}
      ></Layout>
    </div>
  )
}

export default Home
