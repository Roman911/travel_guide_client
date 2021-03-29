import React, { useState } from "react"
import { useQuery } from '@apollo/react-hooks'
import { Information } from "../Components/Information"
import { LOCATION } from '../../../apollo/queries'
import { LoadingSpin } from "../../../Components"
import { useKeyPress } from '../../../hooks/useKeyPress'
import { useClickOutside } from '../../../hooks/useClickOutside'

type MyLocationInformationProps = {
  _id: string
  selectedPark: null | string
  setSelectedPark: (_id: string | null) => void
}

export const LocationInformation: React.FC<MyLocationInformationProps> = ({ _id, selectedPark, setSelectedPark }): any => {
  const [ openWindow, setOpenWindow ] = useState(false)
  const [ closeWindow, setCloseWindow ] = useState(true)
  const [ className, setClassName ] = useState(null)
  const handleClick = () => {
    setCloseWindow(false)
    setTimeout(() => {
      setSelectedPark(null)
      setCloseWindow(true)
      setOpenWindow(false)
    }, 500)
  }
  useKeyPress('Escape', handleClick)
  useClickOutside(className, handleClick)
  const { loading, error, data } = useQuery(LOCATION, {
    variables: { _id }
  })
  if (loading) return <LoadingSpin />
  if (error) return `Error! ${error}`
  const { location } = data

  return <Information location={ location } selectedPark={ selectedPark } handleClick={ handleClick } closeWindow={ closeWindow } openWindow={ openWindow } setOpenWindow={ setOpenWindow } setClassName={ setClassName } />
}