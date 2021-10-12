import React from "react"
import { DirectionsRenderer, DirectionsService, InfoWindow } from "@react-google-maps/api"
import { useLazyQuery } from '@apollo/react-hooks'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { LOCATION } from './query'
import { InformWindowComponent } from "../Components"

type IDirections = {
  index?: number
  selectedPark: string
}

export const Directions: React.FC<IDirections> = ({ index, selectedPark }) => {
  const { addPoint, addPointToWaypoints, setLegs } = useActions()
  const { point, waypoints, endStart, travelMode, allDirections, createDirection } = useTypedSelector(state => state.directionLocations)
  const [ response, setResponse ] = React.useState(null)
  const [ setLocation, { data } ] = useLazyQuery(LOCATION)
  const dataLocation = data ? data.location : undefined
  const directionsOptions = {
    waypoints: index !== undefined ? allDirections[index].waypoints : waypoints,
    endStart: index !== undefined ? allDirections[index].endStart : endStart,
    travelMode: index !== undefined ? allDirections[index].travelMode : travelMode
  }

  React.useEffect(() => {
    if (dataLocation) {
      const [ lat, lng ] = dataLocation.coordinates
      addPoint({
        _id: dataLocation._id,
        location: { lat: Number(lat), lng: Number(lng) },
        typeMarker: 'coordinates',
        cover: dataLocation.cover,
        address: dataLocation.title,
        infoLocation: true
      })
    }
  }, [ dataLocation ])

  React.useEffect(() => {
    if (selectedPark) setLocation({ variables: { _id: selectedPark } })
  }, [ selectedPark ])

  const directionsCallback = React.useCallback((res) => {
    if (res !== null && res.status === 'OK') {
      setResponse(res)
      setLegs(res.routes[0].legs)
    } else {
      console.log('response: ', res)
    }
  }, [])

  const directionsServiceOptions = React.useMemo(() => {
    return {
      waypoints: directionsOptions.waypoints.length !== 0 ? directionsOptions.waypoints.map(i => { return { location: i.location } } ) : null,
      destination: directionsOptions.waypoints[directionsOptions.waypoints.length -1].location,
      origin: directionsOptions.waypoints[0].location,
      travelMode: directionsOptions.travelMode.length !== 0 ? directionsOptions.travelMode[0] === 'BICYCLING' ? 'WALKING' : directionsOptions.travelMode[0] : 'DRIVING'
    }
  }, [ directionsOptions.waypoints, directionsOptions.endStart, directionsOptions.travelMode ])

  const directionsRendererOptions = React.useMemo(() => {
    return {
      directions: response,
      suppressMarkers: true
    }
  }, [ response ])

  const addToWaypoints = () => addPointToWaypoints()
  const cancel = () => addPoint(null)

  return <>
    { directionsOptions.waypoints.length > 1 && <DirectionsService options={ directionsServiceOptions } callback={ directionsCallback } /> }
    { response !== null && <DirectionsRenderer options={ directionsRendererOptions } /> }
    { createDirection && point && <InfoWindow position={ point.location } onCloseClick={ () => cancel() }>
      <InformWindowComponent point={ point } addToWaypoints={ addToWaypoints } cancel={ cancel } />
    </InfoWindow>}
  </>
}