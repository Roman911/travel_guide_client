import React from "react"
import { Marker } from '@react-google-maps/api'

type MarkerQueryProps = {
  rest: any
}

const MarkerQuery: React.FC<MarkerQueryProps> = ({ rest }) => {
  const { options: { position, isType, _id }, setSelectedPark } = rest

  return <Marker
    position={ position }
    icon={ isType && isType !== 'other' ? { url: `${process.env.STATIC_IMAGES}/${isType}.png` } : null }
    onClick={_id ? () => {
      setSelectedPark(_id )
    } : null}
  />
}

export default MarkerQuery