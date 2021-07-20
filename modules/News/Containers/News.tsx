import React from "react"
import { useSelector } from "react-redux"
import { useQuery } from "@apollo/react-hooks"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions"
import { HomePageBlock } from "../../../Components"
import { New } from '../Components'
import { ALL_POSTS, POST_SORT_BY_TAG, LENGTH_POSTS } from "../../../apollo/queries"
import { User } from '../../../typeScript/user'

type NewsProps = {
  lengthDefault: number
  page: number
  limit: number
  tag: string
}

export const News: React.FC<NewsProps> = ({ lengthDefault, page, limit, tag }): any => {
  const { width } = useWindowDimensions()
  const { data: userData } = useSelector((state: User) => state)
  const variables = tag !== 'undefined' ? { tag } : { page, limit }
  const { loading, error, data } = useQuery(tag !== 'undefined' ? POST_SORT_BY_TAG : ALL_POSTS, { variables })
  const { data: postsData } = useQuery(LENGTH_POSTS)
  if (loading) return ''
  if (error ) return `Error! ${error}`
  const posts = tag !== 'undefined' ? data.postsSortByTag : data.allPosts
  const lengthPosts = postsData ? postsData.lengthPosts : undefined

  return <HomePageBlock title='Новини' content={{ value: 'новин', path: '/posts' }} length={{ lengthDefault, length: lengthPosts }} >
    { posts.map((item, index) => <New key={ index } item={ item } width={ width } userData={ userData } />) }
  </HomePageBlock>
}