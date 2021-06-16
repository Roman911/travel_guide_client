import React from "react"
import { useSelector } from 'react-redux'
import { Maps } from "../Components/Maps"
import { useLoadScript } from "@react-google-maps/api"
import { LoadingSpin } from "../../../Components"
import { Location } from '../../../typeScript/googleMaps'

type GoogleMapsProps = {
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
  const { locations } = useSelector((state: any) => state)
  const [ selectedPark, setSelectedPark ] = React.useState<null | string>(null)
  let libRef = React.useRef(libraries)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    // @ts-ignore
    libraries: libRef.current
  })
  const renderMap = () => <Maps
    setLatLnd={ props.setLatLnd }
    selectedPark={ selectedPark }
    setSelectedPark={ setSelectedPark }
    options={ props.options }
    locations={ locations }
    directions={ props.directions }
    width={ props.width }
  />

  if (loadError) return <div>Неможливо завантажити карту</div>

  return isLoaded ? renderMap() : <LoadingSpin />
}