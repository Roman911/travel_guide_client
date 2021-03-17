import React from "react"
import { useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import { getDataFromTree } from "@apollo/react-ssr"
import { ALL_LOCATIONS } from '../apollo/queries'
import { LoadingSpin, MainLayout } from "../Components"
import withApollo from "../lib/withApollo"
import { GoogleMaps, SortLocations } from "../modules"
import { googleMapsActions } from '../redux/actions'

const Map: React.FC = (): any => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery( ALL_LOCATIONS )
  if (loading) return <LoadingSpin />
  if (error) return `Error! ${error}`
  const { allLocations } = data
  dispatch(googleMapsActions.setLocations(allLocations))

  return <MainLayout title='Maps' header='Карти' >
    <div style={{ position: 'relative' }}>
      <GoogleMaps disableDefaultUI={ false } search={ true } width='100%' />
      <SortLocations />
    </div>
  </MainLayout>
}

export default withApollo(Map, { getDataFromTree })