import React, { useCallback, useState } from "react"
import { useRouter } from 'next/router'
import { SortLocation } from "../Components"
import { useKeyPress } from '../../../hooks/useKeyPress'

type SortLocationsProps = {
  locationsChange: Types[]
  setLocationsChange: (any) => void
  resetLocations: () => void
}

type Types = {
  type: string
  select: boolean
}

export const SortLocations: React.FC<SortLocationsProps> = ({ locationsChange, setLocationsChange, resetLocations }): any => {
  const router = useRouter()
  const [ showBar, setShowBar ] = useState( false )
  const handleClickTitle = useCallback(() => {
    setShowBar(prev => !prev)
  }, [showBar])
  const handleClickReset = () => {
    router.replace('/maps', undefined, {shallow: true}).then(r => r)
    resetLocations()
  }
  useKeyPress('Escape', handleClickTitle)

  return <SortLocation locationsChange={ locationsChange } setLocationsChange={ setLocationsChange } showBar={ showBar } handleClickTitle={ handleClickTitle } handleClickReset={ handleClickReset } />
}