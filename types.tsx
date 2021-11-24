export type PlantType = {
  id: string
  type: string
  variety: string
}

export interface DndPlant extends PlantType {
  left: number
  top: number
}
