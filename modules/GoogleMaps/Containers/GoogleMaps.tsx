import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Maps } from "../Components/Maps"
import { useLoadScript } from "@react-google-maps/api"
import { LoadingSpin } from "../../../Components"
import { locationsActions } from "../../../redux/actions"
import { Location } from '../../../typeScript/googleMaps'
import { ParsedUrlQuery } from "querystring"

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
  const dispatch = useDispatch()
  const { locations } = useSelector(state => state)
  const [ selectedPark, setSelectedPark ] = useState<null | string>(null)
  let libRef = React.useRef(libraries)
  const router = useRouter()
  const query: ParsedUrlQuery = router.query
  const { lat, lng, isType, _id } = query
  const position = { lat: Number(lat), lng: Number(lng) }
  const queryData = isType && {
    zoom: 10,
    center: position,
    location: position,
    isType,
    _id,
    control: 'MarkerQuery'
  }

  useEffect(() => {
    dispatch(locationsActions.changeData(queryData))
  }, [])

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    // @ts-ignore
    libraries: libRef.current
  })
  const renderMap = () => <Maps click={ props.click } selectedPark={ selectedPark } setSelectedPark={ setSelectedPark } options={ props.options } locations={ locations } />

  if (loadError) return <div>Неможливо завантажити карту</div>

  return isLoaded ? renderMap() : <LoadingSpin />
}