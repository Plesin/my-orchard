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

export type CardType = {
  name: string
  desc: string
  count: number
}

export type OrchardType = {
  id: string
  name: string
  desc: string
  count: number
}

export type Tree = {
  id: string
  orchardId: string
  name: string
  type: string
  subtype: string
  datePlanted: Date
}
