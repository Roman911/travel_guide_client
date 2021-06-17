import React from "react"
import { useSelector } from "react-redux"
import { useQuery } from "@apollo/react-hooks"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions"
import { HomePageBlock } from "../../../Components"
import { New } from '../Components'
import { ALL_POSTS } from "../../../apollo/queries"
import { User } from '../../../typeScript/user'

export const News: React.FC = (): any => {
  const { width } = useWindowDimensions()
  const { data: userData } = useSelector((state: User) => state)
  const { loading, error, data } = useQuery(ALL_POSTS)
  if (loading) return ''
  if  (error ) return `Error! ${error}`
  const { allPosts } = data

  return <HomePageBlock title='Новини' >
    { allPosts.map((item, index) => <New key={ index } item={ item } width={ width } userData={ userData } />) }
  </HomePageBlock>
}