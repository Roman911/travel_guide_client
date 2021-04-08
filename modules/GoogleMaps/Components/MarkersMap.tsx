import React from "react"
import { Marker } from '@react-google-maps/api'

type MarkersMapProps = {
  rest: {
    locations: any
    setSelectedPark: (_id) => void
  }
}

const MarkersMap: React.FC<MarkersMapProps> = ({ rest: { locations, setSelectedPark } }): any => {
  const { locations: allLocations } = locations

  return allLocations.map((park) => {
    const { _id, isType, coordinates } = park
    const [ lat, lng ] = coordinates
    return <Marker
      key={ _id }
      onClick={() => {
        setSelectedPark(_id )
      }}
      position={{lat: Number(lat), lng: Number(lng)}}
      icon={{
        url: `/static/images/${isType}.png`
      }}
    />
  })
}

export default MarkersMap