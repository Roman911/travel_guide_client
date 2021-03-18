import { Locations } from "./locations"

export type ChangeData = {
  disableDefaultUI: boolean
  mapContainerStyle: MapContainerStyle
  center: Center
  zoom: number
}

export type OptionsLocation = {
  control: string
  location: Locations | Location
}

export type Location = {
  lat: number
  lng: number
  isType: string
  _id?: string
}

type MapContainerStyle = {
  height: string
  width: string
}

type Center = {
  lat: number
  lng: number
}