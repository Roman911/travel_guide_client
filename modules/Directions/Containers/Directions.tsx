import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useQuery } from "@apollo/react-hooks"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions"
import { HomePageBlock } from "../../../Components"
import { Direction } from '../Components'
import { ALL_DIRECTIONS } from "../../../apollo/queries"
import { User } from '../../../typeScript/user'
import { locationsActions, directionLocations } from "../../../redux/actions"

export const Directions: React.FC = (): any => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()
  const { data: userData } = useSelector((state: User) => state)
  const { loading, error, data } = useQuery(ALL_DIRECTIONS)
  const widthGM = width > 690 ? "100%" : '140px'

  const options = {
    disableDefaultUI: true,
    search: false,
    mapContainerStyle: { height: "156px", width: widthGM }
  }

  React.useEffect(() => {
    dispatch(locationsActions.changeData(options))
  }, [])

  React.useEffect(() => {
    if (data) dispatch(directionLocations.allDirections(allDirections))
  }, [ data ])

  if (loading) return ''
  if  (error ) return `Error! ${error}`
  const { allDirections } = data

  return <HomePageBlock title='Маршрути' >
    { allDirections.map((item, index) => <Direction key={ index } index={ index } item={ item } width={ width } userData={ userData } />) }
  </HomePageBlock>
}