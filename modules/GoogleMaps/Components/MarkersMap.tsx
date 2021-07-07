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

  return allLocations.map((park, index) => {
    const { _id, isType, coordinates } = park
    const [ lat, lng ] = coordinates
    return <Marker
      key={ index }
      onClick={() => {
        setSelectedPark(_id )
      }}
      position={{lat: Number(lat), lng: Number(lng)}}
      icon={{
        url: `/static/images/${isType}.png`
      }}
      label={ isType === 'other' && String(index +1) }
    />
  })
}

export default MarkersMap