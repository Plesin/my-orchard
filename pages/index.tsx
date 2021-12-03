import { useState, useEffect } from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout/Layout'
import Dashboard from '../components/Dashboard/Dashboard'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  let [orchards, setOrchards] = useState([])

  useEffect(() => {
    fetch('/api/orchards')
      .then((res) => res.json())
      .then((json) => {
        setOrchards(json.orchards)
      })
  }, [])

  return (
    <Layout>
      <div className={styles.container}>
        <Dashboard orchards={orchards} />
      </div>
    </Layout>
  )
}

export default Home
