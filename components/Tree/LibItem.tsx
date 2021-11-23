import { FunctionComponent } from 'react'
import { useDrag } from 'react-dnd'
import type { PlantType } from '../../types'
import classes from './LibItem.module.css'

interface DropResult {
  name: string
}

const Tree: FunctionComponent<PlantType> = function Tree({
  id,
  type,
  variety,
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'tree',
    item: { id, type, variety },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      // if (item && dropResult) {
      //   alert(`You dropped ${type} into ${dropResult.name}!`)
      // }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return (
    <div ref={drag} role="tree" key={id} className={classes.plant}>
      <h1>{type}</h1>
      <p>
        <span>{variety}</span>
      </p>
    </div>
  )
}

export default Tree
