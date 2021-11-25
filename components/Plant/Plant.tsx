import React, { FunctionComponent } from 'react'
import { DndPlant } from '../../types'
import classes from '../Plant/Plant.module.css'

const Plant: FunctionComponent<DndPlant> = function Plant({
  id,
  type,
  variety,
  left,
  top,
}) {
  return (
    <div key={id} className={classes.plant} style={{ left: left, top: top }}>
      <h1>{type}</h1>
      <p>
        <span>{variety}</span>
      </p>
    </div>
  )
}

export default Plant
