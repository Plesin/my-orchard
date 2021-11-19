import React, { ReactNode } from 'react'
import classes from './Layout.module.css'

type Props = {
  sidebar: ReactNode
  main: ReactNode
}

function Layout(props: Props) {
  const { sidebar, main } = props
  return (
    <main className={classes.grid}>
      <div>{sidebar}</div>
      <div>{main}</div>
    </main>
  )
}

export default Layout
