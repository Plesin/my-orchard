import { useState, useEffect } from 'react'
import type { NextPage } from 'next'

import Layout from '../components/Layout/Layout'
import Dashboard from '../components/Dashboard/Dashboard'

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
      <div>
        <Dashboard orchards={orchards} />
      </div>
    </Layout>
  )
}

export default Home
