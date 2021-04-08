import React, { useEffect } from "react"
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { useDispatch, useSelector } from 'react-redux'
import { ALL_LOCATIONS, USER_DATA_FOR_MAPS } from '../apollo/queries'
import { LoadingSpin, MainLayout } from "../Components"
import { GoogleMaps, SortLocations } from "../modules"
import { locationsActions } from '../redux/actions'
import { User } from "../typeScript/user"

const Map: React.FC = (): any => {
  const dispatch = useDispatch()
  const { data: userData } = useSelector((state: { user: User }) => state.user)
  const _id = userData ? userData._id : undefined
  const [ setUserData, { data: userSelectedLocations } ] = useLazyQuery(USER_DATA_FOR_MAPS, { variables: { _id } })
  const { loading, error, data } = useQuery(ALL_LOCATIONS)
  const options = {
    mapContainerStyle: { height: "calc(100vh - 200px)", width: "100%" },
    disableDefaultUI: false,
    zoom: 6,
    search: true,
    center: { lat: 49.026151, lng: 31.483070 },
    control: 'MarkersMap'
  }

  useEffect(() => {
    dispatch(locationsActions.changeData(options))
    if (data) {
      dispatch(locationsActions.setData(allLocations))
    }
  }, [ data ])

  useEffect(() => {
    if (_id) setUserData()
  }, [ userData ])

  useEffect(() => {
    if (userSelectedLocations) dispatch(locationsActions.userLocationsChange(userSelectedLocations.user.selectedLocations))
  }, [userSelectedLocations])

  if (loading) return <LoadingSpin />
  if (error) return error
  const { allLocations } = data

  return <MainLayout title='Maps' header='Карти' >
    <div style={{ position: 'relative' }}>
      <GoogleMaps disableDefaultUI={ false } />
      <SortLocations />
    </div>
  </MainLayout>
}

export default Map