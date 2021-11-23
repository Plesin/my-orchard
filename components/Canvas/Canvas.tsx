import { FunctionComponent } from 'react'
import { useDrop } from 'react-dnd'
import Plant from '../Plant/Plant'
import type { PlantType } from '../../types'
import classes from './Canvas.module.css'

type CanvasType = {
  plants: Array<PlantType>
  dropHandler: (item: PlantType, monitor: any) => {}
}

const Canvas: FunctionComponent<CanvasType> = function Canvas(
  props: CanvasType
) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'LIB_ITEM',
    drop: (item: PlantType, monitor) => props.dropHandler(item, monitor),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  return (
    <div ref={drop} role={'canvas'} className={classes.canvas}>
      {props.plants.map((item) => (
        <Plant key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Canvas
