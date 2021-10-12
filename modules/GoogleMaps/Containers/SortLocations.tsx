import React, { useCallback, useState } from "react"
import { useRouter } from 'next/router'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { SortLocation } from "../Components"
import { useKeyPress } from '../../../hooks/useKeyPress'

type ISortLocations = {
  url?: string
}

export const SortLocations: React.FC<ISortLocations> = ({ url }): any => {
  const router = useRouter()
  const { showAllLocations } = useActions()
  const { locationsChange } = useTypedSelector(state => state.locations)
  const [ showBar, setShowBar ] = useState( false )

  const handleClickTitle = useCallback(() => {
    setShowBar(prev => !prev)
  }, [showBar])

  useKeyPress('Escape', handleClickTitle)

  const handleClickReset = () => {
    url && router.replace(url, undefined, { shallow: true }).then(r => r)
    showAllLocations()
  }

  return <SortLocation locationsChange={ locationsChange } showBar={ showBar } handleClickTitle={ handleClickTitle } handleClickReset={ handleClickReset } />
}