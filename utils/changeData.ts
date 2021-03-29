import { ChangeData, MapContainerStyle, Location } from '../typeScript/googleMaps'
import { Locations } from '../typeScript/locations'

type ChangeDataProps = {
  search?: boolean
  disableDefaultUI?: boolean
  mapContainerStyle?: MapContainerStyle
  zoom: number
  width?: string
  center?: Location
  locations?: Locations
  location?: Location
  isType?: string
  _id?: string
}

export const changeData = ({ search, disableDefaultUI, mapContainerStyle, zoom, width, center, locations, location, isType, _id }: ChangeDataProps) => {
  const data: ChangeData = {
    disableDefaultUI: disableDefaultUI === undefined,
    search: search === undefined,
    mapContainerStyle: mapContainerStyle || { height: "calc(100vh - 200px)", width: "100%" },
    zoom,
    control: locations ? 'MarkersMap' : 'MarkerQuery',
    width: width || '100%',
    center: center || { lat: 49.026151, lng: 31.483070 },
    location,
    locations,
    isType,
    _id
  }
  return data
}