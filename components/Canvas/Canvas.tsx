import { FunctionComponent } from 'react'
import { useDrop } from 'react-dnd'
import Tree from '../Tree/Tree'
import type { TreeType } from '../Tree/Tree'
import classes from './Canvas.module.css'

type CanvasType = {
  plants: Array<TreeType>
  dropHandler: any // TODO function type
}

const Canvas: FunctionComponent<CanvasType> = function Canvas(
  props: CanvasType
) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'tree',
    drop: (item: TreeType, monitor) => props.dropHandler(item, monitor),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  return (
    <div ref={drop} role={'canvas'} className={classes.canvas}>
      Canvas
      {props.plants.map((item) => (
        <Tree key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Canvas
