import React from "react"
import { Marker } from '@react-google-maps/api'
import { Locations } from '../../../typeScript/locations'

type MarkersMapProps = {
  rest: {
    options: Locations
    setSelectedPark: (_id) => void
  }
}

const MarkersMap: React.FC<MarkersMapProps> = ({ rest: { options, setSelectedPark } }): any => {
  return options.map((park) => {
    const { _id, isType, coordinates } = park
    const [ lat, lng ] = coordinates
    return <Marker
      key={ _id }
      onClick={() => {
        setSelectedPark(_id )
      }}
      position={{lat: Number(lat), lng: Number(lng)}}
      icon={{
        url: `${process.env.STATIC_IMAGES}/${isType}.png`
      }}
    />
  })
}

export default MarkersMap