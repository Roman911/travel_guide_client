import React from "react"
import { Marker } from '@react-google-maps/api'

type MarkersMapProps = {
  rest: any
}

const MarkersMap: React.FC<MarkersMapProps> = ({ rest }): any => {
  const { options, setSelectedPark } = rest

  return options.map((park, index) => {
    const [ lat, lng ] = park.coordinates
    return <Marker
      key={ index }
      onClick={() => {
        setSelectedPark(park._id )
      }}
      position={{lat: Number(lat), lng: Number(lng)}}
      icon={{
        url: `${process.env.STATIC_IMAGES}/${park.isType}.png`
      }}
    />
  })
}

export default MarkersMap