import React, { useEffect } from "react"
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { useDispatch, useSelector } from 'react-redux'
import { ALL_LOCATIONS, USER_DATA_FOR_MAPS, LOCATIONS_SORT_BY_ID } from '../apollo/queries'
import { LoadingSpin, MainLayout } from "../Components"
import { GoogleMaps, SortLocations } from "../modules"
import { locationsActions } from '../redux/actions'
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { User } from "../typeScript/user"

interface RootState {
  user: User
  locations: {
    locationsUserList: string
  }
}

const Map: React.FC = (): any => {
  const dispatch = useDispatch()
  const { user: { data: userData }, locations: { locationsUserList } } = useSelector((state: RootState) => state)
  const _id = userData ? userData._id : undefined
  const router = useRouter()
  const query: ParsedUrlQuery = router.query
  const { lat, lng, isType, _id: locationId } = query
  const position = { lat: Number(lat), lng: Number(lng) }
  const [ setUserData, { data: userSelectedLocations } ] = useLazyQuery(USER_DATA_FOR_MAPS, { variables: { _id } })
  const [ setUserLocations, { data: locationsSortById } ] = useLazyQuery(LOCATIONS_SORT_BY_ID)
  const { loading, error, data } = useQuery(ALL_LOCATIONS)

  useEffect(() => {
    const options = isType ? {
      zoom: 10,
      center: position,
      location: position,
      isType,
      _id: locationId,
      control: 'MarkerQuery',
    } : {
      zoom: 6,
      center: { lat: 49.026151, lng: 31.483070 },
      control: 'MarkersMap'
    }
    dispatch(locationsActions.changeData({
      mapContainerStyle: { height: "calc(100vh - 200px)", width: "100%" },
      disableDefaultUI: false,
      search: true,
      ...options
    }))
  }, [ isType ])

  useEffect(() => {
    if (locationsUserList) {
      setUserLocations({ variables: { _id: locationsUserList } })
      if (locationsSortById) {
        dispatch(locationsActions.changeData({ allLocations, locations: locationsSortById.locationsSortById }))
      }
    } else if (data) {
      const locations = locationsUserList ? allLocations.filter(i => locationsUserList.includes(i._id)) : allLocations
      dispatch(locationsActions.changeData({ allLocations, locations }))
      if (userSelectedLocations) dispatch(locationsActions.userLocationsChange(userSelectedLocations.user.selectedLocations))
    }
  }, [ data, locationsSortById, userSelectedLocations ])

  useEffect(() => {
    if (_id) setUserData()
  }, [ userData ])

  if (loading) return <LoadingSpin />
  if (error) return error
  const { allLocations } = data

  return <MainLayout title='Maps' header='Карти' >
    <div style={{ position: 'relative' }}>
      <GoogleMaps disableDefaultUI={ false } />
      <SortLocations url='/maps' />
    </div>
  </MainLayout>
}

export default Map