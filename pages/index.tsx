import { useState, useEffect } from 'react'
import type { NextPage } from 'next'

import type { OrchardType } from '../types'
import Layout from 'components/Layout/Layout'
import Dashboard from 'components/Dashboard/Dashboard'

const Home: NextPage = () => {
  let [orchards, setOrchards] = useState<OrchardType[]>([])

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
