import { useRef, FunctionComponent } from 'react'
import { useDrop } from 'react-dnd'
import Plant from '../Plant/Plant'
import { DndPlant } from '../../types'
import classes from './Canvas.module.css'

type CanvasType = {
  plants: Array<DndPlant>
  dropHandler: (item: DndPlant, monitor: any) => {}
}

const Canvas: FunctionComponent<CanvasType> = function Canvas(
  props: CanvasType
) {
  const wrap = useRef<HTMLDivElement>(null)
  const [{ canDrop, isOver }, target] = useDrop(() => ({
    accept: 'LIB_ITEM',
    drop: (item: DndPlant, monitor) => {
      const wrapPos = wrap.current
        ? wrap.current.getBoundingClientRect()
        : { left: 0, top: 0 }
      const offset = monitor.getClientOffset()!
      const left = Math.round(offset.x - wrapPos.left - item.mouseOffset.x)
      const top = Math.round(offset.y - item.mouseOffset.y)

      // TODO - fix this
      const newItem = {
        ...item,
        left,
        top,
      }
      props.dropHandler(newItem, monitor)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  return (
    <div ref={wrap} className={classes.wrap}>
      <div ref={target} role={'canvas'} className={classes.canvas}>
        {props.plants.map((item) => (
          <Plant key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Canvas
