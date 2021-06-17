export interface Direction {
  point?: any
  waypoints: any[]
  endStart: boolean
  travelMode: any
  allDirections: any[]
}

export type DirectionData = {
  _id: string
  title: string
  small_text: string
  waypoints: any[]
  endStart: boolean
  travelMode: any
  allDirections: any[]
  editor: string
  views: number
  likes: string[]
  author: {
    _id: string
    avatar: string
    name: string
  }
  createdAt: string
}