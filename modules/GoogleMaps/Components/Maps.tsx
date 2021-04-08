import React, { useCallback, useRef } from "react"
import dynamic from "next/dynamic"
import { GoogleMap } from '@react-google-maps/api'
import { MarkersController } from "./MarkersController"
import { LocationInformation } from "../Containers"
import { LoadingSpin } from '../../../Components'
import { Location } from '../../../typeScript/googleMaps'

type SearchProps = {
  panTo: any
}

type MapsProps = {
  locations: any
  selectedPark: null | string
  setSelectedPark: (_id: string | null) => void
  click?: (event) => void
  options?: {
    _id?: string
    isType: string
    location: Location
  }
}

const Search = dynamic<SearchProps>(() => import('../Containers/Search') as any, { loading: () => <LoadingSpin /> })

export const Maps: React.FC<MapsProps> = ({ selectedPark, setSelectedPark, click, options, locations }) => {
  const { disableDefaultUI, search, mapContainerStyle, center, zoom, control } = locations
  const mapRef = useRef(null)
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(12)
  }, [])

  return <div style={{ position: 'relative', width: '100%' }}>
    { search && <Search panTo={ panTo } /> }
    <GoogleMap
      mapContainerStyle={ mapContainerStyle }
      zoom={ zoom }
      center={ center }
      options={{ disableDefaultUI }}
      onLoad={ onMapLoad }
      onClick={ click ? event => click(event) : null }
    >
      { selectedPark && <LocationInformation _id={ selectedPark } selectedPark={ selectedPark } setSelectedPark={ setSelectedPark } /> }
      <MarkersController control={ control } setSelectedPark={ setSelectedPark } options={ options } locations={ locations } />
    </GoogleMap>
  </div>
}