import React, { useCallback, useRef } from "react"
import dynamic from "next/dynamic"
import { GoogleMap } from '@react-google-maps/api'
import { MarkersController } from "./MarkersController"
import { LocationInformation } from "../Containers"
import { LoadingSpin } from '../../../Components'
import { ChangeData, OptionsLocation } from '../../../typeScript/googleMaps'

type SearchProps = {
  panTo: any
}

type MapsProps = {
  changeData: ChangeData
  optionsLocation: OptionsLocation
  selectedPark: null | string
  setSelectedPark: (_id: string | null) => void
}

const Search = dynamic<SearchProps>(() => import('../Containers/Search') as any, {
  loading: () => <LoadingSpin />
})

export const Maps: React.FC<MapsProps> = ({ changeData, optionsLocation, selectedPark, setSelectedPark }) => {
  const { disableDefaultUI, mapContainerStyle, center, zoom } = changeData
  const { control, location } = optionsLocation

  const mapRef = useRef(null)
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(12)
  }, [])

  const search = true

  return <div style={{ position: 'relative', width: '100%' }}>
    { search && <Search panTo={ panTo } /> }
    <GoogleMap
      mapContainerStyle={ mapContainerStyle }
      zoom={ zoom }
      center={ center }
      options={{ disableDefaultUI }}
      onLoad={ onMapLoad }
    >
      { selectedPark && <LocationInformation _id={ selectedPark } selectedPark={ selectedPark } setSelectedPark={ setSelectedPark } /> }
      <MarkersController control={ control } options={ location } setSelectedPark={ setSelectedPark } />
    </GoogleMap>
  </div>
}