import React, { ReactNode } from 'react'
import classes from './Layout.module.css'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

type Props = {
  sidebar: ReactNode
  main: ReactNode
}

function Layout(props: Props) {
  const { sidebar, main } = props
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={classes.grid}>
        <div>{sidebar}</div>
        <div>{main}</div>
      </main>
    </DndProvider>
  )
}

export default Layout
