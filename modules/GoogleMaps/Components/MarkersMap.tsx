import React from "react"
import { Marker } from '@react-google-maps/api'
import { ChangeData } from "../../../typeScript/googleMaps"

type MarkersMapProps = {
  rest: {
    changeData: ChangeData
    setSelectedPark: (_id) => void
  }
}

const MarkersMap: React.FC<MarkersMapProps> = ({ rest: { changeData, setSelectedPark } }): any => {
  const { locations } = changeData

  return locations.map((park) => {
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