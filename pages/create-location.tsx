import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { css } from "aphrodite/no-important"
import baseStyles from '../styles'
import { MainLayout } from "../Components"
import { GoogleMaps } from '../modules'
import { CreateLocationSelector } from '../modules'
import { googleMapsActions } from '../redux/actions'
import { widthBlocks } from "../variabels"
import { useWindowDimensions } from '../hooks/useWindowDimensions'

const CreateLocation =() => {
  const { width } = useWindowDimensions()
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
    <div className={ css(baseStyles.wrapperCreateLocation) }>
      <GoogleMaps disableDefaultUI={ false } click={ click } search={ true } width={ width < 920 ? '100%' : `calc(100% - ${ widthBlocks.newsBlock }px)` } />
      <CreateLocationSelector latLng={ latLng } />
    </div>
  </MainLayout>
}

export default CreateLocation