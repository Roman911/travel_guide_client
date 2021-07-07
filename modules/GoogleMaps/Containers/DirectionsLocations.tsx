import React from "react"
import { useFormContext } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { DirectionLocations } from "../Components"
import { directionLocations } from '../../../redux/actions'
import { Direction } from '../../../typeScript/directions'

type DirectionsLocationsProps = {
  endStartPoint?: boolean
  direction?: boolean
}

interface RootState {
  directionLocations: Direction
}

export const DirectionsLocations: React.FC<DirectionsLocationsProps> = ({ endStartPoint, direction }): any => {
  const method = endStartPoint ? undefined : useFormContext()
  const endStart = endStartPoint !== undefined ? endStartPoint : method.watch('endStart')
  const dispatch = useDispatch()
  const { directionLocations: { waypoints }} = useSelector((state: RootState) => state)

  const removeLocation = (index) => {
    dispatch(directionLocations.removePointToWaypoints(index))
  }

  React.useEffect(() => {
    dispatch(directionLocations.selectEndDirection(endStart))
  }, [ endStart ])

  return <DirectionLocations waypoints={ waypoints } removeLocation={ removeLocation } endStart={ endStart } direction={ direction } />
}