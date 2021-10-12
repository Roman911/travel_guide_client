import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { New } from '../../News/Components'
import { ALL_DIRECTIONS, DIRECTIONS_SORT_BY_TAG, LENGTH_DIRECTIONS } from "../../../apollo/queries"

type IDirections = {
  options: {
    page: number
    limit: number
    tag?: string
  }
  width: number
  setLength: any
  setLoadDirections?: any
}

export const Directions: React.FC<IDirections> = ({ options: { page, limit, tag }, width, setLength, setLoadDirections }: IDirections): any => {
  const { changeData, setAllDirections } = useActions()
  const { data: userData } = useTypedSelector(state => state.user)
  const variables = tag ? { tag } : { page, limit }
  const { loading, error, data } = useQuery(tag ? DIRECTIONS_SORT_BY_TAG : ALL_DIRECTIONS, { variables })
  const { data: directionsData } = useQuery(LENGTH_DIRECTIONS)
  const widthGM = width > 690 ? "100%" : '140px'

  const options = {
    disableDefaultUI: true,
    search: false,
    mapContainerStyle: { height: "156px", width: widthGM }
  }

  React.useEffect(() => {
    changeData(options)
  }, [])

  React.useEffect(() => {
    if (allDirections) setAllDirections(allDirections)
  }, [ data ])

  React.useEffect(() => {
    if (directionsData) {
      setLength(directionsData.lengthDirections)
    }
  }, [ directionsData ])

  React.useEffect(() => {
    if (setLoadDirections !== undefined && !loading) {
      setLoadDirections(true)
    }
  }, [loading])

  if (loading) return ''
  if  (error ) return `Error! ${error}`

  const allDirections = tag ? data.directionsSortByTag : data.allDirections

  return allDirections.map(item => <New key={ item._id } item={ item } width={ width } userData={ userData } type='/direction' />)
}