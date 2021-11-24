import { FunctionComponent } from 'react'
import { useDrag } from 'react-dnd'
import { DndPlant } from '../../types'
import classes from './LibItem.module.css'

interface DropResult {
  name: string
}

const LibItem: FunctionComponent<DndPlant> = function LibItem({
  id,
  type,
  variety,
  left,
  top,
}) {
  const [{ isDragging }, source] = useDrag(() => ({
    type: 'LIB_ITEM',
    item: { id, type, variety, left, top },
    end: (item, monitor) => {
      const offset = monitor.getClientOffset()
      console.log(offset)
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return (
    <div ref={source} role="LIB_ITEM" key={id} className={classes.plant}>
      <h1>{type}</h1>
      <p>
        <span>{variety}</span>
      </p>
    </div>
  )
}

export default LibItem
