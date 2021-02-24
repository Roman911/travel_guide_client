import React from "react"
import dynamic from "next/dynamic"

type MarkersMapProps = {
  rest: any
}

type MarkerProps = {
  control: string
  options?: any
  setSelectedPark?: any
}

const MarkersMap = dynamic<MarkersMapProps>(() => import('./MarkersMap') as any)
const MarkerQuery = dynamic(() => import('./MarkerQuery') as any)

export const MarkersController: React.FC<MarkerProps> = ({ control, ...rest }): any => {
  switch (control) {
    case 'MarkersMap': {
      return <MarkersMap rest={ rest } />
    }
    case 'MarkerQuery': {
      return <MarkerQuery />
    }
    default:
      return null
  }
}