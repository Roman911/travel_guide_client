import React from "react"
import dynamic from 'next/dynamic'
import { useDispatch } from 'react-redux'
import { GoogleMap } from '@react-google-maps/api'
import { getGeocode } from "use-places-autocomplete"
import { MarkersController } from "./MarkersController"
import { LocationInformation } from "../Containers"
import { LoadingSpin } from '../../../Components'
import { Location } from '../../../typeScript/googleMaps'
import { Directions } from "../Containers/Directions"
import { directionLocations } from '../../../redux/actions'

type SearchProps = {
  panTo: any
}

type MapsProps = {
  index?: number
  locations: any
  selectedPark: null | string
  setSelectedPark: (_id: string | null) => void
  directions?: boolean
  setLatLnd?: any
  width?: string
  options?: {
    _id?: string
    isType: string
    location: Location
  }
}

const Search = dynamic<SearchProps>(() => import('../Containers/Search') as any, { loading: () => <LoadingSpin /> })

export const Maps: React.FC<MapsProps> = ({ index, selectedPark, setSelectedPark, setLatLnd, options, locations, directions, width }) => {
  const dispatch = useDispatch()
  const { disableDefaultUI, search, mapContainerStyle, center, zoom, control } = locations
  const mapRef = React.useRef(null)
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
  }, [])

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(12)
  }, [])

  const handleClick = React.useCallback(event => {
    const location = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
    if (setLatLnd) {
      setLatLnd(location)
    } else {
      getGeocode({ location: location }).then(r => {
        const address = r[0].formatted_address.split(' ').filter(i => !['Unnamed', 'Road,'].includes(i))
        const addressIndex = address.indexOf('Украина,')
        const newAddress = addressIndex >= 0 ? address.slice(0, addressIndex).concat('Украина') : address
        dispatch(directionLocations.addPoint({
          location,
          address: newAddress.join(' '),
          typeMarker: 'location',
          infoLocation: false
        }))
      })
    }
  }, [])

  return <div style={{ position: 'relative', width: width || '100%' }}>
    { search && <Search panTo={ panTo } /> }
    <GoogleMap
      mapContainerStyle={ mapContainerStyle }
      zoom={ zoom }
      center={ center }
      options={{ disableDefaultUI }}
      onLoad={ onMapLoad }
      onClick={ event => handleClick(event) }
    >
      { selectedPark && !directions && <LocationInformation _id={ selectedPark } selectedPark={ selectedPark } setSelectedPark={ setSelectedPark } /> }
      <MarkersController control={ control } setSelectedPark={ setSelectedPark } options={ options } locations={ locations } />
      { directions && <Directions index={ index } selectedPark={ selectedPark } /> }
    </GoogleMap>
  </div>
}