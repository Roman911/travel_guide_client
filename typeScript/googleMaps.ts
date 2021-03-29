import { Locations } from "./locations"

export type ChangeData = {
  disableDefaultUI: boolean
  search: boolean
  mapContainerStyle: MapContainerStyle
  zoom: number
  control: string
  width: string
  center: Location
  location?: Location
  locations?: Locations
  isType?: string,
  _id: string
}

export type Location = {
  lat: number
  lng: number
}

export type MapContainerStyle = {
  height: string
  width: string
}