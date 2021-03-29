import React from "react"
import { Marker } from '@react-google-maps/api'
import { ChangeData, Location } from '../../../typeScript/googleMaps'

type MarkerQueryProps = {
  rest: {
    changeData: ChangeData
    setSelectedPark?: (_id) => void
    options?: {
      _id?: string
      isType: string
      location: Location
    }
  }
}

const MarkerQuery: React.FC<MarkerQueryProps> = ({ rest }) => {
  const { changeData, options, setSelectedPark } = rest
  const { _id, isType, location } = options ? options : changeData

  return <Marker
    position={ location }
    icon={ isType && isType !== 'other' ? { url: `/static/images/${isType}.png` } : null }
    onClick={ _id ? () => {
      setSelectedPark(_id )
    } : null }
  />
}

export default MarkerQuery