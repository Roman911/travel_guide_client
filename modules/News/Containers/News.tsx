import React from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { useQuery } from "@apollo/react-hooks"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions"
import { HomePageBlock } from "../../../Components"
import { New } from '../Components'
import { ALL_POSTS, POST_SORT_BY_TAG, LENGTH_POSTS } from "../../../apollo/queries"
import { User } from '../../../typeScript/user'

type NewsProps = {
  lengthDefault: number
}

export const News: React.FC<NewsProps> = ({ lengthDefault }): any => {
  const router = useRouter()
  const tag = router.query.item
  const { width } = useWindowDimensions()
  const { data: userData } = useSelector((state: User) => state)
  const { loading, error, data } = useQuery(!tag ? ALL_POSTS : POST_SORT_BY_TAG, { variables: { tag } })
  const { data: postsData } = useQuery(LENGTH_POSTS)
  if (loading) return ''
  if (error ) return `Error! ${error}`
  const posts = !tag ? data.allPosts : data.postsSortByTag
  const lengthPosts = postsData ? postsData.lengthPosts : undefined

  return <HomePageBlock title='Новини' content={{ value: 'новин', path: '/posts' }} length={{ lengthDefault, length: lengthPosts }} >
    { posts.map((item, index) => <New key={ index } item={ item } width={ width } userData={ userData } />) }
  </HomePageBlock>
}