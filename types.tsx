export type PlantType = {
  id: string
  type: string
  variety: string
}

export interface DndPlant extends PlantType {
  left: number
  top: number
  mouseOffset: {
    x: number
    y: number
  }
}

export interface DndPlantWithDragSource extends DndPlant {
  isDragging: boolean
  connectDragSource: any
}
