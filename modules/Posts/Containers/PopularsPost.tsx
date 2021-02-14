import { useQuery } from "@apollo/react-hooks"
import { postsQuery } from './querys'
import { LoadingSpin } from '../../../Components'
import {PopularPost, WrapperPopularPosts} from '../Components'

export const PopularsPost = () => {
  const {loading, error, data} = useQuery(postsQuery)
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