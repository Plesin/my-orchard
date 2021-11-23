import React, { FunctionComponent } from 'react'
import type { PlantType } from '../../types'
import classes from '../LibItem/LibItem.module.css'

const Plant: FunctionComponent<PlantType> = function Plant({
  id,
  type,
  variety,
}) {
  return (
    <div key={id} className={classes.plant}>
      <h1>{type}</h1>
      <p>
        <span>{variety}</span>
      </p>
    </div>
  )
}

export default Plant
