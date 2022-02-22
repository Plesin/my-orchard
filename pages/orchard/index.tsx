// @ts-nocheck
import React, { useState, ReactNode } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { v4 as uuidv4 } from 'uuid'

import type { PlantType } from '../../types'
import Layout from 'components/Layout/Layout'
import Library from 'components/Library/Library'
import Canvas from 'components/Canvas/Canvas'
import classes from './index.module.css'

function Orchard() {
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
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <main className={classes.grid}>
          <DndProvider backend={HTML5Backend}>
            <main className={classes.grid}>
              <Library />
              <Canvas plants={plants} dropHandler={addPlants} />
            </main>
          </DndProvider>
        </main>
      </Layout>
    </DndProvider>
  )
}

export default Orchard
