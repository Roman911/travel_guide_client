import React, { useCallback, useState } from "react"
import { css } from "aphrodite/no-important"
import baseStyles from '../styles'
import { MainLayout } from "../Components"
import { GoogleMaps } from '../modules'
import { CreateLocationSelector } from '../modules'
import { widthBlocks } from "../variabels"
import { useWindowDimensions } from '../hooks/useWindowDimensions'

const CreateLocation: React.FC =() => {
  const { width } = useWindowDimensions()
  const [ latLng, setLatLnd ] = useState(null)
  const [ isType, setIsType ] = useState(null)
  const options = { location: latLng, isType }
  const click = useCallback(event => {
    setLatLnd({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    })
  }, [])

  return <MainLayout title={'Create Location'} header='Редагування'>
    <div className={ css(baseStyles.wrapperCreateLocation) }>
      <GoogleMaps zoom={ 6 } width={ width > 920 && `calc(100% - ${ widthBlocks.newsBlock }px)` } click={ click } options={ options } />
      <CreateLocationSelector latLng={ latLng } setIsType={ setIsType } />
    </div>
  </MainLayout>
}

export default CreateLocation