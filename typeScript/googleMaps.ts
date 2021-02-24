import { Locations } from "./locations"

export type GoogleMapsProps = {
  mapContainerStyle:
    {
      height: string
      width: string
    }
  center:
    {
      lat: number
      lng: number
    }
  zoom: number,
  locations: Locations,
  control: string,
  selectLocations: [] | [{
    isType: string
    select: boolean
  }]
}