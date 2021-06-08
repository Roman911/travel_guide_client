import React from "react"
import { DirectionsRenderer, DirectionsService, InfoWindow,  } from "@react-google-maps/api"
import { useDispatch, useSelector } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'
import { LOCATION } from './query'
import { InformWindowComponent } from "../Components"
import { directionLocations } from "../../../redux/actions"

type DirectionsProps = {
  selectedPark: string
}

export const Directions: React.FC<DirectionsProps> = ({ selectedPark }) => {
  const dispatch = useDispatch()
  const { point, waypoints, endStart } = useSelector(state => state.directionLocations)
  const [ response, setResponse ] = React.useState(null)
  const [ setLocation, { data } ] = useLazyQuery(LOCATION)
  const dataLocation = data ? data.location : undefined

  React.useEffect(() => {
    if (dataLocation) {
      const [ lat, lng ] = dataLocation.coordinates
      dispatch(directionLocations.addPoint({
        location: { lat: Number(lat), lng: Number(lng) },
        typeMarker: 'coordinates',
        cover: dataLocation.cover,
        title: dataLocation.title,
        infoLocation: true
      }))
    }
  }, [ dataLocation ])

  React.useEffect(() => {
    if (selectedPark) {
      setLocation({ variables: { _id: selectedPark } })
    }
  }, [ selectedPark ])

  const directionsCallback = React.useCallback((res) => {
    if (res !== null && res.status === 'OK') {
      setResponse(res)
    } else {
      console.log('response: ', res)
    }
  }, [])

  const directionsServiceOptions = React.useMemo(() => {
    return {
      waypoints: waypoints.length !== 0 ? waypoints.map(i => { return { location: i.location } } ) : null,
      destination: endStart ? waypoints[0].location : waypoints.length > 1 && waypoints[waypoints.length -1].location,
      origin: waypoints[0].location,
      travelMode: 'DRIVING',
    }
  }, [ waypoints, endStart ])

  const directionsRendererOptions = React.useMemo(() => {
    return {
      directions: response,
    }
  }, [ response ])

  const addToWaypoints = () => {
    dispatch(directionLocations.addPointToWaypoints())
  }

  const cancel = () => {
    dispatch(directionLocations.addPoint(null))
  }

  return <>
    <DirectionsService options={ directionsServiceOptions } callback={ directionsCallback }/>
    { response !== null && <DirectionsRenderer options={ directionsRendererOptions } /> }
    { point && <InfoWindow position={ point.location } onCloseClick={ () => cancel() }>
      <InformWindowComponent point={ point } addToWaypoints={ addToWaypoints } cancel={ cancel } />
    </InfoWindow>}
  </>
}