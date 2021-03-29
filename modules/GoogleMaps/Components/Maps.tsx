import React, { useCallback, useRef } from "react"
import dynamic from "next/dynamic"
import { GoogleMap } from '@react-google-maps/api'
import { MarkersController } from "./MarkersController"
import { LocationInformation } from "../Containers"
import { LoadingSpin } from '../../../Components'
import { ChangeData, Location } from '../../../typeScript/googleMaps'

type SearchProps = {
  panTo: any
}

type MapsProps = {
  changeData: ChangeData
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

export const Maps: React.FC<MapsProps> = ({ changeData, selectedPark, setSelectedPark, click, options }) => {
  const { disableDefaultUI, search, mapContainerStyle, center, zoom, control } = changeData
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
      <MarkersController control={ control } changeData={ changeData } setSelectedPark={ setSelectedPark } options={ options } />
    </GoogleMap>
  </div>
}