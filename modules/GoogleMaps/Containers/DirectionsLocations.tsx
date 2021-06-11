import React from "react"
import { useFormContext } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { DirectionLocations } from "../Components"
import { directionLocations } from '../../../redux/actions'

export const DirectionsLocations: React.FC = () => {
  const { watch } = useFormContext()
  const endStart = watch('endStart')
  const dispatch = useDispatch()
  const { waypoints } = useSelector(state => state.directionLocations)

  const removeLocation = (index) => {
    dispatch(directionLocations.removePointToWaypoints(index))
  }

  React.useEffect(() => {
    dispatch(directionLocations.selectEndDirection(endStart))
  }, [ endStart ])

  return <DirectionLocations waypoints={ waypoints } removeLocation={ removeLocation } endStart={ endStart } />
}