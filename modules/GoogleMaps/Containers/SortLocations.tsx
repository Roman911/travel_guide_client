import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useLazyQuery } from '@apollo/client'
import { SortLocation } from "../Components"
import { googleMapsActions } from '../../../redux/actions'
import { locationsSortQuery } from './querys'
import { GoogleMapsProps } from "../../../typeScript/googleMaps"
import { locationsQuery } from "../../../apollo/queries/maps"

export const SortLocations: React.FC = (): any => {
  const [ selectLocationsTrue, setSelectLocationsTrue ] = useState(false)
  const dispatch = useDispatch()
  const { selectLocations } = useSelector((state: { googleMaps: GoogleMapsProps }) => state.googleMaps)
  const [ getLocations, { data } ] = useLazyQuery(locationsSortQuery)
  const [ getAllLocations, { data: dataAll } ] = useLazyQuery(locationsQuery)
  const locationsSort = data ? data.locationsSortByType : undefined
  const locationsAll = dataAll ? dataAll.allLocations : undefined

  useEffect(() => {
    dispatch(googleMapsActions.setLocationsSort(locationsSort))
  }, [locationsSort])

  useEffect(() => {
    dispatch(googleMapsActions.setLocationsSort(locationsAll))
  }, [locationsAll, selectLocationsTrue])

  const handleClick = (isType, select) => {
    const selectLocation = select !== undefined ? typeof select === 'boolean' ? select : select.select : true
    const dataLoc = {
      isType,
      select: selectLocation
    }
    if (typeof select === "boolean") {
      if (select) {
        getLocations({ variables: { type: isType } })
      }
      dispatch(googleMapsActions.addedLocationType(dataLoc))
    } else {
      getLocations({ variables: { type: isType } })
      dispatch(googleMapsActions.changeLocationTypeSort(dataLoc))
      if (select !== undefined) {
        if (selectLocations.length === 0) {
          getAllLocations()
          setSelectLocationsTrue(prev => !prev)
        }
      }
    }
  }

  return <SortLocation handleClick={ handleClick } selectLocations={ selectLocations }/>
}