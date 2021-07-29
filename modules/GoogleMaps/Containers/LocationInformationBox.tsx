import React from "react"
import { LocationInformationWrapper } from "../Components/LocationInformationWrapper"
import { LocationInformation } from "./LocationInformation"
import { useKeyPress } from "../../../hooks/useKeyPress"
import { useClickOutside } from "../../../hooks/useClickOutside"

type LocationInformationWrapperProps = {
  _id: string
  selectedPark: null | string
  setSelectedPark: (_id: string | null) => void
}

export const LocationInformationBox: React.FC<LocationInformationWrapperProps> = ({ _id, selectedPark, setSelectedPark }) => {
  const [ openWindow, setOpenWindow ] = React.useState(false)
  const [ closeWindow, setCloseWindow ] = React.useState(true)
  const [ className, setClassName ] = React.useState(null)

  React.useEffect(() => {
    setOpenWindow(true)
  }, [ selectedPark ])

  const handleClick = () => {
    setCloseWindow(false)
    setTimeout(() => {
      setSelectedPark(null)
      setCloseWindow(true)
      setOpenWindow(false)
    }, 400)
  }
  useKeyPress('Escape', handleClick)
  useClickOutside(className, handleClick)

  return <LocationInformationWrapper closeWindow={ closeWindow } openWindow={ openWindow } setClassName={ setClassName } >
    <LocationInformation _id={ _id } handleClick={ handleClick } />
  </LocationInformationWrapper>
}