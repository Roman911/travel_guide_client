import React from "react"
import { useSelector } from "react-redux"
import { useQuery } from "@apollo/react-hooks"
import { ALL_POSTS, POST_SORT_BY_TAG, LENGTH_POSTS } from '../../../apollo/queries'
import { New } from '../Components'
import { User } from '../../../typeScript/user'

type NewsProps = {
  options: {
    page: number
    limit: number
    tag: string
  }
  width: number
  setLength: any
  setLoadPosts?: any
}

export const News: React.FC<NewsProps> = ({ options: { page, limit, tag }, width, setLength, setLoadPosts }: NewsProps): any => {
  const { data: userData } = useSelector((state: User) => state)
  const variables = tag !== 'undefined' ? { tag } : { page, limit }
  const { loading, error, data } = useQuery(tag !== 'undefined' ? POST_SORT_BY_TAG : ALL_POSTS, { variables })
  const { data: postsData } = useQuery(LENGTH_POSTS)

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

  const posts = tag !== 'undefined' ? data.postsSortByTag : data.allPosts

  return posts.map(item => <New key={ item._id } item={ item } width={ width } userData={ userData } type='/post' />)
}