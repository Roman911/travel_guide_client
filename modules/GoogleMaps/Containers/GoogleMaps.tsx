import { useRouter } from "next/router"
import React, { useState } from "react"
import { Maps } from "../Components/Maps"
import { useLoadScript } from "@react-google-maps/api"
import { LoadingSpin } from "../../../Components"
import { changeData } from '../../../utils/changeData'
import { MapContainerStyle, Location } from '../../../typeScript/googleMaps'
import { ParsedUrlQuery } from "querystring"
import { Locations } from "../../../typeScript/locations"

type GoogleMapsProps = {
  disableDefaultUI?: boolean
  search?: boolean
  mapContainerStyle?: MapContainerStyle
  zoom: number
  width?: string
  center?: Location
  locations?: Locations
  location?: Location
  isType?: string
  click?: (event) => void
  options?: {
    _id?: string
    isType: string
    location: Location
  }
}

const libraries = ["places"]

export const GoogleMaps: React.FC<GoogleMapsProps> = (props): any => {
  const [ selectedPark, setSelectedPark ] = useState<null | string>(null)
  let libRef = React.useRef(libraries)
  const router = useRouter()
  const query: ParsedUrlQuery = router.query
  const { lat, lng, isType, _id } = query
  const position = { lat: Number(lat), lng: Number(lng) }
  const queryData = isType ? {
    zoom: 10,
    center: position,
    location: position,
    isType,
    _id
  } : undefined

  // @ts-ignore
  const newChangeData = changeData( isType ? { ...queryData } : { ...props } )
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    // @ts-ignore
    libraries: libRef.current
  })
  const renderMap = () => <Maps changeData={ newChangeData } click={ props.click } selectedPark={ selectedPark } setSelectedPark={ setSelectedPark } options={ props.options } />

  if (loadError) return <div>Неможливо завантажити карту</div>

  return isLoaded ? renderMap() : <LoadingSpin />
}