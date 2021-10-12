import React from "react"
import { useFormContext } from "react-hook-form"
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { DirectionLocations } from "../Components"

type IDirectionsLocations = {
  endStartPoint?: boolean
  direction?: boolean
  height: string
}

export const DirectionsLocations: React.FC<IDirectionsLocations> = ({ endStartPoint, direction, height }): any => {
  const method = endStartPoint ? undefined : useFormContext()
  const endStart = endStartPoint !== undefined ? endStartPoint : method.watch('endStart')
  const { removePointToWaypoints, setEndDirection } = useActions()
  const { waypoints, legs } = useTypedSelector(state => state.directionLocations)
  const removeLocation = index => removePointToWaypoints(index)

  const handleClick = React.useCallback(() => {
    setEndDirection(!endStart)
  }, [ endStart ])

  return <DirectionLocations waypoints={ waypoints } removeLocation={ removeLocation } direction={ direction } legs={ legs } height={ height } handleClick={ handleClick } />
}