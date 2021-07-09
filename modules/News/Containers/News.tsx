import React from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { useQuery } from "@apollo/react-hooks"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions"
import { HomePageBlock } from "../../../Components"
import { New } from '../Components'
import { ALL_POSTS, POST_SORT_BY_TAG } from "../../../apollo/queries"
import { User } from '../../../typeScript/user'

export const News: React.FC = (): any => {
  const router = useRouter()
  const tag = router.query.item
  const { width } = useWindowDimensions()
  const { data: userData } = useSelector((state: User) => state)
  const { loading, error, data } = useQuery(!tag ? ALL_POSTS : POST_SORT_BY_TAG, { variables: { tag } })
  if (loading) return ''
  if  (error ) return `Error! ${error}`
  const posts = !tag ? data.allPosts : data.postsSortByTag

  return <HomePageBlock title='Новини' >
    { posts.map((item, index) => <New key={ index } item={ item } width={ width } userData={ userData } />) }
  </HomePageBlock>
}