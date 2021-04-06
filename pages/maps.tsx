import React, { useEffect, useState } from "react"
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'
import { ALL_LOCATIONS, USER_DATA_FOR_MAPS } from '../apollo/queries'
import { LoadingSpin, MainLayout } from "../Components"
import { GoogleMaps, SortLocations } from "../modules"
import { User } from "../typeScript/user"

const Map: React.FC = (): any => {
  const [ locations, setLocations ] = useState(undefined)
  const [ locationsChange, setLocationsChange ] = useState([])
  const { data: userData } = useSelector((state: { user: User }) => state.user)
  const _id = userData ? userData._id : undefined
  const [ setUserData, { data: userSelectedLocations } ] = useLazyQuery(USER_DATA_FOR_MAPS, { variables: { _id } })
  const { loading, error, data } = useQuery(ALL_LOCATIONS)

  useEffect(() => {
    if (data) setLocations(allLocations)
  }, [ data ])

  useEffect(() => {
    if (_id) setUserData()
  }, [userData])

  useEffect(() => {
    if (userSelectedLocations) setLocationsChange(userSelectedLocations.user.selectedLocations)
  }, [userSelectedLocations])

  useEffect(() => {
    if (locationsChange.length !== 0) {
      if (locationsChange.filter(item => item.select).length === 0) {
        const locationsSelectedFilter = locationsChange.filter(i => !i.select).map(i => i.type)
        setLocations(locations.filter(item => !locationsSelectedFilter.includes(item.isType)))
      } else {
        const locationsSelectedFilter = locationsChange.filter(i => i.select).map(i => i.type)
        setLocations(allLocations.filter(item => locationsSelectedFilter.includes(item.isType)))
      }
    } else setLocations(allLocations)
  }, [locationsChange])

  const resetLocations = () => {
    setLocations(allLocations)
    setLocationsChange([])
  }

  if (loading) return <LoadingSpin />
  if (error) return error
  const { allLocations } = data

  return <MainLayout title='Maps' header='Карти' >
    <div style={{ position: 'relative' }}>
      <GoogleMaps disableDefaultUI={ false } zoom={ 6 } locations={ locations } />
      <SortLocations locationsChange={ locationsChange } setLocationsChange={ setLocationsChange } resetLocations={ resetLocations } />
    </div>
  </MainLayout>
}

export default Map