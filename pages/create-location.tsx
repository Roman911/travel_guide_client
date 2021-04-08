import React, {useCallback, useEffect, useState} from "react"
import { useDispatch } from 'react-redux'
import { css } from "aphrodite/no-important"
import baseStyles from '../styles'
import { MainLayout } from "../Components"
import { GoogleMaps } from '../modules'
import { CreateLocationSelector } from '../modules'
import { widthBlocks } from "../variabels"
import { useWindowDimensions } from '../hooks/useWindowDimensions'
import { locationsActions } from "../redux/actions"

const CreateLocation: React.FC =() => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()
  const [ latLng, setLatLnd ] = useState(null)
  const [ isType, setIsType ] = useState(null)
  const options = { location: latLng, isType, search: true }
  const click = useCallback(event => {
    setLatLnd({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    })
  }, [])

  useEffect(() => {
    dispatch(locationsActions.changeData({ control: 'MarkerQuery' }))
    if (options) {
      dispatch(locationsActions.changeData(options))
    }
  }, [options])

  return <MainLayout title={'Create Location'} header='Редагування'>
    <div className={ css(baseStyles.wrapperCreateLocation) }>
      <GoogleMaps width={ width > 920 && `calc(100% - ${ widthBlocks.newsBlock }px)` } click={ click } />
      <CreateLocationSelector latLng={ latLng } setIsType={ setIsType } />
    </div>
  </MainLayout>
}

export default CreateLocation