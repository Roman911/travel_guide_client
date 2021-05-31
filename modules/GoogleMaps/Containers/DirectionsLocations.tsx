import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { DirectionLocations } from "../Components"
import { directionLocations } from '../../../redux/actions'

type DirectionsLocationsProps = {
  formik: any
}

export const DirectionsLocations: React.FC<DirectionsLocationsProps> = ({ formik }) => {
  const { values: { endStart } } = formik
  const dispatch = useDispatch()
  const { waypoints } = useSelector(state => state.directionLocations)

  const removeLocation = (index) => {
    dispatch(directionLocations.removePointToWaypoints(index))
  }

  return <DirectionLocations waypoints={ waypoints } removeLocation={ removeLocation } endStart={ endStart } />
}