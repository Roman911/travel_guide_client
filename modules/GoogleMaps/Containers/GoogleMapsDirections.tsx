import React from "react"
import {GoogleMap, DirectionsService, DirectionsRenderer, useLoadScript } from '@react-google-maps/api'
import {LocationInformation} from "./LocationInformation";
import {MarkersController} from "../Components";
import { LoadingSpin } from "../../../Components"

const libraries = ["places"]

export const GoogleMapsDirections: React.FC = () => {
  const [response, setResponse] = React.useState(null)
  const travelMode = 'DRIVING'
  const origin = 'Київ'
  const destination = 'Одеса'


  const mapContainerStyle = { height: "calc(100vh - 200px)", width: "100%" }
  const center = { lat: 49.026151, lng: 31.483070 }
  let libRef = React.useRef(libraries)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    // @ts-ignore
    libraries: libRef.current
  })

  const directionsCallback = React.useCallback((res) => {
    console.log(res)

    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res)
      } else {
        console.log('response: ', res)
      }
    }
  }, [])


  const directionsServiceOptions = React.useMemo(() => {
    return {
      destination: destination,
      origin: origin,
      waypoints: [{location: { lat: 49.026151, lng: 31.483070 }}],
      travelMode: travelMode,
    }
  }, [])

  const directionsRendererOptions = React.useMemo(() => {
    return {
      directions: response,
    }
  }, [ response ])

  console.log(directionsRendererOptions)

  const renderMap = () => <div style={{ position: 'relative', width: '100%' }}>
    <GoogleMap
      id='direction-example'
      mapContainerStyle={ mapContainerStyle }
      zoom={ 6 }
      center={ center }
    >
      <DirectionsService
        options={directionsServiceOptions}
        callback={directionsCallback}
      />

      {response !== null && (
        <DirectionsRenderer options={directionsRendererOptions} />
      )}
    </GoogleMap>
  </div>


  if (loadError) return <div>Неможливо завантажити карту</div>

  return isLoaded ? renderMap() : <LoadingSpin />
}