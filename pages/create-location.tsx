import React from "react"
import { css } from "aphrodite/no-important"
import { useActions } from '../hooks/useActions'
import baseStyles from '../styles'
import { MainLayout } from "../Components"
import { GoogleMaps } from '../modules'
import { CreateLocationSelector } from '../modules'
import { widthBlocks } from "../variabels"
import { useWindowDimensions } from '../hooks/useWindowDimensions'

const CreateLocation: React.FC =() => {
  const { changeData } = useActions()
  const { width } = useWindowDimensions()
  const [ latLng, setLatLnd ] = React.useState(null)
  const [ isType, setIsType ] = React.useState(null)
  const options = { location: latLng, isType, search: true }

  React.useEffect(() => {
    changeData({ control: 'MarkerQuery' })
    if (options) changeData(options)
  }, [options])

  return <MainLayout title={'Create Location'} header='Редагування'>
    <div className={ css(baseStyles.wrapperCreateLocation) }>
      <GoogleMaps width={ width > 920 && `calc(100% - ${ widthBlocks.newsBlock }px)` } setLatLnd={ setLatLnd } />
      <CreateLocationSelector latLng={ latLng } setIsType={ setIsType } />
    </div>
  </MainLayout>
}

export default CreateLocation