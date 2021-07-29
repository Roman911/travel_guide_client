import React from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { useLazyQuery, useQuery } from "@apollo/react-hooks"
import { ParsedUrlQuery } from "querystring"
import { GoogleMaps } from "./GoogleMaps"
import { SortLocations } from "./SortLocations"
import { ALL_LOCATIONS, LOCATIONS_SORT_BY_ID, USER_DATA_FOR_MAPS } from "../../../apollo/queries"
import { locationsActions } from "../../../redux/actions"
import { LoadingSpin } from "../../../Components"
import { User } from "../../../typeScript/user"

interface RootState {
  user: User
  locations: {
    locationsUserList: string
  }
}

export const GoogleMapsMain: React.FC = (): any => {
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

  React.useEffect(() => {
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

  React.useEffect(() => {
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

  React.useEffect(() => {
    if (_id) setUserData()
  }, [ userData ])

  if (loading) return <LoadingSpin />
  if (error) return error
  const { allLocations } = data

  return <>
    <GoogleMaps disableDefaultUI={ false } />
    <SortLocations url='/maps' />
  </>
}