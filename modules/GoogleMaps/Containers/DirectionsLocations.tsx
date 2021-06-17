import React from "react"
import { useFormContext } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { DirectionLocations } from "../Components"
import { directionLocations } from '../../../redux/actions'
import { Direction } from '../../../typeScript/directions'

interface RootState {
  directionLocations: Direction
}

export const DirectionsLocations: React.FC = () => {
  const { watch } = useFormContext()
  const endStart = watch('endStart')
  const dispatch = useDispatch()
  const { directionLocations: { waypoints }} = useSelector((state: RootState) => state)

  const removeLocation = (index) => {
    dispatch(directionLocations.removePointToWaypoints(index))
  }

  React.useEffect(() => {
    dispatch(directionLocations.selectEndDirection(endStart))
  }, [ endStart ])

  return <DirectionLocations waypoints={ waypoints } removeLocation={ removeLocation } endStart={ endStart } />
}