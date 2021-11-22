import { FunctionComponent } from 'react'
import { useDrop } from 'react-dnd'

import classes from './Canvas.module.css'

const Canvas: FunctionComponent = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'tree',
    drop: () => ({ name: 'canvas' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  return (
    <div ref={drop} role={'canvas'} className={classes.canvas}>
      Canvas
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>
  )
}

export default Canvas
