import React from "react"
import { useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import { getDataFromTree } from "@apollo/react-ssr"
import { locationsQuery } from '../apollo/queries/maps'
import { LoadingSpin, MainLayout } from "../Components"
import withApollo from "../lib/withApollo"
import { GoogleMaps, SortLocations } from "../modules"
import { googleMapsActions } from '../redux/actions'

const Map: React.FC = (): any => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery( locationsQuery )
  if (loading) return <LoadingSpin />
  if (error) return `Error! ${error}`
  const { allLocations } = data
  dispatch(googleMapsActions.setLocations(allLocations))

  return <MainLayout title='Maps' header='Карти' >
    <div style={{ position: 'relative' }}>
      <GoogleMaps disableDefaultUI={ false } search={ true } />
      <SortLocations />
    </div>
  </MainLayout>
}

export default withApollo(Map, { getDataFromTree })