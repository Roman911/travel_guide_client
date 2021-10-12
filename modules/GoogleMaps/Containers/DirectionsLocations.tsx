import React from "react"
import { useFormContext } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { DirectionLocations } from "../Components"
import { DirectionLocationsActionCreators } from '../../../redux/actionCreators'

type IDirectionsLocations = {
  endStartPoint?: boolean
  direction?: boolean
  height: string
}

export const DirectionsLocations: React.FC<IDirectionsLocations> = ({ endStartPoint, direction, height }): any => {
  const method = endStartPoint ? undefined : useFormContext()
  const endStart = endStartPoint !== undefined ? endStartPoint : method.watch('endStart')
  const dispatch = useDispatch()
  const { waypoints, legs } = useTypedSelector(state => state.directionLocations)
  const removeLocation = index => dispatch(DirectionLocationsActionCreators.removePointToWaypoints(index))

  const handleClick = React.useCallback(() => {
    dispatch(DirectionLocationsActionCreators.setEndDirection(!endStart))
  }, [ endStart ])

  return <DirectionLocations waypoints={ waypoints } removeLocation={ removeLocation } direction={ direction } legs={ legs } height={ height } handleClick={ handleClick } />
}