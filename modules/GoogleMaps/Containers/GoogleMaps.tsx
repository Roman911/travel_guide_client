import React from "react"
import { useLoadScript } from "@react-google-maps/api"
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Maps } from "../Components/Maps"
import { LoadingSpin } from "../../../Components"
import { Location } from '../../../typeScript/googleMaps'

type GoogleMapsProps = {
  index?: number
  disableDefaultUI?: boolean
  search?: boolean
  width?: string
  setLatLnd?: any
  directions?: boolean
  options?: {
    _id?: string
    isType: string
    location: Location
  }
}

const libraries = ["places"]

export const GoogleMaps: React.FC<GoogleMapsProps> = (props): any => {
  const { locations } = useTypedSelector(state => state)
  let libRef = React.useRef(libraries)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    // @ts-ignore
    libraries: libRef.current
  })
  const renderMap = () => <Maps
    index={ props.index }
    setLatLnd={ props.setLatLnd }
    options={ props.options }
    locations={ locations }
    directions={ props.directions }
    width={ props.width }
  />

  if (loadError) return <p>Неможливо завантажити карту</p>

  return isLoaded ? renderMap() : <LoadingSpin />
}