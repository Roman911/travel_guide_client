import React from "react"
import dynamic from "next/dynamic"
import { Locations, Location } from "../../../typeScript/locations"

type MarkersMapProps = {
  rest: {
    options: Locations | Location
    setSelectedPark: (_id) => void
  }
}

type MarkerProps = {
  control: string
  options: any
  setSelectedPark: (_id) => void
}

const MarkersMap = dynamic<MarkersMapProps>(() => import('./MarkersMap') as any)
const MarkerQuery = dynamic<MarkersMapProps>(() => import('./MarkerQuery') as any)

export const MarkersController: React.FC<MarkerProps> = ({ control, ...rest }): any => {
  switch (control) {
    case 'MarkersMap': {
      return <MarkersMap rest={ rest } />
    }
    case 'MarkerQuery': {
      return <MarkerQuery rest={ rest } />
    }
    default:
      return null
  }
}