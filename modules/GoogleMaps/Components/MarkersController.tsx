import React from "react"
import dynamic from "next/dynamic"
import {ChangeData, Location} from "../../../typeScript/googleMaps"

type MarkersMapProps = {
  rest: {
    changeData: ChangeData
    setSelectedPark: (_id) => void
    options?: {
      _id?: string
      isType: string
      location: Location
    }
  }
}

type MarkerProps = {
  control: string
  changeData: any
  setSelectedPark: (_id) => void
  options?: {
    _id?: string
    isType: string
    location: Location
  }
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
    default: return null
  }
}