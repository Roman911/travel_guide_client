import React, { useCallback, useState } from "react"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { SortLocation } from "../Components"
import { useKeyPress } from '../../../hooks/useKeyPress'
import { locationsActions } from "../../../redux/actions"

export const SortLocations: React.FC = (): any => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { locationsChange } = useSelector(state => state.locations)
  const [ showBar, setShowBar ] = useState( false )

  const handleClickTitle = useCallback(() => {
    setShowBar(prev => !prev)
  }, [showBar])

  useKeyPress('Escape', handleClickTitle)

  const handleClickReset = () => {
    router.replace('/maps', undefined, { shallow: true }).then(r => r)
    dispatch(locationsActions.showAllLocations())
  }

  return <SortLocation locationsChange={ locationsChange } showBar={ showBar } handleClickTitle={ handleClickTitle } handleClickReset={ handleClickReset } />
}