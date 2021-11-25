import { FunctionComponent } from 'react'
import { DragSource, DragSourceMonitor, ConnectDragSource } from 'react-dnd'
import { DndPlantWithDragSource } from '../../types'
import classes from './LibItem.module.css'

interface DropResult {
  name: string
}

const cardSource = {
  beginDrag(item: DndPlantWithDragSource, monitor: DragSourceMonitor) {
    const elem = monitor.getSourceClientOffset()
    const mouse = monitor.getInitialClientOffset() // mouse offset
    const mouseOffset = {
      x: mouse.x - elem.x,
      y: mouse.y - elem.y,
    }

    return {
      ...item,
      mouseOffset,
    }
  },
}

function collect(connect, monitor: DragSourceMonitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

const LibItem: FunctionComponent<DndPlantWithDragSource> = function LibItem({
  id,
  type,
  variety,
  connectDragSource,
}) {
  return connectDragSource(
    <div key={id} className={classes.plant}>
      <h1>{type}</h1>
      <p>
        <span>{variety}</span>
      </p>
    </div>
  )
}

export default DragSource('LIB_ITEM', cardSource, collect)(LibItem)
