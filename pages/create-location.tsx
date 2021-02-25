import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { css } from "aphrodite/no-important"
import baseStyle from '../styles'
import { MainLayout } from "../Components"
import { GoogleMaps } from '../modules'
import { CreateLocationSelector } from '../modules'
import { googleMapsActions } from '../redux/actions'

const CreateLocation =() => {
  const dispatch = useDispatch()
  const options = {
    locations: null,
    control: null,
    center: { lat: 49.026151, lng: 31.483070 }
  }

  useEffect(() => {
    dispatch(googleMapsActions.createLocation(options))
  }, [])

  const [ latLng, setLatLnd ] = useState(null)
  const click = useCallback((event) => {
    setLatLnd({
      coordinateY: event.latLng.lat(),
      coordinateX: event.latLng.lng()
    })
  }, [])
  return <MainLayout title={'Create Location'} header='Редагування'>
    <div className={ css(baseStyle.wrapperCreateLocation) }>
      <GoogleMaps disableDefaultUI={ false } click={ click } search={ true } />
      <CreateLocationSelector latLng={ latLng } />
    </div>
  </MainLayout>
}

export default CreateLocation