import React, { useCallback, useState } from "react"
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { SortLocation } from "../Components"
import { useKeyPress } from '../../../hooks/useKeyPress'
import { LocationsActionCreators } from "../../../redux/actionCreators"

type SortLocationsProps = {
  url?: string
}

export const SortLocations: React.FC<SortLocationsProps> = ({ url }): any => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { locationsChange } = useTypedSelector(state => state.locations)
  const [ showBar, setShowBar ] = useState( false )

  const handleClickTitle = useCallback(() => {
    setShowBar(prev => !prev)
  }, [showBar])

  useKeyPress('Escape', handleClickTitle)

  const handleClickReset = () => {
    url && router.replace(url, undefined, { shallow: true }).then(r => r)
    dispatch(LocationsActionCreators.showAllLocations())
  }

  return <SortLocation locationsChange={ locationsChange } showBar={ showBar } handleClickTitle={ handleClickTitle } handleClickReset={ handleClickReset } />
}