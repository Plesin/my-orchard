import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import {
  loadOrchards,
  selectOrchards,
  selectStatus,
  resetState,
} from 'redux/orchardsSlice'

import Layout from 'components/Layout/Layout'
import Dashboard from 'components/Dashboard/Dashboard'
import Spinner from 'components/Spinner'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const orchards = useAppSelector(selectOrchards)
  const status = useAppSelector(selectStatus)

  useEffect(() => {
    dispatch(loadOrchards())
    return () => {
      dispatch(resetState())
    }
  }, [dispatch])

  return (
    <Layout>
      <div>
        {status === 'loading' ? <Spinner /> : <Dashboard orchards={orchards} />}
      </div>
    </Layout>
  )
}

export default Home
