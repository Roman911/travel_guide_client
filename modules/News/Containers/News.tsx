import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { ALL_POSTS, POST_SORT_BY_TAG, LENGTH_POSTS } from '../../../apollo/queries'
import { New } from '../Components'

type INews = {
  options: {
    page: number
    limit: number
    tag?: any
    search?: string
  }
  width: number
  setLength: any
  setLoadPosts?: any
}

export const News: React.FC<INews> = ({ options: { page, limit, tag, search }, width, setLength, setLoadPosts }: INews): any => {
  const { data: userData } = useTypedSelector(state => state.user)
  const variables = tag ? { tag } : { page, limit }
  // const query = tag
  const { loading, error, data } = useQuery(tag ? POST_SORT_BY_TAG : ALL_POSTS, { variables })
  const { data: postsData } = useQuery(LENGTH_POSTS)

  console.log(tag, search)

  React.useEffect(() => {
    if (postsData) {
      setLength(postsData.lengthPosts)
    }
  }, [ postsData ])

  React.useEffect(() => {
    if (setLoadPosts !== undefined && !loading) {
      setLoadPosts(true)
    }
  }, [loading])

  if (loading) return ''
  if (error ) return `Error! ${error}`

  const posts = tag ? data.postsSortByTag : data.allPosts

  return posts.map(item => <New key={ item._id } item={ item } width={ width } userData={ userData } type='/post' />)
}