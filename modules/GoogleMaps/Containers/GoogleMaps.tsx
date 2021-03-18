import { useRouter } from "next/router"
import React, { useState } from "react"
import { Maps } from "../Components/Maps"
import { useLoadScript } from "@react-google-maps/api"
import { LoadingSpin } from "../../../Components"
import { ChangeData } from '../../../typeScript/googleMaps'

type GoogleMapsProps = {
  changeData?: ChangeData
  search: boolean
  location?: any
  locations?: any

  disableDefaultUI?: any
  click?: any
  width?: any
}

const libraries = ["places"]

export const GoogleMaps: React.FC<GoogleMapsProps> = ({ changeData, locations, location }) => {
  let libRef = React.useRef(libraries)
  const router = useRouter()
  const query = router.query
  const { _id, lat, lng, isType } = query
  const position = { lat: Number(lat), lng: Number(lng) }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    // @ts-ignore
    libraries: libRef.current
  })
  const [ selectedPark, setSelectedPark ] = useState<null | string>(null)
  const optionsLocation = isType ? { location: { position, isType, _id }, control: 'MarkerQuery' } : locations ? { location: locations, control: 'MarkersMap' } : { location, control: 'MarkerQuery' }

  const renderMap = () => {
    return <Maps changeData={ changeData } optionsLocation={ optionsLocation } selectedPark={ selectedPark } setSelectedPark={ setSelectedPark } />
  }

  if (loadError) {
    return <div>Неможливо завантажити карту</div>
  }

  return isLoaded ? renderMap() : <LoadingSpin />
}