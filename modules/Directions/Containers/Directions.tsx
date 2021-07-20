import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useQuery } from "@apollo/react-hooks"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions"
import { HomePageBlock } from "../../../Components"
import { Direction } from '../Components'
import { ALL_DIRECTIONS, DIRECTIONS_SORT_BY_TAG, LENGTH_DIRECTIONS } from "../../../apollo/queries"
import { User } from '../../../typeScript/user'
import { locationsActions, directionLocations } from "../../../redux/actions"

type DirectionsProps = {
  lengthDefault: number
  page: number
  limit: number
  tag?: string
}

export const Directions: React.FC<DirectionsProps> = ({ lengthDefault, page, limit, tag }): any => {
  const dispatch = useDispatch()
  const { width } = useWindowDimensions()
  const { data: userData } = useSelector((state: User) => state)
  const variables = tag !== 'undefined' ? { tag } : { page, limit }
  const { loading, error, data } = useQuery(tag !== 'undefined' ? DIRECTIONS_SORT_BY_TAG : ALL_DIRECTIONS, { variables })
  const { data: directionsData } = useQuery(LENGTH_DIRECTIONS)
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
    if (allDirections) dispatch(directionLocations.allDirections(allDirections))
  }, [ data ])

  if (loading) return ''
  if  (error ) return `Error! ${error}`

  const allDirections = tag !== 'undefined' ? data.directionsSortByTag : data.allDirections
  const lengthDirections = directionsData ? directionsData.lengthDirections : undefined

  return <HomePageBlock title='Маршрути' content={{ value: 'маршрутів', path: '/directions' }} length={{ lengthDefault, length: lengthDirections }} >
    { allDirections.map((item, index) => <Direction key={ index } index={ index } item={ item } width={ width } userData={ userData } />) }
  </HomePageBlock>
}