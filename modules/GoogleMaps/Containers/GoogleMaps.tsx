import React, { useState } from "react"
import { useSelector } from 'react-redux'
import { Maps } from "../Components/Maps"
import { useLoadScript } from "@react-google-maps/api"
import { LoadingSpin } from "../../../Components"
import { Location } from '../../../typeScript/googleMaps'

type GoogleMapsProps = {
  disableDefaultUI?: boolean
  search?: boolean
  width?: string
  click?: (event) => void
  options?: {
    _id?: string
    isType: string
    location: Location
  }
}

const libraries = ["places"]

export const GoogleMaps: React.FC<GoogleMapsProps> = (props): any => {
  const { locations } = useSelector(state => state)
  const [ selectedPark, setSelectedPark ] = useState<null | string>(null)
  let libRef = React.useRef(libraries)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    // @ts-ignore
    libraries: libRef.current
  })
  const renderMap = () => <Maps click={ props.click } selectedPark={ selectedPark } setSelectedPark={ setSelectedPark } options={ props.options } locations={ locations } />

  if (loadError) return <div>Неможливо завантажити карту</div>

  return isLoaded ? renderMap() : <LoadingSpin />
}