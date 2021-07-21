import React from "react"
import { useFormContext } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { DirectionLocations } from "../Components"
import { directionLocations } from '../../../redux/actions'
import { Direction } from '../../../typeScript/directions'

type DirectionsLocationsProps = {
  endStartPoint?: boolean
  direction?: boolean
  height: string
}

interface RootState {
  directionLocations: Direction
}

export const DirectionsLocations: React.FC<DirectionsLocationsProps> = ({ endStartPoint, direction, height }): any => {
  const method = endStartPoint ? undefined : useFormContext()
  const endStart = endStartPoint !== undefined ? endStartPoint : method.watch('endStart')
  const dispatch = useDispatch()
  const { directionLocations: { waypoints, legs }} = useSelector((state: RootState) => state)
  const removeLocation = index => dispatch(directionLocations.removePointToWaypoints(index))

  const handleClick = React.useCallback(() => {
    dispatch(directionLocations.selectEndDirection(!endStart))
  }, [ endStart ])

  return <DirectionLocations waypoints={ waypoints } removeLocation={ removeLocation } direction={ direction } legs={ legs } height={ height } handleClick={ handleClick } />
}