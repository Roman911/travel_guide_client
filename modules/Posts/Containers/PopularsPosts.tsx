import React from 'react'
import { useQuery } from "@apollo/react-hooks"
import { popularsPostsQuery } from './querys'
import { LoadingSpin } from '../../../Components'
import {PopularPost, WrapperPopularPosts} from '../Components'

export const PopularsPosts: React.FC = (): any => {
  const {loading, error, data} = useQuery(popularsPostsQuery)
  if (loading) return <LoadingSpin/>
  if (error) return `Error! ${error}`
  const {popularsPosts} = data

  const posts = data && popularsPosts.map((item, index) => {
    return <PopularPost key={index} item={ item } />
  })

  return <WrapperPopularPosts>
    { posts }
  </WrapperPopularPosts>
}