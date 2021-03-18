import React from "react"
import { useQuery } from '@apollo/react-hooks'
import { getDataFromTree } from "@apollo/react-ssr"
import { ALL_LOCATIONS } from '../apollo/queries'
import { LoadingSpin, MainLayout } from "../Components"
import withApollo from "../lib/withApollo"
import { GoogleMaps, SortLocations } from "../modules"

const Map: React.FC = (): any => {
  const { loading, error, data } = useQuery( ALL_LOCATIONS )
  if (loading) return <LoadingSpin />
  if (error) return `Error! ${error}`
  const { allLocations } = data

  const changeData = {
    disableDefaultUI: false,
    mapContainerStyle: { height: "calc(100vh - 200px)", width: "100%" },
    center: { lat: 49.026151, lng: 31.483070 },
    zoom: 6
  }

  return <MainLayout title='Maps' header='Карти' >
    <div style={{ position: 'relative' }}>
      <GoogleMaps search={ true } changeData={ changeData } locations={ allLocations } />
      {/*<GoogleMaps disableDefaultUI={ false } search={ true } width='100%' changeData={ changeData } />*/}
      <SortLocations />
    </div>
  </MainLayout>
}

export default withApollo(Map, { getDataFromTree })